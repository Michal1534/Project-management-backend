import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as requestIp from 'request-ip';
import { AppModule } from './app.module';

async function bootstrap() {
  // CORS is enabled
  const app = await NestFactory.create(AppModule, { cors: true });

  // Request Validation
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.use(requestIp.mw());

  // Helmet Middleware against known security vulnerabilities
  app.use(helmet.default());

  // Swagger API Documentation
  const options = new DocumentBuilder()
    .setTitle('form-masters-api')
    .setDescription('form-masters-api')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000, '127.0.0.1');
}

bootstrap();
