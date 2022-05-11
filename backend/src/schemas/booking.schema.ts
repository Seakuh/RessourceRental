import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  resourceId: string;
  @Prop({ required: true })
  fromDate: number;
  @Prop({ required: true })
  toDate: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
