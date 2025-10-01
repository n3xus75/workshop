import { Router } from 'express';
import { GalleryController } from '../controllers/galleryController';

const router = Router();
const galleryController = new GalleryController();

export function setGalleryRoutes(app: Router) {
    app.get('/gallery', galleryController.getGallery.bind(galleryController));
}