import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Message } from "./schemas/messages.schema";


@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async create(createMessageDto: CreateMessageDto) {
   const createMessage = new this.messageModel(createMessageDto);
    return createMessage.save();
  }

  findAll() {
    return [
      {
        id: "1",
        emisor: "user1",
        receptor: "system",
        verificacion_enviado: true,
        verificacion_recibido: true,
        hora_enviado: "11:17",
        hora_recibido: "11:17",
        fecha_enviado: "11/08/2001",
        fecha_recibido: "11/08/2001",
        id_usuario: "663a86ce6212d88b61542fb5",
        intenciones: ["6601eb7ca50e70583f4617f0", "6601e901d47cf7ce050839c5"]
    }
    ,      {
      id: "2",
      emisor: "user2",
      receptor: "system",
      verificacion_enviado: true,
      verificacion_recibido: true,
      hora_enviado: "11:17",
      hora_recibido: "11:17",
      fecha_enviado: "11/08/2001",
      fecha_recibido: "11/08/2001",
      id_usuario: "663a86ce6212d88b61542fb5",
      intenciones: ["6601eb7ca50e70583f4617f0", "6601e901d47cf7ce050839c5"]
  },
  {
    id: "3",
    emisor: "user3",
    receptor: "system",
    verificacion_enviado: true,
    verificacion_recibido: true,
    hora_enviado: "11:17",
    hora_recibido: "11:17",
    fecha_enviado: "11/08/2001",
    fecha_recibido: "11/08/2001",
    id_usuario: "663a86ce6212d88b61542fb5",
    intenciones: ["6601eb7ca50e70583f4617f0", "6601e901d47cf7ce050839c5"]
}
    ];
  }

  findOne(id: number) {
   
    return {
      id: `${id}`,
      emisor: "user1",
      receptor: "system",
      verificacion_enviado: true,
      verificacion_recibido: true,
      hora_enviado: "11:17",
      hora_recibido: "11:17",
      fecha_enviado: "11/08/2001",
      fecha_recibido: "11/08/2001",
      id_usuario: "663a86ce6212d88b61542fb5",
      intenciones: ["6601eb7ca50e70583f4617f0", "6601e901d47cf7ce050839c5"]
    };
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return updateMessageDto;
  }

  remove(id: number) {
  return {
    id: `${id}`,
    emisor: "user1",
    receptor: "system",
    verificacion_enviado: true,
    verificacion_recibido: true,
    hora_enviado: "11:17",
    hora_recibido: "11:17",
    fecha_enviado: "11/08/2001",
    fecha_recibido: "11/08/2001",
    id_usuario: "663a86ce6212d88b61542fb5",
    intenciones: ["6601eb7ca50e70583f4617f0", "6601e901d47cf7ce050839c5"]
    };
  }
}
