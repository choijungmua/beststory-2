import FillMainLogo from "../../assets/images/FillMainLogo.svg";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config"; // Firestore 설정 파일
import { doc, updateDoc, getDoc } from "firebase/firestore";

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const CONTAINER_CLASS = "px-[20px] relative pt-[20px] w-full flex gap-[50px]";
const IMAGE_CONTAINER_CLASS = "flex items-center gap-[20px]";
const IMAGE_CLASS =
  "w-[160px] h-[160px] rounded-[5px] max-sm:w-[100px] max-sm:h-[138px]";
const TEXT_CONTAINER_CLASS =
  "flex max-lg:flex-col max-lg:items-start gap-[10px]";
const TITLE_CLASS =
  "text-[30px] w-full mr-[60px] font-bold text-text flex gap-[10px]";
const CONTENT_WRAPPER_CLASS = "flex w-full items-center";
const CONTENT_CLASS = "gap-[10px] w-full flex flex-col";
const CONTENT_TEXT_CLASS = "text-[16px] w-full font-normal";
const LIKE_CONTAINER_CLASS =
  "flex-col max-lg:flex-row max-lg:gap-[10px] flex justify-center absolute max-lg:static right-[20px] items-center";
const LIKE_IMAGE_CLASS = "w-[43px] h-[43px] max-sm:w-[30px] max-sm:h-[30px]";
const LIKE_TEXT_CLASS = "font-bold text-primary text-[30px] max-sm:text-[26px]";

const MainChatContent = ({ title, image, content, index, id }) => {
  const [like, setLike] = useState(0);
  const [likeClicked, setLikeClicked] = useState(false); // 좋아요 클릭 상태

  // Firestore에서 초기 likePostCount 가져오기
  useEffect(() => {
    const fetchLikeCount = async () => {
      const docRef = doc(db, "responses", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLike(docSnap.data().likePostCount || 0);
        setLikeClicked(docSnap.data().likeClicked || false); // 기존에 클릭된 상태를 불러옴
      } else {
        console.log("문서가 존재하지 않습니다!");
      }
    };
    fetchLikeCount();
  }, [id]);

  const handleLikeToggle = async () => {
    try {
      const newLikeCount = likeClicked ? like - 1 : like + 1;
      const docRef = doc(db, "responses", id);
      await updateDoc(docRef, {
        likePostCount: newLikeCount,
        likeClicked: !likeClicked, // 좋아요 클릭 상태 업데이트
      });
      setLike(newLikeCount);
      setLikeClicked(!likeClicked);
    } catch (error) {
      console.error("좋아요 업데이트 오류:", error);
      alert("좋아요 반영 중 오류가 발생했습니다.");
    }
  };

  const truncatedContent = truncateText(content, 80); // Adjust the maxLength as needed
  const [addContentShow, setAddContentShow] = useState(false);

  return (
    <div className={CONTAINER_CLASS}>
      <div className={IMAGE_CONTAINER_CLASS}>
        <img src={image} alt="Chat content" className={IMAGE_CLASS} />
        <div className={TEXT_CONTAINER_CLASS}>
          <div className={TITLE_CLASS}>
            <p>{index}</p>
            <div className={CONTENT_WRAPPER_CLASS}>
              <div className={CONTENT_CLASS}>
                <div className="flex">
                  <p>{title}</p>
                  <p onClick={handleLikeToggle} className="cursor-pointer">
                    {likeClicked ? "좋아요 취소" : "좋아요"}
                  </p>
                </div>
                {addContentShow ? (
                  <p className={CONTENT_TEXT_CLASS}>{content}</p>
                ) : (
                  <p className={CONTENT_TEXT_CLASS}>{truncatedContent}</p>
                )}
                <div className="flex justify-end text-[14px]">
                  {addContentShow ? (
                    <p
                      onClick={() => setAddContentShow((value) => !value)}
                      className="cursor-pointer"
                    >
                      접기
                    </p>
                  ) : (
                    <p
                      onClick={() => setAddContentShow((value) => !value)}
                      className="cursor-pointer"
                    >
                      더 보기
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={LIKE_CONTAINER_CLASS}>
            <div className={LIKE_IMAGE_CLASS}>
              <img src={FillMainLogo} alt="Main logo" />
            </div>
            <p className={LIKE_TEXT_CLASS}>{like}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainChatContent;
