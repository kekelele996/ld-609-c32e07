export interface ServiceMatter {
  id: number;
  matter_code: string;
  name: string;
  department: string;
  required_materials: string;
  average_minutes: number;
  enabled: boolean;
  risk_level: string;
}
