import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

const CategoryList = ({ categoryArray, setCategoryArray }) => {
  const [categories, setCategories] = useState([]);
  const [localCategoryArray, setLocalCategoryArray] = useState(categoryArray);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ref to track if the alert has been shown
  const alertShownRef = useRef(false);

  // Fetch categories from Firestore
  const fetchCategories = async () => {
    const docRef = doc(db, "categories", "category");
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const fetchedCategories = docSnap.data().categories;
        if (Array.isArray(fetchedCategories)) {
          return fetchedCategories;
        } else {
          throw new Error("Categories data is not an array");
        }
      } else {
        throw new Error("No such document");
      }
    } catch (error) {
      console.error("Error getting document:", error);
      setError(error.message);
      return [];
    }
  };

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
      setLoading(false);
    };

    loadCategories();
  }, []);

  useEffect(() => {
    setCategoryArray(localCategoryArray);
  }, [localCategoryArray, setCategoryArray]);

  // Handle tag click
  const handleTagClick = (tag) => {
    setLocalCategoryArray((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else if (prevTags.length >= 5) {
        // Show alert only once
        alert("필터는 5개까지만 가능합니다.");
        return prevTags;
      } else {
        return [...prevTags, tag];
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex gap-[10px] flex-wrap">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleTagClick(category)}
          className={`flex gap-1 font-bold items-center rounded-[50px] px-[25px] h-[40px] ${
            localCategoryArray.includes(category)
              ? "bg-primary text-white"
              : "bg-gray-200 text-text"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
