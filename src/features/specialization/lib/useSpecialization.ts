// src/features/specialization/lib/useSpecialization.ts
import { useDispatch, useSelector } from "react-redux";
import { setSpecialization, resetSpecialization } from "../model/slice";
import { SpecializationId } from "../model/constants";
import { RootState } from "@/app/store";
import { useCallback, useMemo } from "react";

export const useSpecialization = () => {
  const dispatch = useDispatch();

  const selectedSpecialization = useSelector((state: RootState) => {
    return state.specialization?.selectedSpecialization ?? null;
  });

  const handleSpecializationSelect = useCallback(
    (specializationId: SpecializationId | null) => {
      dispatch(setSpecialization(specializationId));
    },
    [dispatch]
  );

  const handleResetSpecialization = useCallback(() => {
    dispatch(resetSpecialization());
  }, [dispatch]);

  const isSpecializationSelected = useCallback(
    (specializationId: SpecializationId) => {
      return selectedSpecialization === specializationId;
    },
    [selectedSpecialization]
  );

  return useMemo(
    () => ({
      selectedSpecialization,
      handleSpecializationSelect,
      handleResetSpecialization,
      isSpecializationSelected,
    }),
    [
      selectedSpecialization,
      handleSpecializationSelect,
      handleResetSpecialization,
      isSpecializationSelected,
    ]
  );
};
