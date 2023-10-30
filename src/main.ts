import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'https://cars-app-ik.vercel.app/',
    ],
    methods: ['GET', 'POST'],
  });
  await app.listen(3002);
}
bootstrap();
