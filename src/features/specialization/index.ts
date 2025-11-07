// src/features/specialization/index.ts
export type { SpecializationId } from "./model/constants";
export { specializationApi } from "./api/specialization-api";
export {
  useGetSpecializationsQuery,
  useLazyGetSpecializationsQuery,
} from "./api/specialization-api";
