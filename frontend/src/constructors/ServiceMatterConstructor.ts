import type { ServiceMatter } from "../types/ServiceMatter";

export const createDefaultServiceMatter = (overrides: Partial<ServiceMatter> = {}): ServiceMatter => ({
  id: 1 as never,
  matter_code: "matter code 1" as never,
  name: "name 1" as never,
  department: "department 1" as never,
  required_materials: "required materials 1" as never,
  average_minutes: "average minutes 1" as never,
  enabled: false as never,
  risk_level: "LOW" as never,
  ...overrides
});

export const createServiceMatterForm = createDefaultServiceMatter;
export const createServiceMatterResponse = createDefaultServiceMatter;
