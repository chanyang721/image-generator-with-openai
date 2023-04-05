import { Controller, Get }        from '@nestjs/common';
import { PromptGeneratorService } from './prompt-generator.service';

@Controller('prompt-generator')
export class PromptGeneratorController {
  constructor(
      private readonly promptGeneratorService: PromptGeneratorService
  ) {}


  @Get()
  async getPromptList() {
    return await this.promptGeneratorService.getPromptList();
  }
}
