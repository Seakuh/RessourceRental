export class CreateResourceDto {
  deviceId: number;
  resource: string;
  loanable: boolean;
  loanInterval: number;
  deviceElectricityCostPerHour?: number;
  deviceCosts: number;
  computingPower?: number;
  buyOut?: boolean;
  appraisedValue: number;
  capacity: number;
  costsPerHour: number;
  size: number;
  location: Location;
  requiredSafetyBriefing?: string[];
  recurringAssignments: string;
  description?: string;
}
