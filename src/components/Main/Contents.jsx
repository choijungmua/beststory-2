import MainChatContent from "../../components/Main/MainChatContent";
import useRoomStore from "../../store/roomStore";
import Check from "../../assets/images/Check.svg";
import useToggle from "../../hooks/useToggle";
import { categories } from "../../db/categories";
import CategoryList from "../../ui/CategoryList";
import ContentTitle from "./ContentTitle";
import UserInfo from "../../ui/UserInfo";
import { useChatShow } from "../../store/ChatStore";
import MainChat from "../../Pages/MainChat";
import Chatting from "./Chatting";
function Contents() {
  const { roomData, mainTitle } = useRoomStore();
  const [tagShow, setTagShow] = useToggle();
  const { chatShow, setChatShow } = useChatShow();
  return (
    <div className="w-full max-lg:w-[100vw] flex flex-col font-Inter text-text rounded-[10px] border border-tertiary bg-white">
      {/* 메인 콘텐츠 */}
      <div className="flex w-full flex-col mb-[20px] max-lg:m-0">
        <div className="flex relative justify-center flex-col mx-[20px] gap-[15px]">
          <ContentTitle
            mainTitle={mainTitle}
            setTagShow={setTagShow}
            tagShow={tagShow}
          />
          {/* 추가할 태그 선택 */}
          <div className="flex gap-[10px] flex-col flex-wrap">
            {!tagShow && (
              <>
                <p className="text-text">
                  추가할 태그를 선택하세요. (최대 5개)
                </p>

                <div className="flex gap-[10px] flex-wrap text-white mb-[20px]">
                  <CategoryList categories={categories} />
                  <button
                    onClick={setTagShow}
                    className="flex gap-1 opacity-80 font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]"
                  >
                    <img src={Check} alt="" />
                    완료
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="border-t-2 mr-[20px] w-full max-lg:hidden border-tertiary" />
          <div className="max-lg:inline hidden">
            <UserInfo />
          </div>
        </div>
        <div className="mt-[20px] w-full">
          {/* 조건부 렌더링 */}
          {!chatShow ? (
            <div className="w-full h-full">
              {roomData.map((data, index) => (
                <MainChatContent key={index} {...data} index={index + 1} />
              ))}
            </div>
          ) : (
            <div
              className={` max-lg:h-full max-lg:w-full gap-[15px] ${
                chatShow
                  ? "max-lg:animate-slideIn max-lg:block"
                  : "max-lg:animate-slideOut max-lg:hidden"
              }`}
            >
              <Chatting />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contents;
