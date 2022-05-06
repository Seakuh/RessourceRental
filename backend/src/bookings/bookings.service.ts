import { Injectable } from '@nestjs/common';
import { BookingRepository } from './bookings.repository';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateRoomBookingDto } from './dto/create-room-booking';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private bookingRepository: BookingRepository) {}

  buyOutResource(createBookingDto: CreateBookingDto) {
    throw new Error('Method not implemented.');
  }
  createBooking(createBookingDto: CreateBookingDto) {
    return 'This action adds a new booking';
  }

  createRoomBooking(createRoomBookingDto: CreateRoomBookingDto) {
    return 'This action adds a new booking';
  }

  findAll() {
    return `This action returns all bookings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
