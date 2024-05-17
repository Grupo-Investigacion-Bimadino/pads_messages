import { Module } from '@nestjs/common';
import { TextosasociadosIntencionesService } from './textosasociados_intenciones.service';
import { TextosasociadosIntencionesController } from './textosasociados_intenciones.controller';

@Module({
  controllers: [TextosasociadosIntencionesController],
  providers: [TextosasociadosIntencionesService],
})
export class TextosasociadosIntencionesModule {}
