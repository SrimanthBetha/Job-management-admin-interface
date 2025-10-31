import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
// ✅ Fix for the error: "has no call signatures"
  
  await app.listen(5002);
  console.log('🚀 Backend running on http://localhost:5000');
}
bootstrap();
