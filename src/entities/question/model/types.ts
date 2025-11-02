// src/entities/question.ts
export interface QuestionSpecialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  username: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc?: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: "public" | "private";
  rate: number;
  complexity: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: QuestionSpecialization[];
  questionSkills: QuestionSkill[];
  createdAt: string;
  updatedAt: string;
  createdBy: User;
  updatedBy: User;
}

export interface QuestionsResponse {
  page: number;
  limit: number;
  data: Question[];
  total: number;
}

// Типы для фильтров
export interface QuestionsFilter {
  page?: number;
  limit?: number;
  title?: string;
  description?: string;
  skills?: number[];
  skillFilterMode?: "ALL" | "ANY";
  complexity?: number[];
  collection?: number;
  rate?: number[];
  keywords?: string[];
  specialization?: number;
  orderBy?: "createdAt" | "title" | "rate" | "complexity" | "createdById";
  order?: "ASC" | "DESC";
  random?: boolean;
}

export type QuestionData = Omit<
  Question,
  | "status"
  | "createdById"
  | "updatedById"
  | "questionSpecializations"
  | "createdAt"
  | "updatedAt"
  | "createdBy"
  | "updatedBy"
>;
