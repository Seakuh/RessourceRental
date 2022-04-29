enum Authority {
  STUDENT,
  SCIENTIFIC_ASSISTANT,
  ALL,
}
enum MemberType {
  STUDENT,
  PROFESSOR,
  EMPLOYEE,
}

export class Ressource {}

export type SafetyBriefing = {
  safetyBeriefingId: number;
  time: number;
  decay: number;
  requiredSafetyBriefing: SafetyBriefing[];
};

export type Device = {
  deviceId: number;
  deviceName: string;
  loanable: boolean;
  loanInterval: number;
  deviceElectricityCostPerHour?: number;
  deviceCosts: number;
  computingPower?: number;
  buyOut?: boolean;
  appraisedValue: number;
};

// export type RentedRoom = {
//   available: boolean;
//   room: Room;
//   leaveBehind: number;
//   canceled: boolean;
// }

export type Location = {
  name: string;
  faculty: string;
  barrierFree: boolean;
};

export type Room = {
  renter: string;
  roomId: string;
  capacity: number;
  costsPerHour: number;
  size: number;
  location: Location;
  requiredSafetyBriefing?: SafetyBriefing[];
  devices?: Device[];
  recurringAssignments: string;
};

export type Renter = {
  renterId: string;
  firstName: string;
  lastName: string;
  email: string;
  devices: Device[];
  roomInUse: Room;
  memberType: MemberType;
  membershipExpiration: number;
  rentedRooms: Room[];
  safetyBrefing: SafetyBriefing[];
};
