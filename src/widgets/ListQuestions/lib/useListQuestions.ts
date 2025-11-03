// src/widgets/listQuestions/lib/useListQuestions.ts
import { useGetPublicQuestionsQuery } from "@/features/questions/";
import { useQuestionsFilter } from "@/features/questions/lib/useQuestionsFilter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { useGetSpecializationsQuery } from "@/features/specialization/api/specialization-api";
import { usePagination } from "@/features/pagination/lib/usePagination";
import { useEffect } from "react";

export const useListQuestions = () => {
  const dispatch = useDispatch();
  const filter = useQuestionsFilter();

  const {
    data: response,
    isLoading,
    error,
    refetch,
  } = useGetPublicQuestionsQuery(filter, {
    refetchOnMountOrArgChange: true,
  });

  const selectedSpecializationId = useSelector(
    (state: RootState) => state.specialization.selectedSpecialization
  );

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const { data: specializationsResponse } = useGetSpecializationsQuery();
  const { resetPagination } = usePagination();

  useEffect(() => {
    resetPagination();
  }, [selectedSpecializationId, resetPagination]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const selectedSpecialization = specializationsResponse?.data?.find(
    (spec) => spec.id === selectedSpecializationId
  );

  const handleResetFilters = () => {
    dispatch({ type: "search/setSearchQuery", payload: "" });
    dispatch({ type: "skills/setSkills", payload: [] });
    dispatch({ type: "complexity/setComplexities", payload: [] });
    dispatch({ type: "rating/setRatings", payload: [] });
    dispatch({ type: "specialization/setSpecialization", payload: null });
    dispatch({ type: "pagination/resetPagination" });
  };

  return {
    response,
    isLoading,
    error,
    selectedSpecialization,
    handleResetFilters,
  };
};
