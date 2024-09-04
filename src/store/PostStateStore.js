import create from "zustand";

// Zustand store for managing room-related data
export const usePostState = create((set) => ({
  postState: "", // Initial state is an empty string
  setPostState: (newString) => set({ postState: newString }), // Function to update mainTitle
}));
