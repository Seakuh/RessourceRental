import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { DevicesModule } from './devices/devices.module';
import { Booking } from './entities/booking.entity';
import { RoomsModule } from './rooms/rooms.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    DevicesModule,
    RoomsModule,
    BookingsModule,
    // EthersModule.forRoot(),
    // Web3Module.forRoot({
    //   name: 'eth',
    //   url: 'http://localhost:3450',
    // }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'Ressource_Rental',
      entities: [Booking],
      synchronize: true,
    }),
    ResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
