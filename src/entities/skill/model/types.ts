// src/entities/skill.ts
export interface Skill {
  id: number;
  title: string;
  description?: string;
  imageSrc?: string;
  createdAt?: string;
  updatedAt?: string;
  specializations?: Array<{
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

export interface SkillsResponse {
  data: Skill[];
  page: number;
  limit: number;
  total: number;
}
