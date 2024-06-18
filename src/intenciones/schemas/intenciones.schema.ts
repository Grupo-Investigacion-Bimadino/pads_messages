import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from "mongoose";

@Schema({
    timestamps: true,
})
export class Intencion extends Document {
    _id: mongoose.Types.ObjectId;

    @Prop()
    intencion: string;

    @Prop()
    mensajes: string;
}

export const IntecionesSchema = SchemaFactory.createForClass(Intencion);