import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    DevicesModule,
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
