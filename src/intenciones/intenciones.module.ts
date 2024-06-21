import { Module } from '@nestjs/common';
import { IntencionesService } from './intenciones.service';
import { IntencionesController } from './intenciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {IntecionesSchema, Intencion} from "./schemas/intenciones.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Intencion.name, schema: IntecionesSchema }])],
  controllers: [IntencionesController],
  providers: [IntencionesService],
})
export class IntencionesModule {}
