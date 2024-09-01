import BlackX from "../../assets/images/BlackX.svg";
import korean from "../../assets/images/korean.svg";
import arrowDown from "../../assets/images/arrowDown.svg";
import Dog1 from "../../assets/images/Dog1.png";
import bookMark from "../../assets/images/bookMark.svg";
import alarm from "../../assets/images/alarm.svg";
import { useAside } from "../../store/AsideStore";
import useToggle from "../../hooks/useToggle";

export default function Aside() {
  const { asideOpen, setAsideOpen } = useAside();
  const [isKorean, setIsKorean] = useToggle();

  const handleClose = () => {
    setAsideOpen(false);
  };

  return (
    <>
      {asideOpen && (
        <div className="fixed inset-0 z-10 w-full h-full bg-black opacity-20" />
      )}
      <aside
        className={`fixed px-[20px] py-[30px] right-0 w-[40vw] h-[100vh] bg-white z-20 max-sm:w-2/3 transition-transform duration-300 ${
          asideOpen ? "animate-slideIn block" : "animate-slideOut hidden"
        }`}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between">
            <div onClick={setIsKorean} className="flex gap-2 cursor-pointer">
              {/* TOP */}
              <img
                src={isKorean ? korean : korean}
                className="w-[27px]"
                alt={isKorean ? "Korean" : "English"}
              />
              <p className="ml-[2px]">{isKorean ? "한국어" : "English"}</p>
              <img src={arrowDown} className="w-[13px]" alt="" />
            </div>
            <img
              src={BlackX}
              alt="X"
              className="w-[22px] h-[22px] fill-black cursor-pointer"
              onClick={handleClose}
            />
          </div>
          {/* MIDDLE */}
          <div className="w-full border border-tertiary rounded-[5px]">
            <div className="flex border-b-2 border-tertiary h-[60px] gap-[2px] justify-center items-center">
              <p className="text-text">jkjk0192</p>
              <img
                src={Dog1}
                alt="Dog1"
                className="rounded-full w-[32px] h-[32px] border border-tertiary"
              />
            </div>
            <div className="flex h-[40px] text-text">
              <div className="flex-1 gap-2 flex justify-center items-center">
                <img src={alarm} alt="alarm" className="w-[14px] h-[17px]" />
                <p>알림</p>
              </div>
              <div className="flex-1 gap-2 flex justify-center items-center">
                <img
                  src={bookMark}
                  alt="bookMark"
                  className="w-[11px] h-[15px]"
                />
                <p>북마크</p>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <p className="text-error">로그아웃</p>
          <div className="text-text flex flex-col gap-[10px]">
            <p>모든 목록</p>
            <p>소개</p>
            <p>공지</p>
          </div>
        </div>
      </aside>
    </>
  );
}
