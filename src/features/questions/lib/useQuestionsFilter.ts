// src/features/questions/lib/useQuestionsFilter.ts
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { QuestionsFilter } from "@/entities/question";

export const useQuestionsFilter = (): QuestionsFilter => {
  const selectedSpecialization = useSelector(
    (state: RootState) => state.specialization.selectedSpecialization
  );

  const selectedSkills = useSelector(
    (state: RootState) => state.skills.selectedSkills
  );

  const selectedComplexities = useSelector(
    (state: RootState) => state.complexity.selectedLevels
  );

  const selectedRatings = useSelector(
    (state: RootState) => state.rating.selectedRatings
  );

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const complexityMap: Record<string, number[]> = {
    beginner: [1, 2, 3],
    easy: [4, 5, 6],
    medium: [7, 8],
    hard: [9, 10],
  };

  const complexityNumbers = selectedComplexities.flatMap(
    (level) => complexityMap[level] || []
  );

  return {
    specialization: selectedSpecialization || undefined,
    skills: selectedSkills.length > 0 ? selectedSkills : undefined,
    complexity: complexityNumbers.length > 0 ? complexityNumbers : undefined,
    rate: selectedRatings.length > 0 ? selectedRatings : undefined,
    title: searchQuery || undefined,
    page: currentPage,
    limit: 10,
  };
};
