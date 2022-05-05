import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDocument } from 'src/schemas/room.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { RoomRepository } from './room.repository';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private RoomModel: Model<RoomDocument>,
    private roomsRepository: RoomRepository,
  ) {}

  create(createRoomDto: CreateRoomDto) {
    return this.roomsRepository.createRoom(createRoomDto);
  }

  findyManyByLocation(location: string) {
    Logger.log(location);
    return this.roomsRepository.getRoomsByLocation(location);
  }

  findAll() {
    return this.roomsRepository.findAllRooms();
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
