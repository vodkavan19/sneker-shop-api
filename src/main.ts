import * as compression from 'compression';
import helmet from 'helmet';
import {
  ClassSerializerInterceptor,
  INestApplication,
  Logger,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { CONFIG_VAR, DEFAULT_PORT } from './config';

async function getApp() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.use(compression());
  app.use(helmet());

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  return app;
}

async function seedData(app: INestApplication) {
  console.log(app);
}

async function bootstrap() {
  const app = await getApp();

  await seedData(app);

  const configService = app.get(ConfigService);
  const port = configService.get(CONFIG_VAR.APP_PORT, DEFAULT_PORT);

  await app.listen(3000, () => {
    const logger = new Logger(AppModule.name);
    logger.log(`Application is running on port ${port}`);
  });
}
bootstrap();
