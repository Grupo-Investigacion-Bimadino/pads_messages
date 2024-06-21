import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

@Schema({
    timestamps: true,
})
export class Message extends Document {

    _id: mongoose.Types.ObjectId;

    @Prop()
    emisor: string;

    @Prop()
    receptor: string;

    @Prop()
    verificacion_enviado: boolean;

    @Prop()
    verificacion_recibido: boolean;

    @Prop()
    hora_enviado: string;

    @Prop()
    hora_recibido: string;

    @Prop()
    fecha_enviado: string;

    @Prop()
    fecha_recibido: string;

    @Prop()
    id_usuario: string;

    @Prop()
    intenciones: string[];

}

export const MessageSchema = SchemaFactory.createForClass(Message);