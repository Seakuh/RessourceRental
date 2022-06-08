export class CreateResourceDto {
  resourceId: number;
  name: string;
  loanable: boolean;
  location: Location;
  loanInterval: number;
  resourceCosts: number;
  computingPower?: number;
  buyOut?: boolean;
  appraisedValue: number;
  capacity: number;
  costsPerHour?: number;
  size?: number;
  resourceElectricityCostPerHour?: number;
  requiredSafetyBriefing?: string[];
  recurringAssignments: string;
  description?: string;
}
