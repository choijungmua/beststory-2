import FillMainLogo from "../../assets/images/FillMainLogo.svg";
import { ReactTyped } from "react-typed";
function Question({ onComplete }) {
  return (
    <>
      <div className="flex">
        <img src={FillMainLogo} alt="" className="mr-[10px] w-[28px]" />
        <div>
          <ReactTyped
            strings={["만들고 싶은 상위 목록은 무엇인가요?"]}
            typeSpeed={40}
            onComplete={onComplete}
          />
        </div>
      </div>
    </>
  );
}
export default Question;
