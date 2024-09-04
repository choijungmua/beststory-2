import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import useUserStore from "../store/Auth";

const SESSION_TIMEOUT = 60 * 60 * 1000; // 1시간을 밀리초로 변환 (60분 * 60초 * 1000밀리초)

const useAuth = () => {
  const { user, setUser, clearUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    clearUser: state.clearUser,
  }));

  useEffect(() => {
    const checkSession = () => {
      const storedUser = sessionStorage.getItem("user");
      const storedTimestamp = sessionStorage.getItem("loginTimestamp");

      if (storedUser && storedTimestamp) {
        try {
          const parsedUser = JSON.parse(storedUser);
          const loginTimestamp = parseInt(storedTimestamp, 10);

          if (Date.now() - loginTimestamp < SESSION_TIMEOUT) {
            // 세션이 만료되지 않았을 경우
            setUser(parsedUser);
          } else {
            // 세션이 만료되었을 경우
            clearUser();
            sessionStorage.clear();

            alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
          }
        } catch (error) {
          console.error(
            "세션 스토리지에서 사용자 정보를 파싱하는 중 오류 발생:",
            error
          );
          clearUser();
          sessionStorage.clear();
        }
      } else {
        clearUser();
      }
    };

    checkSession();
  }, [setUser, clearUser]);

  // 로그아웃 함수
  const logout = async () => {
    try {
      await signOut(auth);
      clearUser();
      alert("로그아웃 되었습니다.");
      sessionStorage.clear();
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return { user, setUser, logout };
};

export default useAuth;
