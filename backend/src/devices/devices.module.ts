import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceSchema } from 'src/schemas/device.schema';
import { DevicesController } from './devices.controller';
import { DevicesService as DeviceService } from './devices.service';
import { Device } from './entities/device.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }]),
    DevicesModule,
  ],
  controllers: [DevicesController],
  providers: [DeviceService],
  exports: [DevicesModule],
})
export class DevicesModule {}
