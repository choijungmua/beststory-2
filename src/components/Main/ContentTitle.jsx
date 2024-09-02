import SelectTag from "../../ui/SelectTag";
import useToggle from "../../hooks/useToggle";
import Plus from "../../assets/images/Plus.svg";
import thinBookMark from "../../assets/images/thinBookMark.svg";
import fillBookMark from "../../assets/images/fillBookMark.svg";
import { useChatShow } from "../../store/ChatStore";
import addChat from "../../assets/images/addChat.svg";
import { useCategory } from "../../store/Array";

const TITLE_CLASS =
  "font-bold py-[20px] text-[30px] max-lg:text-[26px] max-sm:text-[20px]";
const CONTAINER_CLASS =
  "flex justify-between flex-wrap-reverse whitespace-nowrap";
const BOOKMARK_CLASS = "cursor-pointer mb-5";
const BOOKMARK_ICON_CLASS = "w-[32px] h-[36px]";
const TAG_BUTTON_CONTAINER_CLASS =
  "flex w-full justify-between gap-[10px] text-text";
const TAG_BUTTON_CLASS =
  "flex gap-[5px] font-bold items-center border border-tertiary rounded-[50px] bg-white px-[25px] max-sm:px-[15px] max-sm:h-[35px] h-[40px]";
const CHAT_BUTTON_CONTAINER_CLASS = "max-lg:inline hidden";
const CHAT_BUTTON_CLASS =
  "flex gap-[5px] max-sm:h-[35px] text-white font-bold items-center border bg-primary border-tertiary max-sm:px-[15px] rounded-[50px] px-[25px] h-[40px]";
const CHAT_ICON_CLASS = "w-[22px] h-[22px]";

function ContentTitle({ mainTitle, setTagShow, tagShow }) {
  const { categoryArray } = useCategory();
  const [isBookmarked, setIsBookmarked] = useToggle();
  const { chatShow, setChatShow } = useChatShow();

  return (
    <div>
      <p className={TITLE_CLASS}>{mainTitle}</p>
      <div className={CONTAINER_CLASS}>
        <SelectTag categoryArray={categoryArray} />
        {/* 북마크 */}
        {tagShow && (
          <div
            onClick={() => setIsBookmarked()}
            className={BOOKMARK_CLASS}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <img
              src={!isBookmarked ? fillBookMark : thinBookMark}
              alt={!isBookmarked ? "Bookmarked" : "Not bookmarked"}
              className={BOOKMARK_ICON_CLASS}
            />
          </div>
        )}
      </div>
      {/* 태그 선택 */}
      <div className={TAG_BUTTON_CONTAINER_CLASS}>
        <button onClick={setTagShow} className={TAG_BUTTON_CLASS}>
          <img src={Plus} alt="Plus" />
          태그 추가
        </button>
        <div className={CHAT_BUTTON_CONTAINER_CLASS}>
          <button
            onClick={() => setChatShow(!chatShow)}
            className={CHAT_BUTTON_CLASS}
          >
            <img src={addChat} alt="addChat" className={CHAT_ICON_CLASS} />
            채팅 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentTitle;
