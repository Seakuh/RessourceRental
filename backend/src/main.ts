import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

  const app = await NestFactory.create(AppModule);
  await app.listen(3100);
}
bootstrap();
