import { Device, Room } from "../../utils/types";

export function generateRooms(): Room[] {
  var rooms = [] as Room[];

  const devices = [] as Device[];

  devices.push({
    deviceId: 2343,
    deviceName: "Device 1",
    loanable: true,
    loanInterval: 3,
    deviceElectricityCostPerHour: 4.5,
    deviceCosts: 500,
    computingPower: 345,
    buyOut: true,
    appraisedValue: 45,
  });

  for (let i = 0; i < 10; i++) {
    devices.push({
      deviceId: i,
      deviceName: `Lenovo Thinkpad ${i}`,
      loanable: true,
      loanInterval: 3,
      deviceElectricityCostPerHour: 4.5,
      deviceCosts: 500,
      computingPower: 345,
      buyOut: true,
      appraisedValue: 45,
    });
  }

  for (let i = 0; i < 50; i++) {
    rooms.push({
      renter: "",
      roomId: i.toString(),
      capacity: 20,
      costsPerHour: 5.6,
      size: 34,
      location: {
        faculty: "Computer Science",
        barrierFree: false,
        name: `Hochschule ${i}`,
      },
      devices: devices,
      recurringAssignments: "",
    });
  }

  return rooms;
}
