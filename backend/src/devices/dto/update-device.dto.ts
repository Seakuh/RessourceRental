import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceDto } from './create-device.dto';

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
  deviceId: number;
  deviceName: string;
  loanable: boolean;
  loanInterval: number;
  deviceElectricityCostPerHour?: number;
  deviceCosts: number;
  computingPower?: number;
  buyOut?: boolean;
  appraisedValue: number;
}
