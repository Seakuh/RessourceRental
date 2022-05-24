/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

  // web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

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
  async createBooking(createBookingDto: CreateBookingDto) {
    console.log('CREATE BOOKING');

    const createBooking = new this.BookingModel(createBookingDto);
    const validBooking = await this.getBookingFromGivenDate(
      createBooking.resourceId,
      createBooking.fromDate,
      createBooking.toDate,
    );
    console.log('VALIDE');
    console.log(validBooking);

    // if (validBooking > 0) {
    //   return 'Resource already booked';
    // }

    return createBooking.save();
  }
  findAllBookings() {
    console.log('find all bookings');
    return this.BookingModel.find();
  }

  getBookingFromGivenDate(
    resourceId: string,
    fromTimestamp: number,
    toTimestamp: number,
  ) {
    return this.BookingModel.find({ resourceId: resourceId })
      .where('fromDate')
      .gt(fromTimestamp);
    // .where('toDate')
    // .lt(toTimestamp);
  }
}
