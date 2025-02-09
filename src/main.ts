import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  setupSwagger(app);

  console.log('App runing on port 3000');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
