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

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findOne(id: string) {
    return await this.messageModel.findById(id).exec();
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    const message = await this.messageModel.findByIdAndUpdate(id, updateMessageDto, {new: true})
    if(!message) return 'Message not found';
    return message;
  }

  async remove(id: string) {
    const messageDeleted = await this.messageModel.findByIdAndDelete(id);
    return messageDeleted;
  }
} 
