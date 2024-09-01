import SelectTag from "../../ui/SelectTag";
import useToggle from "../../hooks/useToggle";
import Plus from "../../assets/images/Plus.svg";
import thinBookMark from "../../assets/images/thinBookMark.svg";
import fillBookMark from "../../assets/images/fillBookMark.svg";
import { useChatShow } from "../../store/ChatStore";
import addChat from "../../assets/images/addChat.svg";
import { useCategory } from "../../store/Array";
function ContentTitle({ mainTitle, setTagShow, tagShow }) {
  const { categoryArray } = useCategory();
  const [isBookmarked, setIsBookmarked] = useToggle();
  const { chatShow, setChatShow } = useChatShow();

  return (
    <div>
      {" "}
      <p className="font-bold py-[20px] text-[30px] max-lg:text-[26px]: max-sm:text-[20px]">
        {mainTitle}
      </p>
      <div className="flex justify-between flex-wrap-reverse whitespace-nowrap">
        <SelectTag categoryArray={categoryArray} />
        {/* 북마크 */}
        {tagShow && (
          <div
            onClick={() => setIsBookmarked()}
            className="cursor-pointer mb-5"
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <img
              src={!isBookmarked ? fillBookMark : thinBookMark}
              alt={!isBookmarked ? "Bookmarked" : "Not bookmarked"}
              className="w-[32px] h-[36px] "
            />
          </div>
        )}
      </div>
      {/* 태그 선택 */}
      <div className="flex w-full justify-between gap-[10px] text-text">
        <button
          onClick={setTagShow}
          className="flex gap-[5px] font-bold items-center border border-tertiary rounded-[50px] bg-white px-[25px] max-sm:px-[15px] max-sm:h-[35px] h-[40px]"
        >
          <img src={Plus} alt="Plus" />
          태그 추가
        </button>
        <div className="max-lg:inline hidden">
          <button
            onClick={() => setChatShow(!chatShow)}
            className="flex gap-[5px] max-sm:h-[35px] text-white font-bold items-center border bg-primary border-tertiary max-sm:px-[15px] rounded-[50px] px-[25px] h-[40px]"
          >
            <img src={addChat} alt="addChat" className=" w-[22px] h-[22px]" />
            채팅 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentTitle;
