// src/features/questions/index.ts
export { questionsApi } from "./api/questions-api";
export {
  useGetPublicQuestionsQuery,
  useLazyGetPublicQuestionsQuery,
} from "./api/questions-api";
export type { QuestionsFilter } from "@/entities/question";
