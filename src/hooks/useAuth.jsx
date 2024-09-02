import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import useUserStore from "../store/Auth";

const useAuth = () => {
  const { user, setUser, clearUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    clearUser: state.clearUser,
  }));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Firebase 인증 상태 변경 시 user 상태 업데이트
    });

    // 컴포넌트 언마운트 시 리스너 정리
    return () => unsubscribe();
  }, [setUser]);

  // 로그아웃 함수
  const logout = async () => {
    try {
      await signOut(auth);
      clearUser(); // 로그아웃 후 user 상태를 null로 설정
      alert("로그아웃 되었습니다.");
      // 로그아웃 확인용
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return { user, logout };
};

export default useAuth;
