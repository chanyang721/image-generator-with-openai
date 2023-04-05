import { PartialType } from '@nestjs/mapped-types';
import { CreatePromptGeneratorDto } from './create-prompt-generator.dto';

export class UpdatePromptGeneratorDto extends PartialType(CreatePromptGeneratorDto) {}
