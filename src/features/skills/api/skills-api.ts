// src/features/skills/api/skills-api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SkillsResponse } from "@/entities/skill";

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  tagTypes: ["Skills"],
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, number | void>({
      query: (specializationId) => {
        const params: Record<string, string> = {
          page: "1",
          limit: "100",
        };

        if (specializationId) {
          params.specializations = specializationId.toString();
        }

        return {
          url: "skills",
          params,
        };
      },
      providesTags: ["Skills"],
    }),
  }),
});

export const { useGetSkillsQuery, useLazyGetSkillsQuery } = skillsApi;
