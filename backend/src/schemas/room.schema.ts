import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
  @Prop()
  devices?: Device[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
