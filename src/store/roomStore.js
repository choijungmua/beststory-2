import create from "zustand";

// Zustand store for managing room-related data
const useRoomStore = create((set) => ({
  roomData: [], // Initial state is an empty array
  mainTitle: "", // Initial state is an empty string
  setRoomData: (newData) => set({ roomData: newData }), // Function to update roomData
  setMainTitle: (newString) => set({ mainTitle: newString }), // Function to update mainTitle
}));

// Zustand store for managing bookmark state
const useBookMark = create((set) => ({
  bookMark: false, // Initial state is false
  setBookMark: (newData) => set({ bookMark: newData }), // Function to update bookMark
}));

export { useRoomStore, useBookMark };
