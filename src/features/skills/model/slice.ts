// src/features/skills/model/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SkillId } from "./constants";

interface SkillsState {
  selectedSkills: SkillId[];
}

const initialState: SkillsState = {
  selectedSkills: [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    toggleSkill: (state, action: PayloadAction<SkillId>) => {
      const skillId = action.payload;
      const index = state.selectedSkills.indexOf(skillId);

      if (index === -1) {
        // Добавляем навык
        state.selectedSkills.push(skillId);
      } else {
        // Удаляем навык
        state.selectedSkills.splice(index, 1);
      }
    },
    setSkills: (state, action: PayloadAction<SkillId[]>) => {
      state.selectedSkills = action.payload;
    },
    resetSkills: (state) => {
      state.selectedSkills = [];
    },
  },
});

export const { toggleSkill, setSkills, resetSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
