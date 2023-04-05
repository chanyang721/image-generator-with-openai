import { PartialType } from '@nestjs/mapped-types';
import { CreateImageGeneratorDto } from './create-image-generator.dto';

export class UpdateImageGeneratorDto extends PartialType(CreateImageGeneratorDto) {}
