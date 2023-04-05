import { Controller, Get }       from '@nestjs/common';
import { ImageGeneratorService } from './image-generator.service';

@Controller('image-generator')
export class ImageGeneratorController {
  constructor(
      private readonly imageGeneratorService: ImageGeneratorService
  ) {}

  @Get()
  async getImageList() {
    return await this.imageGeneratorService.getImageList();
  }

}
