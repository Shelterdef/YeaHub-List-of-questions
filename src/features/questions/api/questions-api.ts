// src/features/questions/api/questions-api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  QuestionsResponse,
  QuestionsFilter,
  Question,
} from "@/entities/question/model/types";
import { API_BASE_URL } from "@/shared/config/api";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL + "/",
  }),
  tagTypes: ["Questions", "Question"],
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsResponse, QuestionsFilter>({
      query: (filters) => {
        const params = new URLSearchParams();

        // Добавляем параметры фильтрации
        if (filters.page) params.append("page", filters.page.toString());
        if (filters.limit) params.append("limit", filters.limit.toString());
        if (filters.title) params.append("title", filters.title);
        if (filters.description)
          params.append("description", filters.description);
        if (filters.specialization)
          params.append("specialization", filters.specialization.toString());
        if (filters.orderBy) params.append("orderBy", filters.orderBy);
        if (filters.order) params.append("order", filters.order);
        if (filters.random !== undefined)
          params.append("random", filters.random.toString());

        // Массивы параметров
        if (filters.skills) {
          filters.skills.forEach((skill) =>
            params.append("skills", skill.toString())
          );
        }
        if (filters.complexity) {
          filters.complexity.forEach((complexity) =>
            params.append("complexity", complexity.toString())
          );
        }
        if (filters.rate) {
          filters.rate.forEach((rate) =>
            params.append("rate", rate.toString())
          );
        }
        if (filters.keywords) {
          filters.keywords.forEach((keyword) =>
            params.append("keywords", keyword)
          );
        }

        return {
          url: `questions/public-questions`,
          params,
        };
      },
      providesTags: ["Questions"],
    }),

    // Добавляем endpoint для получения одного вопроса
    getQuestionById: builder.query<Question, number>({
      query: (id) => `questions/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Question", id }],
    }),
  }),
});

export const {
  useGetPublicQuestionsQuery,
  useLazyGetPublicQuestionsQuery,
  useGetQuestionByIdQuery,
} = questionsApi;
