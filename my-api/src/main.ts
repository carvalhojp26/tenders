import * as admin from 'firebase-admin';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  admin.initializeApp({
    credential: admin.credential.cert(require('../config/firebase-key.json'))
  });

  console.log('Firebase Admin initialized successfully')

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
