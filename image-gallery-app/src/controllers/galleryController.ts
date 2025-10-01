export class GalleryController {
    private galleryService: any;

    constructor(galleryService: any) {
        this.galleryService = galleryService;
    }

    public async getGallery(req: any, res: any): Promise<void> {
        try {
            const images = await this.galleryService.fetchGalleryImages();
            res.render('gallery', { images });
        } catch (error) {
            res.status(500).send('Error retrieving gallery images');
        }
    }
}