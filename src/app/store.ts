// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { specializationApi } from "@/features/specialization/api/specialization-api";
import { skillsApi } from "@/features/skills/api/skills-api";
import { questionsApi } from "@/features/questions/api/questions-api";
import complexityReducer from "@/features/complexity/model/slice";
import ratingReducer from "@/features/rating/model/slice";
import skillsReducer from "@/features/skills/model/slice";
import specializationReducer from "@/features/specialization/model/slice";
import searchReducer from "@/features/search/model/slice";
import paginationReducer from "@/features/pagination/model/slice";

export const store = configureStore({
  reducer: {
    complexity: complexityReducer,
    rating: ratingReducer,
    skills: skillsReducer,
    specialization: specializationReducer,
    search: searchReducer,
    pagination: paginationReducer,
    [specializationApi.reducerPath]: specializationApi.reducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        ignoredPaths: ["items.dates"],
      },
    }).concat(
      specializationApi.middleware,
      skillsApi.middleware,
      questionsApi.middleware
    ),

  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
