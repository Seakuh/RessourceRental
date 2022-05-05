import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDocument } from 'src/schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomRepository {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

  getRoomsByLocation(locationInput: string) {
    return this.roomModel.find({ location: locationInput }).exec();
  }
  createRoom(createRoomDto: CreateRoomDto) {
    const createRoom = new this.roomModel(createRoomDto);
    return createRoom.save();
  }
  findAllRooms() {
    return this.roomModel.find();
  }
}
