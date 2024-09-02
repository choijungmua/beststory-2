import { useState } from "react";

const useFilter = (initialCategories = []) => {
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else if (selectedCategories.length < 5) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      alert("최대 5개 까지만 설정 가능합니다.");
    }
  };

  return {
    selectedCategories,
    toggleCategory,
  };
};

export default useFilter;
