// src\features\complexity\model\constants.ts
export const COMPLEXITY_LEVELS = [
  { id: "beginner", range: "1-3", label: "Начальная" },
  { id: "easy", range: "4-6", label: "Легкая" },
  { id: "medium", range: "7-8", label: "Средняя" },
  { id: "hard", range: "9-10", label: "Сложная" },
] as const;

export type ComplexityLevel = (typeof COMPLEXITY_LEVELS)[number]["id"];
