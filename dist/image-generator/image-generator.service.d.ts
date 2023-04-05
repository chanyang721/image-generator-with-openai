import { PromptGeneratorService } from '../prompt-generator/prompt-generator.service';
import { ConfigService } from '@nestjs/config';
export declare class ImageGeneratorService {
    private readonly configService;
    private readonly promptGeneratorService;
    constructor(configService: ConfigService, promptGeneratorService: PromptGeneratorService);
    getImageList(): Promise<void>;
}
