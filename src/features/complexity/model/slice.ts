// src\features\complexity\model\slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComplexityLevel } from "./constants";

interface ComplexityState {
  selectedLevels: ComplexityLevel[];
}

const initialState: ComplexityState = {
  selectedLevels: [],
};

export const complexitySlice = createSlice({
  name: "complexity",
  initialState,
  reducers: {
    toggleComplexity: (state, action: PayloadAction<ComplexityLevel>) => {
      const level = action.payload;
      const index = state.selectedLevels.indexOf(level);

      if (index === -1) {
        state.selectedLevels.push(level);
      } else {
        state.selectedLevels.splice(index, 1);
      }
    },

    setComplexities: (state, action: PayloadAction<ComplexityLevel[]>) => {
      state.selectedLevels = action.payload;
    },

    clearComplexities: (state) => {
      state.selectedLevels = [];
    },
  },
});

export const { toggleComplexity, setComplexities, clearComplexities } =
  complexitySlice.actions;
export default complexitySlice.reducer;
