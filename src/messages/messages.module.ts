import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {MessageSchema} from "./schemas/messages.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Messages', schema: MessageSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
