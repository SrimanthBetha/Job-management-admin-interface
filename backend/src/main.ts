import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Allow frontend (React) requests from port 3000
  app.enableCors({
  origin: ['http://localhost:3000'],  // allow frontend
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
});

await app.listen(process.env.PORT || 3001);
console.log(`✅ Backend running on http://localhost:${process.env.PORT || 3001}`);

  }
bootstrap();
