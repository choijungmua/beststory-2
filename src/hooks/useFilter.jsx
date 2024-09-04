import { useState } from "react";

const useFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories(
      (prevSelected) =>
        prevSelected.includes(category)
          ? prevSelected.filter((item) => item !== category)
          : [...prevSelected, category].slice(0, 5) // Limit to 5 categories
    );
  };

  return { selectedCategories, toggleCategory };
};

export default useFilter;
