import { Injectable } from '@nestjs/common';
import { CreateTextosasociadosIntencioneDto } from './dto/create-textosasociados_intencione.dto';
import { UpdateTextosasociadosIntencioneDto } from './dto/update-textosasociados_intencione.dto';
import { Textoasociado } from './schemas/textoasociado_intenciones.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class TextosasociadosIntencionesService {
  constructor (@InjectModel(Textoasociado.name) private textosasociadosIntencioneModel: Model<Textoasociado>) {}
  
  async create(createTextosasociadosIntencioneDto: CreateTextosasociadosIntencioneDto) {
    const createTextosasociadosIntencione = new this.textosasociadosIntencioneModel(createTextosasociadosIntencioneDto);
    return createTextosasociadosIntencione.save();
  }
 
  async findAll() {
    return await this.textosasociadosIntencioneModel.find().exec();
  }

    async findOne(id: string) {
     return this.textosasociadosIntencioneModel.findById(id);
    }

    async update(id: string, updateTextosasociadosIntencioneDto: UpdateTextosasociadosIntencioneDto) {
      const textosasociadosUpdate = await this.textosasociadosIntencioneModel.findByIdAndUpdate(id, updateTextosasociadosIntencioneDto, {new: true})
      if(!textosasociadosUpdate) return 'Texto asociado not found';
      return textosasociadosUpdate;
    }

   async remove(id: string) {
     const textosasociadosDeleted = await this.textosasociadosIntencioneModel.findByIdAndDelete(id);
     return textosasociadosDeleted;
    } 
  }
