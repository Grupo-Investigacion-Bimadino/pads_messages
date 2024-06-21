import { Inject, Injectable } from '@nestjs/common';
import { CreateIntencioneDto } from './dto/create-intencione.dto';
import { UpdateIntencioneDto } from './dto/update-intencione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Intencion } from './schemas/intenciones.schema';

@Injectable()
export class IntencionesService {
 constructor(@InjectModel(Intencion.name) private intencionModel: Model<Intencion>) {}
  
  async create(createIntencioneDto: CreateIntencioneDto) {
    const createIntencione = new this.intencionModel(createIntencioneDto);
    return createIntencione.save();
  }

  async findAll() {
    return await this.intencionModel.find().exec();
  }

  async findOne(id: string) {
    return await this.intencionModel.findById(id).exec();
  }

  async update(id: string, updateIntencioneDto: UpdateIntencioneDto) {
    const intencionUpdated = await this.intencionModel.findByIdAndUpdate(id, updateIntencioneDto, {new: true});
    if(!intencionUpdated) return 'Intencion not found';
    return intencionUpdated;
  }

  async remove(id: string) {
    const intencionDeleted = await this.intencionModel.findByIdAndDelete(id);
    return intencionDeleted;
  }
}
