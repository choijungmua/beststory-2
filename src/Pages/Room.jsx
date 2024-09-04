import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/images/arrowLeft.svg";
import RoomPrompt from "../ui/RoomPrompt";
import FillMainLogo from "../assets/images/FillMainLogo.svg";
import RoomComplete from "../ui/RoomComplete";
import Question from "../components/Room/Question";
import SecondQuestion from "../components/Room/SecondQuestion";
import Answer from "../components/Room/Answer";
import QuestionInput from "../components/Room/QuestionInput";
import SecondQuestionInput from "../components/Room/SecondQuestionInput";
import FadeLoader from "react-spinners/FadeLoader";
import useToggle from "../hooks/useToggle";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import useUserStore from "../store/Auth";
import { initialDogData } from "../db/initialDogData";

const Room = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [submittedValue, setSubmittedValue] = useState("");
  const [secondSubmitedValue, setSecondSubmitedValue] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [newInputState, setNewInputState] = useToggle();
  const [count, setCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [savedResponses, setSavedResponses] = useState([]);
  const [documentId, setDocumentId] = useState(""); // 문서 ID 상태

  // Define classNames as variables
  const containerClassName =
    "flex h-[calc(100vh-80px)] pt-[15px] pb-[30px] justify-center bg-[#F3F3F3]";
  const wrapperClassName = "w-[800px] gap-[5px] max-md: flex";
  const backButtonClassName =
    "w-[60px] max-sm:hidden h-[60px] flex justify-center items-center bg-white rounded-[10px] border border-tertiary";
  const backButtonImgClassName = "w-[12px] h-[16px]";
  const contentClassName =
    "w-full text-[20px] overflow-auto text-text h-full p-[30px] bg-white rounded-[10px] border border-tertiary";
  const successMsgClassName = "text-green-500";
  const errorMsgClassName = "text-red-500";
  const loaderContainerClassName = "flex justify-center";
  const logoClassName = "mr-[10px] w-[28px] h-[28px]";

  const saveToFirestore = async (submittedValue, secondSubmitedValue) => {
    setIsLoading(true);
    try {
      // Firestore에 문서 추가 및 자동 생성된 문서 ID를 받음
      const docRef = await addDoc(collection(db, "responses"), {
        title: submittedValue,
        content: initialDogData,
        limitNumber: secondSubmitedValue,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userPhotoUrl: user.photoURL, // Set user's photo URL
        viewPostCount: 0,
        likePostCount: 0,
        postCategory: [],
        fillBookMark: 0,
        chatting: [],
      });
      // 문서 ID를 상태에 저장
      setDocumentId(docRef.id);

      setSuccessMessage("성공적으로 방이 만들어졌습니다.");
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      console.error("Firestore 저장 오류: ", error);
      setErrorMessage("방을 만드는데 오류가 발생됐습니다.");
      setSuccessMessage(""); // Clear any previous success messages
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptSubmit = async (value) => {
    if (count === 0) {
      setSubmittedValue(value);
      setCount((prev) => prev + 1);
    } else {
      setSecondSubmitedValue(value);
    }

    setQuestionNumber((prev) => prev + 1);
    setNewInputState();

    if (count > 0) {
      await saveToFirestore(submittedValue, value);
    }
  };

  const onTextComplete = () => {
    setTimeout(() => {
      setQuestionNumber((prev) => prev + 1);
      setNewInputState();
    }, 300); // 300ms = 0.3초 지연
  };

  const fetchSavedResponses = async () => {
    try {
      const snapshot = await getDocs(collection(db, "responses"));
      const responses = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })); // 문서 ID를 포함하여 가져옴
      setSavedResponses(responses);
    } catch (error) {
      console.error("데이터 불러오기 오류: ", error);
    }
  };

  useEffect(() => {
    fetchSavedResponses();
  }, []);

  const resetRoom = () => {
    setSubmittedValue("");
    setSecondSubmitedValue("");
    setQuestionNumber(0);
    setCount(0);
  };

  return (
    <section className={containerClassName}>
      <div className={wrapperClassName}>
        <button onClick={() => navigate(-1)} className={backButtonClassName}>
          <img src={arrowLeft} alt="" className={backButtonImgClassName} />
        </button>
        <div className="flex gap-[25px] flex-col w-full">
          <div className={contentClassName}>
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
                <div className={loaderContainerClassName}>
                  <FadeLoader height={10} width={4} />
                </div>
                {/* 답변 */}
                <div className="flex flex-col">
                  <div className="flex w-full">
                    <img src={FillMainLogo} alt="" className={logoClassName} />
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
          {successMessage && (
            <p className={successMsgClassName}>{successMessage}</p>
          )}
          {errorMessage && <p className={errorMsgClassName}>{errorMessage}</p>}
          {isLoading && (
            <div className={loaderContainerClassName}>
              <FadeLoader height={10} width={4} />
            </div>
          )}
          {questionNumber > 3 ? (
            <RoomComplete
              documentId={documentId}
              onReset={resetRoom} // Reset 함수를 전달
            />
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
