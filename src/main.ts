import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port: string = process.env.PORT || '3000';

async function createNestApplication() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  return app;
}

const createSwaggerDocsConfig = () =>
  new DocumentBuilder()
    .setTitle('Todays_Meal')
    .setDescription('Todays_Meal API Swagger Docs')
    .setVersion('1.0')
    .setContact(
      'jeongjiwoo0522',
      'https://github.com/jeongjiwoo0522',
      'jiwoourty@gmail.com',
    )
    .build();

async function bootstrap() {
  const app = await createNestApplication();
  const config = createSwaggerDocsConfig();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);
  await app.listen(port);
  Logger.log(`server on ${port}`, 'Bootstrap');
}

bootstrap();

process.on('uncaughtException', (err) => {
  console.error('uncaughtException (Node is alive)', err);
});
