/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ethers } from 'ethers';
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
    @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>, // @InjectModel(Resource.name) private resourceModel: Model<Resource>,
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

  async connectToMetaMask() {
    // If you don't specify a //url//, Ethers connects to the default
    // (i.e. ``http:/\/localhost:8545``)
    const provider = new ethers.providers.JsonRpcProvider();

    // The provider also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, we need the account signer...
    const signer = provider.getSigner();

    // Look up the current block number
    await provider.getBlockNumber();
    // 14818054

    // Get the balance of an account (by address or ENS name, if supported by network)
    const balance = await provider.getBalance('ethers.eth');
    // { BigNumber: "182826475815887608" }

    // Often you need to format the output to something more user-friendly,
    // such as in ether (instead of wei)
    ethers.utils.formatEther(balance);
    // '0.182826475815887608'

    // If a user enters a string in an input field, you may need
    // to convert it from ether (as a string) to wei (as a BigNumber)
    ethers.utils.parseEther('1.0');
    // { BigNumber: "1000000000000000000" }
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
