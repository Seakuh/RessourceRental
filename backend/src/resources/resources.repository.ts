/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourceRepository {
  constructor() {} // @InjectModel(Resource.name) private ResourceModel: Model<ResourceDocument>,
}
