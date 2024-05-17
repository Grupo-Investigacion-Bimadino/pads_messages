import { Injectable } from '@nestjs/common';
import { CreateTextosasociadosIntencioneDto } from './dto/create-textosasociados_intencione.dto';
import { UpdateTextosasociadosIntencioneDto } from './dto/update-textosasociados_intencione.dto';

@Injectable()
export class TextosasociadosIntencionesService {
  create(createTextosasociadosIntencioneDto: CreateTextosasociadosIntencioneDto) {
    return 'This action adds a new textosasociadosIntencione';
  }

  findAll() {
    return `This action returns all textosasociadosIntenciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} textosasociadosIntencione`;
  }

  update(id: number, updateTextosasociadosIntencioneDto: UpdateTextosasociadosIntencioneDto) {
    return `This action updates a #${id} textosasociadosIntencione`;
  }

  remove(id: number) {
    return `This action removes a #${id} textosasociadosIntencione`;
  }
}
