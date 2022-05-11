import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookingDocument } from 'src/schemas/booking.schema';
import { Device, DeviceDocument } from 'src/schemas/device.schema';
import { Room, RoomDocument } from 'src/schemas/room.schema';
import { Booking } from '../entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingRepository {
  constructor(
    @InjectModel(Booking.name) private BookingModel: Model<BookingDocument>,
    @InjectModel(Room.name) private roomModel: Model<RoomDocument>,
    @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
  ) {}

  find(id: number) {
    return this.BookingModel.find({ resourceId: id });
  }
  findByResourceId(id: string) {
    console.log('INND' + id);
    return this.BookingModel.find({ resourceId: id });
  }

  getBookingsByLocation(locationInput: string) {
    return this.BookingModel.find({ location: locationInput }).exec();
  }
  createBooking(createBookingDto: CreateBookingDto) {
    const createBooking = new this.BookingModel(createBookingDto);
    return createBooking.save();
  }
  findAllBookings() {
    console.log('find all bookings');
    return this.BookingModel.find();
  }
}
