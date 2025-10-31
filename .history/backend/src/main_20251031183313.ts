import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5000, '0.0.0.0');
  console.log(`🚀 Backend running on http://localhost:5000`);
}
bootstrap();
