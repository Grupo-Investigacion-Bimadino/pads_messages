import { PartialType } from '@nestjs/mapped-types';
import { CreateTextosasociadosIntencioneDto } from './create-textosasociados_intencione.dto';

export class UpdateTextosasociadosIntencioneDto extends PartialType(CreateTextosasociadosIntencioneDto) {}
