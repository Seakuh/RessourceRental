export class CreateRoomContractDto {
  renter: string;
  roomId: string;
  capacity: number;
  costsPerHour: number;
  size: number;
  location: string;
  maxRentTime: number;
}
