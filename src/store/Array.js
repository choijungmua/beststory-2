// store.js
import create from "zustand";
// Aside 상태 관리
export const useCategory = create((set) => ({
  categoryArray: [],
  setCategoryArray: (value) => set({ categoryArray: value }),
}));
