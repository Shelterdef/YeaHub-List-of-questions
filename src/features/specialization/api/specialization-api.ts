import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SpecializationsResponse } from "@/entities/specialization";
import { API_BASE_URL } from "@/shared/config/api";

export const specializationApi = createApi({
  reducerPath: "specializationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL + "/",
  }),
  tagTypes: ["Specialization"],
  endpoints: (builder) => ({
    getSpecializations: builder.query<SpecializationsResponse, void>({
      query: () => "specializations",
      providesTags: ["Specialization"],
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetSpecializationsQuery, useLazyGetSpecializationsQuery } =
  specializationApi;
