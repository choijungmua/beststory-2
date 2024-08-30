import create from "zustand";

// Zustand store 정의
const useRoomStore = create((set) => ({
  roomData: [], // 초기 상태를 빈 배열로 설정
  mainTitle: "", // 초기 상태를 빈 문자열로 설정
  setRoomData: (newData) => set({ roomData: newData }), // 상태를 업데이트하는 함수
  setMainTitle: (newString) => set({ mainTitle: newString }), // someString 상태를 업데이트하는 함수
}));

export default useRoomStore;
