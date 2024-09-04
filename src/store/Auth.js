// store/Auth.js
import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

// 상태 초기화 로직을 다른 파일로 이동하거나 삭제합니다.
export default useUserStore;
