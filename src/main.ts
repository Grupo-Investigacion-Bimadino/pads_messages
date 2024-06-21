import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().then(r => console.log('NestJS server is running'))  // Add this line to log a message to the console when the server starts up;
