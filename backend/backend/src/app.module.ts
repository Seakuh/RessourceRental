import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesModule } from './devices/devices.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), DevicesModule, RoomsModule],
})
export class AppModule {}
