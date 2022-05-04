import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from 'src/schemas/room.schema';
import { Room } from './entities/room.entity';
import { RoomRepository } from './room.repository';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
  controllers: [RoomsController],
  providers: [RoomsService, RoomRepository],
})
export class RoomsModule {}
