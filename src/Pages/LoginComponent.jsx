import mainLogo from "../assets/images/mainLogo.svg";
import LoginPlatform from "../ui/LoginPlatform";
import eye from "../assets/images/eye.svg";
import lock from "../assets/images/lock.svg";
import email from "../assets/images/email.svg";
import closeEye from "../assets/images/closeEye.svg";
import { Link } from "react-router-dom";
import useToggle from "../hooks/useToggle";
const LoginComponent = () => {
  const [pwShow, setPwShow] = useToggle();

  return (
    <section className="bg-bgColor h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <Link to="/" className="max-sm:mt-[100px]">
        <img src={mainLogo} alt="mainLogo" className="w-[54px]" />
      </Link>
      {/* Login */}
      <div className="flex flex-col w-full gap-[10px] mt-[50px] justify-center items-center">
        <LoginPlatform platform="google" />
        <LoginPlatform platform="github" />
        <LoginPlatform platform="facebook" />
      </div>

      {/* Login Input */}
      <div className="w-[500px] max-sm:w-full mt-[30px] border border-tertiary rounded-[10px] bg-white px-[20px] shadow-md py-[40px] flex flex-col gap-[10px] justify-center items-center">
        <div className="w-full px-[20px] border rounded-md border-tertiary py-[10px] h-[60px] gap-[10px] flex justify-center">
          <img src={email} alt="" className="w-[18px]" />
          <input type="text" placeholder="이메일" className="w-full" />
        </div>
        <div className="w-full px-[20px] border rounded-md border-tertiary py-[10px] h-[60px] gap-[10px] flex justify-center">
          <img src={lock} alt="" className="w-[18px]" />
          <input
            type={!pwShow ? "text" : "password"}
            placeholder="비밀번호"
            className="w-full"
          />
          <div
            onClick={() => {
              setPwShow();
            }}
            className="flex w-[24px] justify-center items-center"
          >
            {!pwShow ? (
              <img src={eye} alt="" className="w-[24px]" />
            ) : (
              <img src={closeEye} alt="" className="w-[24px]" />
            )}
          </div>
        </div>
        <p className="w-full h-[60px] flex justify-center items-center bg-primary font-bold text-tertiary rounded-sm">
          <Link to="/loginCheck">로그인</Link>
        </p>
      </div>
      <div className="text-center mt-[25px]">
        <p className="text=[#32543]">
          계정이 없나요?
          <a href="" className="text-primary pl-2">
            <Link to="/signIn">회원가입</Link>
          </a>
        </p>
        <p className="text=[#32543] ">
          {" "}
          비밀번호가 기억나지 않나요?
          <a href="" className="text-primary pl-2">
            비밀번호 찾기
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginComponent;
