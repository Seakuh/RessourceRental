import { Injectable } from '@nestjs/common';
import { DevicesService } from 'src/devices/devices.service';
import { RoomsService } from 'src/rooms/rooms.service';
import { BookingRepository } from './bookings.repository';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateRoomBookingDto } from './dto/create-room-booking';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    private bookingRepository: BookingRepository,
    private devicesService: DevicesService,
    private roomsService: RoomsService,
  ) {}

  buyOutResource(createBookingDto: CreateBookingDto) {
    throw new Error('Method not implemented.');
  }
  createBooking(createBookingDto: CreateBookingDto) {
    // if (
    //   this.isDeviceAvailable(
    //     createBookingDto.fromDate,
    //     createBookingDto.toDate,
    //     createBookingDto.resourceId,
    //   )
    // ) {
    // }
    if (
      this.isValidTimestamp(createBookingDto.fromDate) &&
      this.isValidTimestamp(createBookingDto.toDate)
    ) {
      return this.bookingRepository.createBooking(createBookingDto);
    }

    return 'Timestamp is not valide';
  }

  createRoomBooking(createRoomBookingDto: CreateRoomBookingDto) {
    return 'This action adds a new booking';
  }

  findAll() {
    return this.bookingRepository.findAllBookings();
  }

  findOne(id: string) {
    return this.bookingRepository.findByResourceId(id);
  }

  findBookingsByResourceId(resourceId: string) {
    return this.bookingRepository.findByResourceId(resourceId);
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }

  // internal functions ---------------------------------------------------------

  isResourceAvailable(
    fromTimestamp: number,
    toTimeStamp: number,
    deviceId: string,
  ): boolean {
    const bookings = this.findBookingsByResourceId(deviceId);

    console.log(bookings);
    return true;
  }

  // connectToEthers(){
  //
  // }

  isValidTimestamp(_timestamp: number): boolean {
    const valid = new Date(_timestamp).getTime() > 0;

    return valid;
  }
}
