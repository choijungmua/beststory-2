import thinBookMark from "../assets/images/thinBookMark.svg";
import fillBookMark from "../assets/images/fillBookMark.svg"
import MainChatContent from "../components/Main/MainChatContent";
import Chat from "../components/Chat";
import Plus from "../assets/images/Plus.svg";
import Travel1 from "../assets/images/Travel1.png";
import Travel2 from "../assets/images/Travel2.png";
import Travel3 from "../assets/images/Travel3.png";
import Travel4 from "../assets/images/Travel4.png";
import Travel5 from "../assets/images/Travel5.png";
import SelectTag from "../ui/SelectTag";
import useRoomStore from "../store/roomStore";
import { useState } from "react";
const MainChat = () => {
    const { roomData, mainTitle } = useRoomStore();
    const [ isBookmarked, setIsBookmarked ] = useState(0);
    return (
        <section className="bg-bgColor">
            <div className="mx-[260px] pt-[20px] flex gap-[25px]">
                <div className="w-[65%] flex flex-col font-Inter text-[#323543] rounded-[10px] border border-tertiary bg-white">
                    {/* 메인 콘텐츠 */}
                    <div className="flex w-full flex-col mb-[20px]">
                        <div className="flex relative justify-center flex-col mx-[20px] gap-[15px]">
                            <p className="font-bold pt-[20px] text-[30px]">{mainTitle}</p>
                            {/* 태그가 만약 선택 되었을 경우 */}
                            <SelectTag/>
                            {/* 태그 선택 */}
                            {/* <div className="flex gap-[10px] text-[#323543]">
                                <p
                                    className="flex gap-[5px] font-bold items-center border border-tertiary rounded-[50px] bg-white px-[25px] h-[40px]"
                                >
                                    <img src={Plus} alt="" />
                                    태그 추가
                                </p>
                            </div> */}
                            {/* 추가할 태그 선택 */}
                            {/* <p className="text-[#323543]">추가할 태그를 선택하세요. (최대 5개)</p> */}
                            {/* <SelectTag /> */}
                            <div
      onClick={() => setIsBookmarked(prev => !prev)}
      className="absolute right-0  "
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <img
        src={isBookmarked ? fillBookMark : thinBookMark}
        alt={isBookmarked ? 'Bookmarked' : 'Not bookmarked'}
        className="w-[32px] h-[36px]"
      />
    </div>
                        <div className="border-t-2 mr-[20px] w-full border-tertiary"/>

                        </div>
                        {roomData.map((data, index) => (
                            <MainChatContent key={index} {...data} index={index+1}/>
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
