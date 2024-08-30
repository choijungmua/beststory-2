import thinBookMark from "../assets/images/thinBookMark.svg";
import fillBookMark from "../assets/images/fillBookMark.svg";
import MainChatContent from "../components/Main/MainChatContent";
import Chat from "../components/Chat";
import SelectTag from "../ui/SelectTag";
import useRoomStore from "../store/roomStore";
import { useState } from "react";
import Check from "../assets/images/Check.svg";
import Plus from "../assets/images/Plus.svg";
import useToggle from "../hooks/useToggle";
import { categories } from "../db/categories";
import CategoryList from "../ui/CategoryList";
const MainChat = () => {
  const { roomData, mainTitle } = useRoomStore();
  const [isBookmarked, setIsBookmarked] = useToggle();
  const [tagShow, setTagShow] = useToggle();
  return (
    <section className="bg-bgColor">
      <div className="mx-[260px] pt-[20px] flex gap-[25px]">
        <div className="w-[65%] flex flex-col font-Inter text-text rounded-[10px] border border-tertiary bg-white">
          {/* 메인 콘텐츠 */}
          <div className="flex w-full flex-col mb-[20px]">
            <div className="flex relative justify-center flex-col mx-[20px] gap-[15px]">
              <p className="font-bold pt-[20px] text-[30px]">{mainTitle}</p>
              {/* 태그가 만약 선택 되었을 경우 */}
              <SelectTag />
              {/* 태그 선택 */}
              <div className="flex gap-[10px] text-text">
                <button
                  onClick={setTagShow}
                  className="flex gap-[5px] font-bold items-center border border-tertiary rounded-[50px] bg-white px-[25px] h-[40px]"
                >
                  <img src={Plus} alt="" />
                  태그 추가
                </button>
              </div>
              {/* 추가할 태그 선택 */}
              <div className="flex gap-[10px] flex-col flex-wrap">
                {!tagShow && (
                  <>
                    <p className="text-text">
                      추가할 태그를 선택하세요. (최대 5개)
                    </p>

                    <div className="flex gap-[10px] flex-wrap text-white mb-[20px]">
                      <CategoryList categories={categories} />
                      <button className="flex gap-1 opacity-80 font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]">
                        <img src={Check} alt="" />
                        완료
                      </button>
                    </div>
                  </>
                )}
              </div>
              {tagShow && (
                <div
                  onClick={() => setIsBookmarked()}
                  className="absolute right-0  "
                  aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                >
                  <img
                    src={!isBookmarked ? fillBookMark : thinBookMark}
                    alt={!isBookmarked ? "Bookmarked" : "Not bookmarked"}
                    className="w-[32px] h-[36px]"
                  />
                </div>
              )}
              <div className="border-t-2 mr-[20px] w-full border-tertiary" />
            </div>
            {roomData.map((data, index) => (
              <MainChatContent key={index} {...data} index={index + 1} />
            ))}
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-[15px]">
          <Chat />
        </div>
      </div>
    </section>
  );
};

export default MainChat;
