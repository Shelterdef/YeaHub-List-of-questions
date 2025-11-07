// src/shared/ui/specialization/Specialization.tsx
import cl from "./specialization.module.scss";
import { useGetSpecializationsQuery } from "@/features/specialization/api";
import { Specialization as SpecializationType } from "@/entities/specialization";
import { useSpecialization } from "@/features/specialization/lib/useSpecialization";
import { useEffect, useState, useCallback, useMemo } from "react";

export const Specializations: React.FC = () => {
  const { data: response, isLoading, error } = useGetSpecializationsQuery();
  const {
    handleSpecializationSelect,
    isSpecializationSelected,
    selectedSpecialization,
  } = useSpecialization();

  const [showAll, setShowAll] = useState(false);

  const specializations: SpecializationType[] = useMemo(
    () => response?.data || [],
    [response?.data]
  );

  // Автоматически выбираем первую специализацию при загрузке
  useEffect(() => {
    if (specializations.length > 0 && !selectedSpecialization) {
      const firstSpecialization = specializations[0];
      handleSpecializationSelect(firstSpecialization.id);
    }
  }, [specializations, selectedSpecialization, handleSpecializationSelect]);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const handleSpecClick = useCallback(
    (spec: SpecializationType) => {
      if (selectedSpecialization === spec.id) {
        handleSpecializationSelect(null);
      } else {
        handleSpecializationSelect(spec.id);
      }
    },
    [selectedSpecialization, handleSpecializationSelect]
  );

  // Мемоизируем отображаемые специализации
  const displayedSpecializations = useMemo(
    () => (showAll ? specializations : specializations.slice(0, 5)),
    [showAll, specializations]
  );

  // Проверяем, есть ли еще специализации для показа
  const hasMoreSpecializations = specializations.length > 5;

  if (isLoading) return <div>Загрузка специализаций...</div>;
  if (error) {
    console.error("Ошибка загрузки:", error);
    return <div>Ошибка загрузки</div>;
  }

  return (
    <>
      <div className={cl.listSpec}>
        {displayedSpecializations.map((spec) => (
          <span
            key={spec.id}
            className={`${cl.spec} ${
              isSpecializationSelected(spec.id) ? cl.specSelected : ""
            }`}
            onClick={() => handleSpecClick(spec)}
          >
            {spec.title}
          </span>
        ))}
      </div>

      {hasMoreSpecializations && (
        <a onClick={toggleShowAll} className={cl.toggleLink}>
          {showAll ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </>
  );
};
