import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookingDocument } from 'src/schemas/booking.schema';
import { Device, DeviceDocument } from 'src/schemas/device.schema';
import { Room, RoomDocument } from 'src/schemas/room.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingRepository {
  constructor(
    @InjectModel(Booking.name) private BookingModel: Model<BookingDocument>,
    @InjectModel(Room.name) private roomModel: Model<RoomDocument>,
    @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
  ) {}

  getBookingsByLocation(locationInput: string) {
    return this.BookingModel.find({ location: locationInput }).exec();
  }
  createBooking(createBookingDto: CreateBookingDto) {
    const createBooking = new this.BookingModel(createBookingDto);
    return createBooking.save();
  }
  findAllBookings() {
    return this.BookingModel.find();
  }
}
