// store.js
import create from "zustand";

const useStore = create((set) => ({
    newTitles: [],  // 상태 초기값
    setNewTitles: (titles) => set({ newTitles: titles }),
  }));

export default useStore;