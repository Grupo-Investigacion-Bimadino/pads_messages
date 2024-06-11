import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true,
})
export class MessageSchemas extends Document {
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

    intenciones: string[];

}

export const MessageSchema = SchemaFactory.createForClass(MessageSchemas);