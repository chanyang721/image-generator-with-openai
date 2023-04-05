import { Module } from '@nestjs/common';
import { PromptGeneratorService } from './prompt-generator.service';
import { PromptGeneratorController } from './prompt-generator.controller';

@Module({
  controllers: [PromptGeneratorController],
  providers: [PromptGeneratorService]
})
export class PromptGeneratorModule {}
