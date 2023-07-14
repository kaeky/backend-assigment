import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@docred.l1mwjgr.mongodb.net/?retryWrites=true&w=majority`,
  );
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
