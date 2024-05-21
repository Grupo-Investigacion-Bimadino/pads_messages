import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntencionesModule } from './intenciones/intenciones.module';
import { MessagesModule } from './messages/messages.module';
import { TextosasociadosIntencionesModule } from './textosasociados_intenciones/textosasociados_intenciones.module';

@Module({
  imports: [IntencionesModule, MessagesModule, TextosasociadosIntencionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
