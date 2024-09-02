import { useEffect } from "react";
import { useCategory } from "../store/Array";
import useFilter from "../hooks/useFilter";

const CategoryList = ({ categories }) => {
  const { setCategoryArray } = useCategory();
  const { selectedCategories, toggleCategory } = useFilter();

  // `selectedCategories`가 변경될 때마다 `useCategory`의 상태를 업데이트
  useEffect(() => {
    setCategoryArray(selectedCategories);
  }, [selectedCategories, setCategoryArray]);

  return (
    <>
      {categories.map((item, index) => (
        <button
          key={index}
          className={`flex font-bold border-tertiary border items-center text-text rounded-[50px] px-[25px] h-[40px] ${
            selectedCategories.includes(item) ? "bg-primary text-white" : ""
          }`}
          onClick={() => toggleCategory(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default CategoryList;
