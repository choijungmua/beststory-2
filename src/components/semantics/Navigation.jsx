import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import mainLogo from "../../assets/images/mainLogo.svg";
import korean from "../../assets/images/korean.svg";
import bookMark from "../../assets/images/bookMark.svg";
import alarm from "../../assets/images/alarm.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import hamburger from "../../assets/images/hamburger.svg";
import { useAside } from "../../store/AsideStore";
import useToggle from "../../hooks/useToggle";
import { usePostState } from "../../store/PostStateStore";

const Navigation = () => {
  const { setAsideOpen } = useAside();
  const { user, logout } = useAuth();
  const [isKorean, setIsKorean] = useToggle();
  const navigate = useNavigate();
  const { postState, setPostState } = usePostState();
  const [isBoolPostState, setIsBoolPostState] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); // 로그아웃 후 홈 페이지로 리디렉션
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  // 메인페이지의 방 목록 변경
  const handleMoreNameChange = (category) => () => {
    const newState = !isBoolPostState ? `${category}List` : "";
    setPostState(newState);
    setIsBoolPostState(!isBoolPostState);
  };

  return (
    <nav className="mx-[260px] bg-white font-Inter h-[80px] flex items-center justify-between whitespace-nowrap max-xl:mx-[130px] max-lg:mx-[60px] max-md:mx-[10px] max-sm:mx-[10px]">
      {/* 로고와 네비게이션 */}
      <div className="flex gap-[40px] lg:gap-[20px]">
        <div
          onClick={() => setPostState("")}
          className="flex justify-center cursor-pointer items-center gap-1 text-primary font-bold text-[30px]"
        >
          <img src={mainLogo} alt="mainlogo" />
          <h1>
            <Link to="/">베스트스토리</Link>
          </h1>
        </div>
        <ul className="flex font-Roboto items-center gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[10px] xl:text-[16px] lg:text-[14px] max-sm:text-[14px] md:text-[14px] lg:flex md:flex xl:flex max-md:hidden">
          <Link to="/">
            <li onClick={handleMoreNameChange("All")}>모든목록</li>
          </Link>
          <li>소개</li>
          <li>공지</li>
        </ul>
      </div>
      <div className="flex gap-[30px] xl:gap-[30px] lg:gap-[20px] md:gap-[10px] sm:gap-[5px] xl:text-[16px] lg:text-[14px] sm:text-[14px] md:text-[14px] lg:flex md:flex xl:flex max-md:hidden">
        <div className="flex gap-[40px] xl:gap-[40px] lg:gap-[30px] md:gap-[20px] sm:gap-[10px]">
          <img src={alarm} alt="알림" className="w-[18px]" />
          <Link to="/" className="w-[14px]">
            <img
              src={bookMark}
              onClick={handleMoreNameChange("Book")}
              alt="북마크"
            />
          </Link>
        </div>
        {!user ? (
          <>
            <Link to="/Login">로그인</Link>
            <Link to="/signin">회원가입</Link>
          </>
        ) : (
          <>
            <div>
              <Link to="/myinformation">{user.displayName || "사용자"}</Link>
            </div>
            <p onClick={handleLogout} className="cursor-pointer">
              로그아웃
            </p>
          </>
        )}
        <div onClick={setIsKorean} className="flex gap-2 cursor-pointer">
          <img
            src={korean}
            className="w-[27px]"
            alt={isKorean ? "Korean" : "English"}
          />
          <p className="ml-[2px]">{isKorean ? "한국어" : "English"}</p>
          <img src={arrowDown} className="w-[13px]" alt="화살표" />
        </div>
      </div>
      <img
        onClick={() => setAsideOpen(true)}
        src={hamburger}
        className="w-[28px] max-md:inline hidden"
        alt="햄버거 메뉴"
      />
    </nav>
  );
};

export default Navigation;
