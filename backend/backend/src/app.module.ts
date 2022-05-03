import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesModule } from './devices/devices.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DevicesModule],
})
export class AppModule {}
