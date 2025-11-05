// src/features/skills/lib/useSkills.ts
import { useDispatch, useSelector } from "react-redux";
import { toggleSkill, setSkills, resetSkills } from "../model/slice";
import { SkillId } from "../model/constants";
import { RootState } from "@/app/store";
import { useCallback, useMemo } from "react";

export const useSkills = () => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector(
    (state: RootState) => state.skills.selectedSkills
  );

  const handleSkillToggle = useCallback(
    (skillId: SkillId) => {
      dispatch(toggleSkill(skillId));
    },
    [dispatch]
  );

  const handleSetSkills = useCallback(
    (skills: SkillId[]) => {
      dispatch(setSkills(skills));
    },
    [dispatch]
  );

  const handleResetSkills = useCallback(() => {
    dispatch(resetSkills());
  }, [dispatch]);

  const isSkillSelected = useCallback(
    (skillId: SkillId) => {
      return selectedSkills.includes(skillId);
    },
    [selectedSkills]
  );

  return useMemo(
    () => ({
      selectedSkills,
      handleSkillToggle,
      handleSetSkills,
      handleResetSkills,
      isSkillSelected,
    }),
    [
      selectedSkills,
      handleSkillToggle,
      handleSetSkills,
      handleResetSkills,
      isSkillSelected,
    ]
  );
};
