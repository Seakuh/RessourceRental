export class CreateDeviceDto {
  deviceId: number;
  deviceName: string;
  loanable: boolean;
  loanInterval: number;
  deviceElectricityCostPerHour?: number;
  deviceCosts: number;
  computingPower?: number;
  buyOut?: boolean;
  appraisedValue: number;
}
