import mainLogo from "../assets/images/mainLogo.svg";
import LoginPlatform from "../ui/LoginPlatform";
import eye from "../assets/images/eye.svg";
import lock from "../assets/images/lock.svg";
import email from "../assets/images/email.svg";
import closeEye from "../assets/images/closeEye.svg";
import { Link, useNavigate } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import { auth, db, USER_COLLECTION } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import useUserStore from "../store/Auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginComponent = () => {
  const [pwShow, setPwShow] = useToggle();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useUserStore((state) => ({
    setUser: state.setUser,
    clearUser: state.clearUser,
  }));

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        emailInput,
        passwordInput
      );
      const creUser = credential.user;

      const userDoc = await getDoc(doc(db, USER_COLLECTION, creUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const user = { ...creUser, ...userData };
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("loginTimestamp", Date.now().toString()); // 로그인 시각 저장
        setUser(user);
      } else {
        setError("사용자 정보가 존재하지 않습니다.");
      }

      navigate("/");
      alert(`${creUser.displayName}님 안녕하세요`);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("이메일을 바르게 입력해주세요.");
          break;
        case "auth/wrong-password":
          setError("잘못된 비밀번호입니다.");
          break;
        case "auth/user-not-found":
          setError("등록된 사용자가 없습니다.");
          break;
        default:
          setError("로그인 실패: " + error.message);
          break;
      }
    }
  };

  // CSS 스타일
  const sectionClass =
    "bg-bgColor h-[calc(100vh-80px)] flex flex-col items-center justify-center";
  const logoLinkClass = "max-sm:mt-[100px]";
  const platformContainerClass =
    "flex flex-col w-full gap-[10px] mt-[50px] justify-center items-center";
  const inputContainerClass =
    "w-[500px] max-sm:w-full mt-[30px] border border-tertiary rounded-[10px] bg-white px-[20px] shadow-md py-[40px] flex flex-col gap-[10px] justify-center items-center";
  const inputWrapperClass =
    "w-full px-[20px] border rounded-md border-tertiary py-[10px] h-[60px] gap-[10px] flex justify-center";
  const iconClass = "w-[18px]";
  const inputClass = "w-full";
  const toggleIconContainerClass = "flex w-[24px] justify-center items-center";
  const buttonClass =
    "w-full h-[60px] flex justify-center items-center bg-primary font-bold text-tertiary rounded-sm";
  const textCenterClass = "text-center mt-[25px]";
  const linkTextClass = "text=[#32543]";
  const linkClass = "text-primary pl-2";

  return (
    <section className={sectionClass}>
      <Link to="/" className={logoLinkClass}>
        <img src={mainLogo} alt="mainLogo" className="w-[54px]" />
      </Link>
      {/* 로그인 플랫폼 */}
      <div className={platformContainerClass}>
        <LoginPlatform platform="google" />
      </div>
      {/* 로그인 입력 */}
      <form onSubmit={onLogin} className={inputContainerClass}>
        <div className={inputWrapperClass}>
          <img src={email} alt="" className={iconClass} />
          <input
            type="email"
            placeholder="이메일"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className={inputWrapperClass}>
          <img src={lock} alt="" className={iconClass} />
          <input
            type={!pwShow ? "text" : "password"}
            placeholder="비밀번호"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            className={inputClass}
          />
          <div onClick={() => setPwShow()} className={toggleIconContainerClass}>
            {!pwShow ? (
              <img src={eye} alt="" className="w-[24px]" />
            ) : (
              <img src={closeEye} alt="" className="w-[24px]" />
            )}
          </div>
        </div>
        {error && <p className="text-error">{error}</p>}
        <button type="submit" className={buttonClass}>
          로그인
        </button>
      </form>
      <div className={textCenterClass}>
        <p className={linkTextClass}>
          계정이 없나요?
          <Link to="/signIn" className={linkClass}>
            회원가입
          </Link>
        </p>
        <Link to="/PasswordResetPage" className={linkTextClass}>
          비밀번호가 기억나지 않나요?
          <a href="#" className={linkClass}>
            비밀번호 찾기
          </a>
        </Link>
      </div>
    </section>
  );
};

export default LoginComponent;
