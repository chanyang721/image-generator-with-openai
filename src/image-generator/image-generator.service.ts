import { Injectable }             from '@nestjs/common';
import { PromptGeneratorService } from '../prompt-generator/prompt-generator.service'
import { ConfigService }          from '@nestjs/config'

@Injectable()
export class ImageGeneratorService {
    constructor(
        private readonly configService: ConfigService,
        private readonly promptGeneratorService: PromptGeneratorService
    ) {}

    public async getImageList() {
        const promptList = await this.promptGeneratorService.getPromptList();

    }
}
