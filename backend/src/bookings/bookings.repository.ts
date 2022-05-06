import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookingDocument } from 'src/schemas/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingRepository {
  constructor(
    @InjectModel(Booking.name) private BookingModel: Model<BookingDocument>,
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
