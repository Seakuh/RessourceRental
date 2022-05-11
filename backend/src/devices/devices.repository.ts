import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device, DeviceDocument } from 'src/schemas/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';

@Injectable()
export class DevicesRepository {
  constructor(
    @InjectModel(Device.name) private deviceModel: Model<DeviceDocument>,
  ) {}

  findyManyByLocation(locationInput: string) {
    throw new Error('Method not implemented.');
  }
  findOne(id: string) {
    return this.deviceModel.findOne({ _id: id });
  }

  getDevicesByLocation(locationInput: string) {
    return this.deviceModel.find({ location: locationInput }).exec();
  }
  createDevice(createDeviceDto: CreateDeviceDto) {
    const createDevice = new this.deviceModel(createDeviceDto);
    return createDevice.save();
  }
  findAllDevices() {
    return this.deviceModel.find();
  }
}
