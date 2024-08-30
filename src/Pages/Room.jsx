import arrowLeft from "../assets/images/arrowLeft.svg"
import RoomPrompt from "../ui/RoomPrompt";
import FillMainLogo from "../assets/images/FillMainLogo.svg"
import RoomContent from "../ui/RoomContent";
import RoomComplete from "../ui/RoomComplete";
const Room = () => {
    return(
        <section className="flex h-[calc(100vh-80px)] pt-[15px] pb-[30px] justify-center bg-[#F3F3F3]">

<div className="ml-[550px] mr-[600px] w-full gap-[5px] flex">

<div className="w-[60px] h-[60px] flex justify-center items-center bg-white rounded-[10px] border border-tertiary">

        <img src={arrowLeft} alt="" className="w-[12px] h-[16px] " />
</div>
<div className="flex gap-[25px] flex-col w-full">
<div className="w-full text-[20px] text-[#323543] h-full p-[30px] bg-white rounded-[10px] border border-tertiary">
{/* 질문 1 */}
<>
    <div className="flex">

    <img src={FillMainLogo} alt="" className="mr-[10px] w-[28px]" />
    <p>만들고 싶은 상위 목록은 무엇인가요?</p>
</div>
    <div className="border border-tertiary bg-[#F3F3F3] rounded-[10px] p-[20px] mt-[10px] mb-[30px]">
        <p>최고의 개 품종</p>
    </div>
</>
{/* 질문2 */}
    <div className="flex">

    <img src={FillMainLogo} alt="" className="mr-[10px] w-[28px] h-[28px] " />
    <div className="flex-col">

    <p><span className="font-bold mr-1">
        최고의 개 품종
        </span>
        의 상위 몇개의 목록을 추가하고 싶나요?
        </p>
        <p className="text-[#323543] text-[16px]">ex) TOP 5, TOP7, TOP 10 ...</p>
    </div>
</div>
    <div className="border mt-[10px] border-tertiary bg-[#F3F3F3] rounded-[10px] p-[20px] mb-[30px]">
        <p>TOP5</p>
    </div>
    {/* 답변  */}
    <div className="flex flex-col">

    <div className="flex w-full">

<img src={FillMainLogo} alt="" className="mr-[10px] w-[28px] h-[28px] " />
<div className="flex-col">

<p><span className="font-bold mr-1">
    최고의 개 품종
    </span>
    의 TOP 5에 대한 목록입니다.
    </p>
</div>
    </div>

{/* 답변 */}

<RoomContent/>
<RoomContent/>
</div>
    </div>
    

{/* <RoomPrompt/> */}
<RoomComplete/>
</div>
</div>
        </section>
    )
}

export default Room;
// 