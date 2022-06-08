import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EthersModule } from 'nestjs-ethers';
import { DevicesModule } from 'src/devices/devices.module';
import { Resource } from 'src/resources/entities/resource.entity';
import { ResourcesModule } from 'src/resources/resources.module';
import { RoomsModule } from 'src/rooms/rooms.module';
import { Booking, BookingSchema } from 'src/schemas/booking.schema';
import { Device, DeviceSchema } from 'src/schemas/device.schema';
import { ResourceSchema } from 'src/schemas/resource.schema';
import { Room, RoomSchema } from 'src/schemas/room.schema';
import { Booking as BookingTypeOrm } from '../entities/booking.entity';
import { BookingsController } from './bookings.controller';
import { BookingRepository } from './bookings.repository';
import { BookingsService } from './bookings.service';

@Module({
  imports: [
    EthersModule.forRoot(),
    MongooseModule.forFeature([
      { name: Booking.name, schema: BookingSchema },
      { name: Room.name, schema: RoomSchema },
      { name: Device.name, schema: DeviceSchema },
      { name: Resource.name, schema: ResourceSchema },
    ]),
    TypeOrmModule.forFeature([BookingTypeOrm]),
    DevicesModule,
    RoomsModule,
    ResourcesModule,
  ],
  controllers: [BookingsController],
  providers: [BookingsService, BookingRepository],
})
export class BookingsModule {}
