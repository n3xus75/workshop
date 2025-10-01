export interface ImageUpload {
  filename: string;
  path: string;
  mimetype: string;
}

export interface GalleryImage {
  url: string;
  title: string;
  description?: string;
  uploadedAt: Date;
}