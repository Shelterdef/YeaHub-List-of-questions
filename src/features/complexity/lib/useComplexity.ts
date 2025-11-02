// src\features\complexity\lib\useComplexity.ts
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { RootState } from "@/app/store";
import { toggleComplexity } from "../model/slice";
import { ComplexityLevel } from "../model/constants";

export const useComplexity = () => {
  const dispatch = useDispatch();
  const selectedLevels = useSelector(
    (state: RootState) => state.complexity.selectedLevels
  );

  const handleToggle = useCallback(
    (level: ComplexityLevel) => {
      dispatch(toggleComplexity(level));
    },
    [dispatch]
  );

  const isSelected = useCallback(
    (level: ComplexityLevel) => {
      return selectedLevels.includes(level);
    },
    [selectedLevels]
  );

  return useMemo(
    () => ({
      selectedLevels,
      toggleComplexity: handleToggle,
      isSelected,
      hasSelectedLevels: selectedLevels.length > 0,
      selectedCount: selectedLevels.length,
    }),
    [selectedLevels, handleToggle, isSelected]
  );
};
