// store/Auth.js
import create from "zustand";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";

const auth = getAuth();

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

// Initialize authentication state on app load
onAuthStateChanged(auth, async (user) => {
  const { setUser, clearUser } = useUserStore.getState();

  if (user) {
    const idToken = await user.getIdToken();
    Cookies.set("authToken", idToken, { expires: 1, secure: true });
    setUser(user);
  } else {
    Cookies.remove("authToken");
    clearUser();
  }
});

export default useUserStore;
