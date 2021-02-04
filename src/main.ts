import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {resolve } from 'path'

async function bootstrap() {
  const App_DIRECTORY = resolve(__dirname,'..');
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.setViewEngine('hbs');
  app.setBaseViewsDir(resolve(App_DIRECTORY,'views'));
  app.useStaticAssets(resolve(App_DIRECTORY,'public'));
  await app.listen(3000);
}
bootstrap();
