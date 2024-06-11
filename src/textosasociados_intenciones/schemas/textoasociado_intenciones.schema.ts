import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true,
})
export class Textoasociado extends Document {
    @Prop()
    id: string;

    @Prop()
    texto: string;

    @Prop()
    id_intencion: string;
}

export const TextoAsociadoIntencionesSchema = SchemaFactory.createForClass(Textoasociado);