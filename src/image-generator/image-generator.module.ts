import { Module }                   from '@nestjs/common';
import { ImageGeneratorService }    from './image-generator.service';
import { ImageGeneratorController } from './image-generator.controller';
import { PromptGeneratorModule }    from '../prompt-generator/prompt-generator.module'

@Module({
  imports: [PromptGeneratorModule],
  controllers: [ImageGeneratorController],
  providers: [ImageGeneratorService]
})
export class ImageGeneratorModule {}
