import { Module }                   from '@nestjs/common';
import { ImageGeneratorService }    from './image-generator.service';
import { ImageGeneratorController } from './image-generator.controller';
import { PromptGeneratorModule }    from '../prompt-generator/prompt-generator.module'
import { PromptGeneratorService }   from '../prompt-generator/prompt-generator.service'

@Module({
  imports: [PromptGeneratorModule],
  controllers: [ImageGeneratorController],
  providers: [ImageGeneratorService, PromptGeneratorService]
})
export class ImageGeneratorModule {}
