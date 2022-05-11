import { Injectable } from '@nestjs/common';
import { DevicesRepository } from './devices.repository';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DevicesService {
  findyManyByLocation(locationInput: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private deviceRepository: DevicesRepository) {}

  async create(createCatDto: CreateDeviceDto): Promise<Device> {
    return;
  }

  async findAll(): Promise<Device[]> {
    return;
  }

  findOne(id: number) {
    return;
  }

  update(id: number, updateDeviceDto: UpdateDeviceDto) {
    return `This action updates a #${id} device`;
  }

  remove(id: number) {
    return `This action removes a #${id} device`;
  }
}
