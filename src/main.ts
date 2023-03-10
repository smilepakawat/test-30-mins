import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('apis')
  await app.init()
  await app.listen(3000);
}
bootstrap();
