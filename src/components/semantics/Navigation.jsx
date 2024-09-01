import mainLogo from "../../assets/images/mainLogo.svg";
import korean from "../../assets/images/korean.svg";
import bookMark from "../../assets/images/bookMark.svg";
import alarm from "../../assets/images/alarm.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import hamburger from "../../assets/images/hamburger.svg";
import { Link } from "react-router-dom";
import { useAside } from "../../store/AsideStore";
import useToggle from "../../hooks/useToggle";

const Navigation = () => {
  const { setAsideOpen } = useAside();
  // 초기 상태는 한국어
  const [isKorean, setIsKorean] = useToggle();

  return (
    <nav className="mx-[260px] bg-white font-Inter h-[80px] flex items-center justify-between whitespace-nowrap max-xl:mx-[130px] max-lg:mx-[60px] max-md:mx-[10px] max-sm:mx-[10px] ">
      {/* Logo and Navigation */}
      <div className="flex gap-[40px] lg:gap-[20px]">
        <div className="flex justify-center items-center gap-1 text-primary font-bold text-[30px]">
          <img src={mainLogo} alt="mainlogo" />
          <h1>
            <Link to="/">베스트스토리</Link>
          </h1>
        </div>
        <ul className="flex font-Roboto items-center gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[10px] xl:text-[16px] lg:text-[14px] max-sm:text-[14px] md:text-[14px] lg:flex md:flex xl:flex max-md:hidden ">
          <li>모든목록</li>
          <li>소개</li>
          <li>공지</li>
        </ul>
      </div>
      <div className="flex gap-[30px] xl:gap-[30px] lg:gap-[20px] md:gap-[10px] sm:gap-[5px] xl:text-[16px] lg:text-[14px] sm:text-[14px] md:text-[14px] lg:flex md:flex xl:flex max-md:hidden">
        <div className=" flex gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[10px]">
          <img src={alarm} alt="" className="w-[18px]" />
          <img src={bookMark} alt="" className="w-[14px]" />
        </div>
        <p>
          <Link to="/Login">로그인</Link>
        </p>
        <p>
          <Link to="/signin">회원가입</Link>
        </p>
        <div onClick={setIsKorean} className="flex gap-2 cursor-pointer">
          <img
            src={isKorean ? korean : korean}
            className="w-[27px]"
            alt={isKorean ? "Korean" : "English"}
          />
          <p className="ml-[2px]">{isKorean ? "한국어" : "English"}</p>
          <img src={arrowDown} className="w-[13px]" alt="" />
        </div>
      </div>
      <img
        onClick={() => {
          setAsideOpen(true);
        }}
        src={hamburger}
        className="w-[28px] max-md:inline hidden"
        alt=""
      />
    </nav>
  );
};

export default Navigation;
