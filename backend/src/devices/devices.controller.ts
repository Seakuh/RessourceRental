import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DevicesRepository } from './devices.repository';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesRepository: DevicesRepository) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return;
  }

  @Get()
  findAll() {
    return;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesRepository.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return;
  }

  @Post()
  createDevice() {
    return 'device created';
  }

  @Get('/location/:location')
  findDeviceByLocation(@Param('location') locationInput: string) {
    return this.devicesRepository.findyManyByLocation(locationInput);
  }
}
