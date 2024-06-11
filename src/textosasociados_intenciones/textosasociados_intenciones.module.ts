import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { TextosasociadosIntencionesService } from './textosasociados_intenciones.service';
import { TextosasociadosIntencionesController } from './textosasociados_intenciones.controller';
import {MessageSchema} from "../messages/schemas/messages.schema";
import {Textoasociado, TextoAsociadoIntencionesSchema} from "./schemas/textoasociado_intenciones.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TextoAsociado_intenciones', schema: TextoAsociadoIntencionesSchema }]),
  ],
  controllers: [TextosasociadosIntencionesController],
  providers: [TextosasociadosIntencionesService],
})
export class TextosasociadosIntencionesModule {}
