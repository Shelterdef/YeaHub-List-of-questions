// src/shared/ui/specialization/Specialization.tsx
import cl from "./specialization.module.scss";
import { useGetSpecializationsQuery } from "../api";
import { Specialization as SpecializationType } from "@/entities/specialization";
import { useSpecialization } from "@/features/specialization/lib/useSpecialization";
import { useEffect, useState } from "react";

export const Specialization: React.FC = () => {
  const { data: response, isLoading, error } = useGetSpecializationsQuery();
  const {
    handleSpecializationSelect,
    isSpecializationSelected,
    selectedSpecialization,
  } = useSpecialization();

  const [showAll, setShowAll] = useState(false);

  // Автоматически выбираем первую специализацию при загрузке
  useEffect(() => {
    if (response?.data && response.data.length > 0 && !selectedSpecialization) {
      const firstSpecialization = response.data[0];
      handleSpecializationSelect(firstSpecialization.id);
    }
  }, [response, selectedSpecialization, handleSpecializationSelect]);

  if (isLoading) return <div>Загрузка специализаций...</div>;
  if (error) {
    console.error("Ошибка загрузки:", error);
    return <div>Ошибка загрузки</div>;
  }

  const specializations: SpecializationType[] = response?.data || [];

  // Показываем только первые 5 или все специализации
  const displayedSpecializations = showAll
    ? specializations
    : specializations.slice(0, 5);

  // Проверяем, есть ли еще специализации для показа
  const hasMoreSpecializations = specializations.length > 5;

  const handleSpecClick = (spec: SpecializationType) => {
    if (selectedSpecialization === spec.id) {
      handleSpecializationSelect(null);
    } else {
      handleSpecializationSelect(spec.id);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

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

      {/* Ссылка "Посмотреть все"/"Скрыть" */}
      {hasMoreSpecializations && (
        <a onClick={toggleShowAll} className={cl.toggleLink}>
          {showAll ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </>
  );
};
