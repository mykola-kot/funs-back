import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './modules/auth/quard/auth.guard';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    maxAge: 86400, // 24 hours
    credentials: true,
    origin: '*',
  })
  app.useGlobalGuards(app.get(AuthGuard));
  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidUnknownValues: true,
        validationError: { target: true, value: true },
        stopAtFirstError: true,
      }),
  )

  await app.listen(process.env.PORT, '0.0.0.0');
}

void bootstrap();
