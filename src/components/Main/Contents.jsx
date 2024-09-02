import MainChatContent from "../../components/Main/MainChatContent";
import useRoomStore from "../../store/roomStore";
import Check from "../../assets/images/Check.svg";
import useToggle from "../../hooks/useToggle";
import { categories } from "../../db/categories";
import CategoryList from "../../ui/CategoryList";
import ContentTitle from "./ContentTitle";
import UserInfo from "../../ui/UserInfo";
import { useChatShow } from "../../store/ChatStore";
import Chatting from "./Chatting";

const CONTAINER_CLASS =
  "w-full max-lg:w-[100vw] flex flex-col font-Inter text-text rounded-[10px] border border-tertiary bg-white";
const MAIN_CONTENT_CLASS = "flex w-full flex-col mb-[20px] max-lg:m-0";
const CONTENT_TITLE_CONTAINER_CLASS =
  "flex relative justify-center flex-col mx-[20px] gap-[15px]";
const TAG_SELECTION_CLASS = "flex gap-[10px] flex-col flex-wrap";
const TAG_TEXT_CLASS = "text-text";
const CATEGORY_BUTTON_CONTAINER_CLASS =
  "flex gap-[10px] flex-wrap text-white mb-[20px]";
const CATEGORY_BUTTON_CLASS =
  "flex gap-1 opacity-80 font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]";
const BORDER_CLASS =
  "border-t-2 mr-[20px] w-full max-lg:hidden border-tertiary";
const USER_INFO_CLASS = "max-lg:inline hidden";
const CHAT_CONTAINER_CLASS = "mt-[20px] w-full";
const CHAT_CONTENT_CLASS = "w-full h-full";
const CHAT_ANIMATION_CLASS = "max-lg:h-full max-lg:w-full gap-[15px]";
const CHAT_SHOW_CLASS = "max-lg:animate-slideIn max-lg:block";
const CHAT_HIDE_CLASS = "max-lg:animate-slideOut max-lg:hidden";

function Contents() {
  const { roomData, mainTitle } = useRoomStore();
  const [tagShow, setTagShow] = useToggle();
  const { chatShow } = useChatShow();

  return (
    <div className={CONTAINER_CLASS}>
      {/* 메인 콘텐츠 */}
      <div className={MAIN_CONTENT_CLASS}>
        <div className={CONTENT_TITLE_CONTAINER_CLASS}>
          <ContentTitle
            mainTitle={mainTitle}
            setTagShow={setTagShow}
            tagShow={tagShow}
          />
          {/* 추가할 태그 선택 */}
          <div className={TAG_SELECTION_CLASS}>
            {!tagShow && (
              <>
                <p className={TAG_TEXT_CLASS}>
                  추가할 태그를 선택하세요. (최대 5개)
                </p>

                <div className={CATEGORY_BUTTON_CONTAINER_CLASS}>
                  <CategoryList categories={categories} />
                  <button
                    onClick={setTagShow}
                    className={CATEGORY_BUTTON_CLASS}
                  >
                    <img src={Check} alt="" />
                    완료
                  </button>
                </div>
              </>
            )}
          </div>

          <div className={BORDER_CLASS} />
          <div className={USER_INFO_CLASS}>
            <UserInfo />
          </div>
        </div>
        <div className={CHAT_CONTAINER_CLASS}>
          {/* 조건부 렌더링 */}
          {!chatShow ? (
            <div className={CHAT_CONTENT_CLASS}>
              {roomData.map((data, index) => (
                <MainChatContent key={index} {...data} index={index + 1} />
              ))}
            </div>
          ) : (
            <div
              className={`${CHAT_ANIMATION_CLASS} ${
                chatShow ? CHAT_SHOW_CLASS : CHAT_HIDE_CLASS
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
