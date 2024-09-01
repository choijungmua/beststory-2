import FillMainLogo from "../../assets/images/FillMainLogo.svg";
import { ReactTyped } from "react-typed";
function SecondQuestion({ onComplete, questionText }) {
  return (
    <>
      <div className="flex">
        <img src={FillMainLogo} alt="" className="mr-[10px] w-[28px]" />
        <div>
          <span className="font-bold mr-1">{questionText}</span>
          <ReactTyped
            strings={["의 상위 몇개의 목록을 추가하고 싶나요?"]}
            typeSpeed={40}
            onComplete={onComplete}
          />
          <div className="flex gap-5">
            <p className="text-text text-[16px] opacity-80">ex) TOP 5~10 ...</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SecondQuestion;
