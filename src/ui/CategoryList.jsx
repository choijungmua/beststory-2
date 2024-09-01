import { useCategory } from "../store/Array";
import { useState } from "react";

const CategoryList = ({ categories }) => {
  const { categoryArray, setCategoryArray } = useCategory();

  // Function called on button click
  const handleClick = (category) => {
    if (categoryArray.includes(category)) {
      // Remove the category if it's already in the array
      setCategoryArray(categoryArray.filter((item) => item !== category));
    } else if (categoryArray.length < 5) {
      // Add the category if it's not in the array and the array has fewer than 5 items
      setCategoryArray([...categoryArray, category]);
    } else {
      alert("최대 5개 까지만 설정 가능합니다.");
    }
  };

  return (
    <>
      {categories.map((item, index) => (
        <button
          key={index}
          className={`flex font-bold border-tertiary border items-center text-text rounded-[50px] px-[25px] h-[40px] ${
            categoryArray.includes(item) ? "bg-primary text-white" : ""
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default CategoryList;
