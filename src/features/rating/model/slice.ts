// src/features/rating/model/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RatingLevel } from "./constants";

interface RatingState {
  selectedRatings: RatingLevel[];
}

const initialState: RatingState = {
  selectedRatings: [],
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    toggleRating: (state, action: PayloadAction<RatingLevel>) => {
      const rating = action.payload;
      const index = state.selectedRatings.indexOf(rating);

      if (index === -1) {
        // Добавляем рейтинг
        state.selectedRatings.push(rating);
      } else {
        // Удаляем рейтинг
        state.selectedRatings.splice(index, 1);
      }
    },
    setRatings: (state, action: PayloadAction<RatingLevel[]>) => {
      state.selectedRatings = action.payload;
    },
    resetRatings: (state) => {
      state.selectedRatings = [];
    },
  },
});

export const { toggleRating, setRatings, resetRatings } = ratingSlice.actions;
export default ratingSlice.reducer;
