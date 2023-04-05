import { ImageGeneratorService } from './image-generator.service';
export declare class ImageGeneratorController {
    private readonly imageGeneratorService;
    constructor(imageGeneratorService: ImageGeneratorService);
    getImageList(): Promise<void>;
}
