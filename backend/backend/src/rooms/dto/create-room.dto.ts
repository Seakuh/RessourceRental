export class CreateRoomDto {
  renter: string;
  roomId: string;
  capacity: number;
  costsPerHour: number;
  size: number;
  location: string;
  maxRentTime: number;
  //
  //   requiredSafetyBriefing?: SafetyBriefing[];
  //   devices?: Device[];
}
