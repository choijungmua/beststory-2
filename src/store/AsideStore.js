// store.js
import create from "zustand";
// Aside 상태 관리
export const useAside = create((set) => ({
  asideOpen: false,
  setAsideOpen: (value) => set({ asideOpen: value }),
}));
