import create from "zustand";

// Zustand store 정의
export const useCategory = create((set) => ({
  categoryArray: [], // 배열로 초기화
  setCategoryArray: (categories) =>
    set({ categoryArray: Array.isArray(categories) ? categories : [] }),
}));

// Zustand store 정의
export const useSearchCategory = create((set) => ({
  searchCategory: [], // 배열로 초기화
  setSearchCategory: (categories) =>
    set({ searchCategory: Array.isArray(categories) ? categories : [] }),
}));
