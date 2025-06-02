import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //agregamos la validación como indica la documentación
  app.useGlobalPipes(new ValidationPipe({
    //disableErrorMessages: true
    //ignora los datos que no necesitamos
    whitelist: true,
    //con whitelist y el forbidNonWhitelisted indican que datos no permitimos 
    forbidNonWhitelisted: true
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
