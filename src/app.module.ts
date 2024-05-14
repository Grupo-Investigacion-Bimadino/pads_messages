import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntencionesModule } from './intenciones/intenciones.module';
import { IntencionesModule } from './intenciones/intenciones.module';

@Module({
  imports: [IntencionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
