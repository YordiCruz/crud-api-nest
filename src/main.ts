import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //agregamos swagger segun la documentacion
   const config = new DocumentBuilder()
    .setTitle('Crud Productos')
    .setDescription('La Api de Productos - todo el crud de productos')
    .setVersion('1.0')
    .addTag('producto')
    .build();

     const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  //agregamos la validación como indica la documentación
  app.useGlobalPipes(new ValidationPipe({
    //disableErrorMessages: true
    //ignora los datos que no necesitamos
    whitelist: true,
    //con whitelist y el forbidNonWhitelisted indican que datos no permitimos 
    forbidNonWhitelisted: true
    //swagger es una interfaz q se habilitara y con eso se puede probar los servicios sin necesidad de usar postman imsomnia u otro
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
