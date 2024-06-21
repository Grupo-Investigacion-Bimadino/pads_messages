import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from "mongoose";

@Schema({
    timestamps: true,
})
export class Textoasociado extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    texto: string;

    @Prop()
    id_intencion: string;
}

export const TextoAsociadoIntencionesSchema = SchemaFactory.createForClass(Textoasociado);