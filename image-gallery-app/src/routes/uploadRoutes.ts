import { Router } from 'express';
import { UploadController } from '../controllers/uploadController';
import { fileUpload } from '../middleware/fileUpload';

const router = Router();
const uploadController = new UploadController();

export function setUploadRoutes(app: Router) {
    app.post('/upload', fileUpload.single('image'), uploadController.uploadImage);
}