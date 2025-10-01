
from flask import Flask, render_template, request, redirect, url_for
from azure.storage.blob import BlobServiceClient
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# Konfiguracja Azure Storage
AZURE_CONNECTION_STRING = os.getenv("AZURE_CONNECTION_STRING")
AZURE_CONTAINER_NAME = os.getenv("AZURE_CONTAINER_NAME", "gallery")
blob_service_client = BlobServiceClient.from_connection_string(AZURE_CONNECTION_STRING)
container_client = blob_service_client.get_container_client(AZURE_CONTAINER_NAME)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def gallery():
    if request.method == 'POST':
        file = request.files.get('file')
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            blob_client = container_client.get_blob_client(filename)
            blob_client.upload_blob(file, overwrite=True)
            return redirect(url_for('gallery'))
    blobs = container_client.list_blobs()
    image_urls = [
        f"https://{blob_service_client.account_name}.blob.core.windows.net/{AZURE_CONTAINER_NAME}/{blob.name}"
        for blob in blobs
    ]
    return render_template('gallery.html', image_urls=image_urls)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)