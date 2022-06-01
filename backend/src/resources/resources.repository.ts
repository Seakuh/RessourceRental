/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resource, ResourceDocument } from 'src/schemas/resource.schema';

@Injectable()
export class ResourceRepository {
  constructor(
    @InjectModel(Resource.name) private ResourceModel: Model<ResourceDocument>,
  ) {}
}
