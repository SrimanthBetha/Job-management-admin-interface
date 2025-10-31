import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.use(cors());

  // Listen on port 5000
  await app.listen(5000);
  console.log('✅ Backend running at http://localhost:5000');
}
bootstrap();
