import { PartialType } from '@nestjs/mapped-types';
import { CreateIntencioneDto } from './create-intencione.dto';

export class UpdateIntencioneDto extends PartialType(CreateIntencioneDto) {}
