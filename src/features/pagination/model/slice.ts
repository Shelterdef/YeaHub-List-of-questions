// src/features/pagination/model/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.currentPage = Math.max(1, state.currentPage - 1);
    },
    resetPagination: (state) => {
      state.currentPage = 1;
    },
  },
});

export const { setCurrentPage, nextPage, prevPage, resetPagination } =
  paginationSlice.actions;
export default paginationSlice.reducer;
