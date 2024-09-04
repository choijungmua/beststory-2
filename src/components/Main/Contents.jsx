import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config"; // Firestore 설정 파일
import { doc, updateDoc } from "firebase/firestore";
import MainChatContent from "../../components/Main/MainChatContent";
import Check from "../../assets/images/Check.svg";
import useToggle from "../../hooks/useToggle";
import CategoryList from "../../ui/CategoryList";
import ContentTitle from "./ContentTitle";
import UserInfo from "../../ui/UserInfo";
import { useChatShow } from "../../store/ChatStore";
import Chatting from "./Chatting";
import { useCategory } from "../../store/Array";
import { useBookMark } from "../../store/roomStore";

// 스타일 클래스 상수
const STYLES = {
  container:
    "w-full max-lg:w-[100vw] flex flex-col font-Inter text-text rounded-[10px] border border-tertiary bg-white",
  mainContent: "flex w-full flex-col mb-[20px] max-lg:m-0",
  contentTitleContainer:
    "flex relative justify-center flex-col mx-[20px] gap-[15px]",
  tagSelection: "flex gap-[10px] flex-col flex-wrap",
  tagText: "text-text",
  categoryButtonContainer: "flex gap-[10px] flex-wrap text-white mb-[20px]",
  categoryButton:
    "flex gap-1 opacity-80 font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]",
  border: "border-t-2 mr-[20px] w-full max-lg:hidden border-tertiary",
  userInfo: "max-lg:inline hidden",
  chatContainer: "mt-[20px] w-full",
  chatContent: "w-full h-full",
  chatAnimation: "max-lg:h-full max-lg:w-full gap-[15px]",
  chatShow: "max-lg:animate-slideIn max-lg:block",
  chatHide: "max-lg:animate-slideOut max-lg:hidden",
};

function Contents({ id, data }) {
  const { categoryArray, setCategoryArray } = useCategory();
  const [tagShow, setTagShow] = useToggle();
  const [viewCount, setViewCount] = useState(data.viewPostCount);
  const { chatShow } = useChatShow();
  const { bookMark } = useBookMark();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 조회 수를 증가시키는 함수
    const incrementViewCount = async () => {
      try {
        const newViewCount = viewCount + 1;
        setViewCount(newViewCount);
        const docRef = doc(db, "responses", id);
        await updateDoc(docRef, { viewPostCount: newViewCount });
      } catch (error) {
        console.error("조회 수 업데이트 오류:", error);
      }
    };

    incrementViewCount();
  }, [id]); // `id`에만 의존하여 불필요한 업데이트 방지

  const handleSaveTags = async () => {
    try {
      const docRef = doc(db, "responses", id);
      await updateDoc(docRef, {
        postCategory: categoryArray, // 선택한 태그를 Firestore에 저장
        fillBookMark: bookMark, // 북마크 상태를 Firestore에 저장
        viewPostCount: viewCount, // 업데이트된 조회 수를 Firestore에 저장
      });

      alert("태그가 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("태그 저장 오류:", error);
      alert("태그 저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={STYLES.container}>
      <div className={STYLES.mainContent}>
        <div className={STYLES.contentTitleContainer}>
          <ContentTitle
            mainTitle={data.title}
            view={data.viewPostCount}
            setTagShow={setTagShow}
            tagShow={tagShow}
            postCategory={data.postCategory}
          />
          <div className={STYLES.tagSelection}>
            {!tagShow && (
              <>
                <p className={STYLES.tagText}>
                  태그를 선택해 주세요. (최대 5개)
                </p>
                <div className={STYLES.categoryButtonContainer}>
                  <CategoryList
                    setCategoryArray={setCategoryArray}
                    categoryArray={categoryArray}
                  />
                  <button
                    onClick={() => {
                      setTagShow(); // 태그 선택 토글
                      handleSaveTags(); // 태그 저장
                    }}
                    className={STYLES.categoryButton}
                  >
                    <img src={Check} alt="확인" />
                    완료
                  </button>
                </div>
              </>
            )}
          </div>
          <div className={STYLES.border} />
          <div className={STYLES.userInfo}>
            <UserInfo name={data.user} />
          </div>
        </div>
        <div className={STYLES.chatContainer}>
          {!chatShow ? (
            <div className={STYLES.chatContent}>
              {data.content.map((item, index) => (
                <MainChatContent
                  key={item.limitNumber}
                  {...item}
                  id={id}
                  index={index + 1}
                />
              ))}
            </div>
          ) : (
            <div
              className={`${STYLES.chatAnimation} ${
                chatShow ? STYLES.chatShow : STYLES.chatHide
              }`}
            >
              <Chatting id={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contents;
