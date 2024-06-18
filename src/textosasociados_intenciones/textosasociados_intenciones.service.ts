import { Injectable } from '@nestjs/common';
import { CreateTextosasociadosIntencioneDto } from './dto/create-textosasociados_intencione.dto';
import { UpdateTextosasociadosIntencioneDto } from './dto/update-textosasociados_intencione.dto';

@Injectable()
export class TextosasociadosIntencionesService {
  
  create(createTextosasociadosIntencioneDto: CreateTextosasociadosIntencioneDto) {
    return createTextosasociadosIntencioneDto;
  }

  findAll() {
    return [
      {
        id:"1",
        texto: "Hola necesito abrir chatbox",
        id_Intencion:"1",
      },
      {
        id:"2",
        texto: "Hola necesito abrir soprte tecnico",
        id_Intencion:"2",
      },
      {
        id:"3",
        texto: "Hola necesito abrir una peticion de grupo",
        id_Intencion:"3",
      },
    ];
  }

    findOne(id: number) {
      return {
        id:"1",
        texto: "Hola necesito abrir chatbox",
        id_Intencion:"1"
      };
    }

    update(id: number, updateTextosasociadosIntencioneDto: UpdateTextosasociadosIntencioneDto) {
     return updateTextosasociadosIntencioneDto;
    }

    remove(id: number) {
      return {
        id:`${id}`,
        texto: "Hola necesito abrir chatbox",
        id_Intencion:"1"
      };
    }
  }
