class UploadController {
    constructor(private storageService: StorageService) {}

    async uploadImage(req: Request, res: Response) {
        try {
            const file = req.file;
            if (!file) {
                return res.status(400).send('No file uploaded.');
            }

            await this.storageService.uploadFile(file);
            res.status(200).send('File uploaded successfully.');
        } catch (error) {
            res.status(500).send('Error uploading file: ' + error.message);
        }
    }
}

export default UploadController;