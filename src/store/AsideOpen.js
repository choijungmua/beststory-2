// store.js
import create from 'zustand';

const useAside = create((set) => ({
  asideOpen: false,  // 상태 초기값
  setAsideOpen: (value) => set({ asideOpen: value }),
}));

export default useAside;
