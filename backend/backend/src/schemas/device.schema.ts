import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema()
export class Device {
  @Prop()
  deviceId: number;
  @Prop()
  deviceName: string;
  @Prop()
  loanable: boolean;
  @Prop()
  loanInterval: number;
  @Prop()
  deviceElectricityCostPerHour?: number;
  @Prop()
  deviceCosts: number;
  @Prop()
  computingPower?: number;
  @Prop()
  buyOut?: boolean;
  @Prop()
  appraisedValue: number;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
