// store.js
import create from "zustand";
// Chat 상태 관리
export const useChatShow = create((set) => ({
  chatShow: false,
  setChatShow: (value) => set({ chatShow: value }),
}));

export const useChatting = create((set) => ({
  chatting: [],
  setChatting: (value) => set({ chatting: value }),
}));
