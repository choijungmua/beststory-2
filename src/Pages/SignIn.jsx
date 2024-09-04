import { useState } from "react";
import Union from "../assets/images/Union.svg";
import mainLogo from "../assets/images/mainLogo.svg";
import { useNavigate } from "react-router-dom";
import { auth, db, USER_COLLECTION } from "../firebase-config"; // Firebase 인증 객체를 가져옵니다.
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import useUserStore from "../store/Auth";

const SignIn = () => {
  const { setUser } = useUserStore((state) => ({
    setUser: state.setUser,
  }));
  const navigate = useNavigate();
  const [falseValue, setFalseValue] = useState(true);
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [passwordFirstCheck, setPasswordFirstCheck] = useState("");
  const [passwordSecondCheck, setPasswordSecondCheck] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValidPassword = (password) => {
    // 비밀번호가 대문자와 소문자가 모두 포함되어 있는지 확인
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    return hasUpperCase && hasLowerCase;
  };
  // 로그인 시도
  const handleSignIn = async (event) => {
    event.preventDefault();
    // 비밀번호 8자 이상 확인
    if (passwordFirstCheck.length < 8) {
      setError("비밀번호는 최소 8자 이상이어야 합니다.");
      setFalseValue(false);

      return;
    }
    // 비밀번호 대문자와 소문자 포함 여부 확인
    if (!isValidPassword(passwordFirstCheck)) {
      setError("비밀번호는 대문자와 소문자를 모두 포함해야 합니다.");
      setFalseValue(false);

      return;
    }

    //첫번째요소와 두번째 요소 확인
    if (passwordFirstCheck !== passwordSecondCheck) {
      setError("입력하신 비밀번호가 다릅니다.");
      setSuccess("");
      setFalseValue(false);

      return;
    }

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        passwordFirstCheck
      );
      const newUser = credential.user;
      await updateProfile(newUser, { displayName: nickName });

      // Zustand 스토어에 사용자 정보 설정
      setUser(newUser);

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, USER_COLLECTION, newUser.uid), {
        email: newUser.email,
        uid: newUser.uid,
        displayName: nickName,
        createdAt: new Date().toISOString(),
      });

      setSuccess("회원가입 성공!");
      sessionStorage.setItem("user", JSON.stringify(newUser));
      sessionStorage.setItem("loginTimestamp", Date.now().toString()); // 로그인 시각 저장
      alert("회원가입되었습니다.");
      navigate("/");
      setError("");
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          setError("이메일을 바르게 입력해주세요.");
          break;
        case "auth/weak-password":
          setError("비밀번호가 너무 쉬워요.");
          console.log(email, passwordFirstCheck, passwordSecondCheck);
          break;
        case "auth/email-already-in-use":
          setError("등록된 이메일입니다.");

          break;
        default:
          setError("회원가입 실패: " + error.message);
          break;
      }
      setFalseValue(false);
    }
  };

  // 기본 스타일
  const containerClass =
    "w-[100vw] h-[calc(100vh-80px)] flex justify-center items-center bg-[#F3F3F3]";
  const formContainerClass =
    "flex flex-col w-[508px] justify-center items-center";
  const textContainerClass = "text-left w-full pl-[30px]";
  const headingClass = "flex items-center gap-1";
  const headingTextClass = "text-[26px]";
  const paragraphClass = "my-[30px] text-[20px]";
  const formClass =
    "flex flex-col w-full bg-white border rounded-[10px] border-tertiary gap-[30px] px-[30px] py-[40px]";
  const inputContainerClass = "relative py-4 h-[48px]";
  const inputClass = `w-full ${
    falseValue ? "" : "border-error"
  } px-4 h-[48px] border border-[#D8DEF3] rounded-[3px] bg-white focus:outline-none focus:bg-white`;
  const labelClass = `absolute px-2 bg-white top-0 left-3 ${
    falseValue ? "text-text" : "text-error"
  }`;
  const requirementsClass = "flex flex-col gap-[20px]";
  const requirementsTextClass = "flex gap-4 max-sm:flex-wrap text-[#888888]";
  const requirementItemClass = "flex gap-2";
  const buttonClass =
    "bg-primary text-white h-[60px] mt-[20px] w-full rounded-[3px] border border-[#CCCCCC]";
  const errorLabel = "text-error";
  return (
    <section className={containerClass}>
      <div className={formContainerClass}>
        <div className={textContainerClass}>
          <div className={headingClass}>
            <img src={mainLogo} alt="Main Logo" />
            <h2 className={headingTextClass}>회원가입</h2>
          </div>
          <p className={paragraphClass}>사용자 정보를 입력하세요.</p>
        </div>
        <form onSubmit={handleSignIn} className={formClass}>
          <div className={inputContainerClass}>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="email" className={labelClass}>
              이메일*
            </label>
          </div>
          <div className={inputContainerClass}>
            <input
              id="nickName"
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="nickName" className={labelClass}>
              닉네임*
            </label>
          </div>
          <div className={inputContainerClass}>
            <input
              id="password"
              type="password"
              value={passwordFirstCheck}
              onChange={(e) => setPasswordFirstCheck(e.target.value)}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="password" className={labelClass}>
              비밀번호*
            </label>
          </div>
          <div className={inputContainerClass}>
            <input
              id="passwordConfirm"
              type="password"
              value={passwordSecondCheck}
              onChange={(e) => setPasswordSecondCheck(e.target.value)}
              className={inputClass}
              placeholder=" "
              required
            />
            <label htmlFor="passwordConfirm" className={labelClass}>
              비밀번호 확인*
            </label>
          </div>
          {falseValue ? (
            <div className={requirementsClass}>
              <div className={requirementsTextClass}>
                <span className={requirementItemClass}>
                  <img src={Union} alt="Requirement Icon" />
                  최소 8자
                </span>
                <span className={requirementItemClass}>
                  <img src={Union} alt="Requirement Icon" />
                  알파벳 대문자 및 소문자 조합
                </span>
              </div>
            </div>
          ) : (
            <p className={errorLabel}>{error}</p>
          )}
          <button type="submit" className={buttonClass}>
            계정 만들기
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
