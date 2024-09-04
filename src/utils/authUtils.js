import Cookies from "js-cookie";
import { getAuth, signInWithCustomToken } from "firebase/auth";

const auth = getAuth();

export async function checkAuthStatus() {
  const token = Cookies.get("authToken");
  if (token) {
    try {
      await signInWithCustomToken(auth, token);
      return true; // 인증 성공
    } catch (error) {
      console.error("Token verification failed:", error);
      return false; // 인증 실패
    }
  }
  return false; // 토큰 없음
}
