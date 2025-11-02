// src/features/specialization/lib/useSpecialization.ts
import { useDispatch, useSelector } from "react-redux";
import { setSpecialization, resetSpecialization } from "../model/slice";
import { SpecializationId } from "../model/constants";
import { RootState } from "@/app/store";

export const useSpecialization = () => {
  const dispatch = useDispatch();

  const selectedSpecialization = useSelector((state: RootState) => {
    return state.specialization?.selectedSpecialization ?? null;
  });

  const handleSpecializationSelect = (
    specializationId: SpecializationId | null
  ) => {
    dispatch(setSpecialization(specializationId));
  };

  const handleResetSpecialization = () => {
    dispatch(resetSpecialization());
  };

  const isSpecializationSelected = (specializationId: SpecializationId) => {
    return selectedSpecialization === specializationId;
  };

  return {
    selectedSpecialization,
    handleSpecializationSelect,
    handleResetSpecialization,
    isSpecializationSelected,
  };
};
