import arrowLeft from "../assets/images/arrowLeft.svg";
import RoomPrompt from "../ui/RoomPrompt";
import FillMainLogo from "../assets/images/FillMainLogo.svg";
import RoomComplete from "../ui/RoomComplete";
import { useNavigate } from "react-router-dom";
import Question from "../components/Room/Question";
import SecondQuestion from "../components/Room/SecondQuestion";
import Answer from "../components/Room/Answer";
import QuestionInput from "../components/Room/QuestionInput";
import { useState } from "react";
import SecondQuestionInput from "../components/Room/SecondQuestionInput";
import FadeLoader from "react-spinners/FadeLoader";
import useToggle from "../hooks/useToggle";
const Room = () => {
  const navigate = useNavigate();
  const [submittedValue, setSubmittedValue] = useState("");
  const [secondSubmitedValue, setSecondSubmitedValue] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [newInputState, setNewInputState] = useToggle();
  // 폼 제출 처리
  const [count, setCount] = useState(0);

  const handlePromptSubmit = (value) => {
    if (count === 0) {
      setSubmittedValue(value);
      setCount((value) => value + 1);
    } else {
      setSecondSubmitedValue(value);
    }

    setQuestionNumber((prev) => prev + 1);
    setNewInputState();
  };

  //
  const onTextComplete = () => {
    setTimeout(() => {
      setQuestionNumber((prev) => prev + 1);
      setNewInputState();
    }, 300); // 300ms = 0.3초 지연
  };
  return (
    <section className="flex h-[calc(100vh-80px)] pt-[15px] pb-[30px] justify-center bg-[#F3F3F3]">
      <div className="w-[800px] gap-[5px] max-md: flex">
        <button
          onClick={() => navigate(-1)}
          className="w-[60px] max-sm:hidden h-[60px] flex justify-center items-center bg-white rounded-[10px] border border-tertiary"
        >
          <img src={arrowLeft} alt="" className="w-[12px] h-[16px] " />
        </button>
        <div className="flex gap-[25px] flex-col w-full">
          <div className="w-full text-[20px] overflow-auto text-text h-full p-[30px] bg-white rounded-[10px] border border-tertiary">
            {/* 질문 1 */}
            <Question
              onComplete={onTextComplete}
              questionNumber={questionNumber}
            />
            {questionNumber > 1 && (
              <QuestionInput submittedValue={submittedValue} />
            )}
            {/* 질문2 */}
            {questionNumber > 1 && (
              <>
                <SecondQuestion
                  onComplete={onTextComplete}
                  questionText={submittedValue}
                />
              </>
            )}
            {questionNumber > 2 && (
              <SecondQuestionInput secondSubmitedValue={secondSubmitedValue} />
            )}
            {questionNumber > 3 && (
              <>
                <div className="flex justify-center">
                  <FadeLoader height={10} width={4} />
                </div>
                {/* 답변  */}
                <div className="flex flex-col">
                  <div className="flex w-full">
                    <img
                      src={FillMainLogo}
                      alt=""
                      className="mr-[10px] w-[28px] h-[28px]"
                    />
                    <div className="flex-col">
                      <p>
                        <span className="font-bold mr-1">{submittedValue}</span>
                        에 대한 TOP{secondSubmitedValue}개 목록입니다.
                      </p>
                    </div>
                  </div>
                  <Answer
                    submittedValue={submittedValue}
                    secondSubmitedValue={secondSubmitedValue}
                  />
                </div>
              </>
            )}
          </div>
          {questionNumber > 3 ? (
            <RoomComplete />
          ) : (
            <RoomPrompt
              handlePromptSubmit={handlePromptSubmit}
              questionNumber={questionNumber}
              newInputState={newInputState}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Room;
//
