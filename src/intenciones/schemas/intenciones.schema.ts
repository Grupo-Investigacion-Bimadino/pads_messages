import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true,
})
export class Intencion extends Document {
    @Prop()
    id: string;

    @Prop()
    intencion: string;

    @Prop()
    mensajes: string;
}

export const IntecionesSchema = SchemaFactory.createForClass(Intencion);