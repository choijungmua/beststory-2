import thinBookMark from "../assets/images/thinBookMark.svg"
import MainChatContent from "../components/Main/MainChatContent"
import Chat from "../components/Chat"
import Plus from "../assets/images/Plus.svg"
import SelectTag from "../ui/SelectTag"
const MainChat = () => {
    return(

    <section className=" bg-bgColor">
        <div className="mx-[260px] pt-[20px] flex gap-[25px]">

        <div className="w-[65%] flex flex-col font-Inter text-[#323543] rounded-[10px] border border-tertiary bg-white">
        {/* 메인 콘텐츠 */}
        <div className="flex flex-col mb-[20px] ">
        <div className="flex relative justify-center flex-col mx-[20px] gap-[15px]">

<p className="font-bold pt-[20px] text-[30px]">유럽의 숨겨진 보석: 알려지지 않은 여행지</p>
{/* 태그가 만약 선택 되었을 경우 */}
{/* <SelectTag/> */}
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
<p className="text-[#323543]">추가할 태그를 선택하세요. (최대 5개)</p>
<SelectTag/>

<img src={thinBookMark} alt="" className="w-[32px] absolute right-0" />
</div>
<div className="border-t-2 mx-[20px] border-tertiary"/>

        <MainChatContent/>
        <MainChatContent/>
        <MainChatContent/>
        <MainChatContent/>
        <MainChatContent/>
        </div>
        </div>
        <div className="w-[35%] flex flex-col gap-[15px]">
            <Chat/>
        </div>
        </div>
    </section>
    )
}

export default MainChat;
// 