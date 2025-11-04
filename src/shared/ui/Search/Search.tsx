// src/shared/ui/Search/Search.tsx
import cl from "./search.module.scss";
import { useSearch } from "@/features/search";
import { SearchIcon } from "@/shared/assets/svg/SearchIcon";
import { memo, useCallback, useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export const Search: React.FC = memo(() => {
  const { searchQuery, handleSearchChange } = useSearch();
  const [localValue, setLocalValue] = useState(searchQuery);

  // Debounce с задержкой 300ms
  const debouncedSearch = useDebouncedCallback((value: string) => {
    handleSearchChange(value);
  }, 300);

  useEffect(() => {
    setLocalValue(searchQuery);
  }, [searchQuery]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setLocalValue(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setLocalValue("");
        debouncedSearch("");
        debouncedSearch.flush(); // Немедленно применяем очистку
      }
    },
    [debouncedSearch]
  );

  return (
    <div className={cl.searchBlock}>
      <SearchIcon className={cl.icon} />
      <input
        className={cl.search}
        type="text"
        placeholder="Введите вопрос..."
        name="search"
        value={localValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        aria-label="Поиск вопросов"
        enterKeyHint="search"
      />
    </div>
  );
});

Search.displayName = "Search";
