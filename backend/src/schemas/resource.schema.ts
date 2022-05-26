import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ResourceDocument = Resource & Document;

@Schema()
export class Resource {
  @Prop()
  resourceId: number;
  @Prop()
  name: string;
  @Prop()
  loanable: boolean;
  @Prop()
  location: string;
  @Prop()
  loanInterval: number;
  @Prop()
  resourceCosts: number;
  @Prop()
  computingPower?: number;
  @Prop()
  buyOut?: boolean;
  @Prop()
  appraisedValue: number;
  @Prop()
  capacity: number;
  @Prop()
  costsPerHour?: number;
  @Prop()
  size?: number;
  @Prop()
  resourceElectricityCostPerHour?: number;
  @Prop()
  requiredSafetyBriefing?: string[];
  @Prop()
  recurringAssignments: string;
  @Prop()
  description?: string;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
