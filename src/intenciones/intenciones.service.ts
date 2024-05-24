import { Injectable } from '@nestjs/common';
import { CreateIntencioneDto } from './dto/create-intencione.dto';
import { UpdateIntencioneDto } from './dto/update-intencione.dto';

@Injectable()
export class IntencionesService {
  create(createIntencioneDto: CreateIntencioneDto) {
    return 'This action adds a new intencione';
  }

  findAll() {
    return [
      {
        id: "1",
        intencion: "chatbot",
        mensajes: "abrir abrir chatbot",
      },
      {
        id: "2",
        intencion: "soporte",
        mensajes: "comunicar con soporte",
      },
      {
        id: "3",
        intencion: "chat en grupo",
        mensajes: "hola grupo",
      },
    ];
  }

  findOne(id: number) {
    return {
    
        id: "1",
        intencion: "chatbot",
        mensajes: "abrir abrir chatbot",
      
    }
  }

  update(id: number, updateIntencioneDto: UpdateIntencioneDto) {
    return updateIntencioneDto;
  }

  remove(id: number) {
    return    {
      id: "3",
      intencion: "chat en grupo",
      mensajes: "hola grupo",
    };
  }
}
