import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntencionesModule } from './intenciones/intenciones.module';
import { MessagesModule } from './messages/messages.module';
import { TextosasociadosIntencionesModule } from './textosasociados_intenciones/textosasociados_intenciones.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
  ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
  ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '/client' ) }),
  MongooseModule.forRoot(process.env.DB_URI),
  IntencionesModule, 
  MessagesModule, 
  TextosasociadosIntencionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
