import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ResourceID: string;
  @Column()
  fromTimestamp: string;
  @Column()
  toTimeStamp: string;
}
