import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SkillsResponse } from "@/entities/skill";
import { API_BASE_URL } from "@/shared/config/api";

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL + "/",
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
