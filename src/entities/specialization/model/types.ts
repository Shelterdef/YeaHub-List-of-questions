// src/entities/specialization/model/types.ts

export interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SpecializationsResponse {
  data: Specialization[];
  page: number;
  limit: number;
  total: number;
}
