import { Module } from '@nestjs/common';
import { IntencionesService } from './intenciones.service';
import { IntencionesController } from './intenciones.controller';

@Module({
  controllers: [IntencionesController],
  providers: [IntencionesService],
})
export class IntencionesModule {}
