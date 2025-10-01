export class GalleryService {
    private images: string[] = [];

    constructor() {}

    fetchGalleryImages(): string[] {
        return this.images;
    }

    addImage(imageUrl: string): void {
        this.images.push(imageUrl);
    }

    clearGallery(): void {
        this.images = [];
    }
}