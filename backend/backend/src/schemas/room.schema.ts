import { Prop, Schema } from '@nestjs/mongoose';
import { Device } from './device.schema';

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
  location: Location;

  //   @Prop()
  //   requiredSafetyBriefing?: SafetyBriefing[];

  @Prop()
  devices?: Device[];
}
