import { Injectable } from '@nestjs/common';
import { CreateIntencioneDto } from './dto/create-intencione.dto';
import { UpdateIntencioneDto } from './dto/update-intencione.dto';

@Injectable()
export class IntencionesService {
  create(createIntencioneDto: CreateIntencioneDto) {
    return 'This action adds a new intencione';
  }

  findAll() {
    return `This action returns all intenciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intencione`;
  }

  update(id: number, updateIntencioneDto: UpdateIntencioneDto) {
    return `This action updates a #${id} intencione`;
  }

  remove(id: number) {
    return `This action removes a #${id} intencione`;
  }
}
