// src/features/specialization/model/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpecializationId } from "./constants";

interface SpecializationState {
  selectedSpecialization: SpecializationId | null;
}

const initialState: SpecializationState = {
  selectedSpecialization: null,
};

export const specializationSlice = createSlice({
  name: "specialization",
  initialState,
  reducers: {
    setSpecialization: (
      state,
      action: PayloadAction<SpecializationId | null>
    ) => {
      state.selectedSpecialization = action.payload;
    },
    resetSpecialization: (state) => {
      state.selectedSpecialization = null;
    },
  },
});

// Селектор с защитой от undefined
export const selectSpecialization = (state: {
  specialization?: SpecializationState;
}) => state.specialization?.selectedSpecialization ?? null;

export const { setSpecialization, resetSpecialization } =
  specializationSlice.actions;
export default specializationSlice.reducer;
