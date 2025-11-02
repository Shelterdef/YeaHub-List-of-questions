// src\features\specialization\api\specialization-api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SpecializationsResponse } from "@/entities/specialization";

export const specializationApi = createApi({
  reducerPath: "specializationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  tagTypes: ["Specialization"],
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationsResponse, void>({
      query: () => "specializations",
      providesTags: ["Specialization"],
    }),
  }),
});

export const { useGetSpecializationsQuery, useLazyGetSpecializationsQuery } =
  specializationApi;
