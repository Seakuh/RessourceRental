import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Device } from './device.schema';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  renter: string;
  @Prop()
  roomId: string;
  @Prop()
  capacity: number;
  @Prop()
  costsPerHour: number;
  @Prop()
  size: number;
  @Prop()
  location: string;
  //   @Prop()
  //   requiredSafetyBriefing?: SafetyBriefing[];
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Devices' }] })
  devices?: Device[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
