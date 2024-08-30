import refresh from "../assets/images/refresh.svg"
import addChat from "../assets/images/addchat.svg"
const RoomComplete = () => {
    return(
<div className="w-full">

<div className="gap-[10px] text-[20px] h-[76px] text-white flex">
    <button className="flex items-center flex-3 gap-[10px] bg-[#8899DA] px-[15px] whitespace-nowrap justify-center py-[10px] rounded-[10px]">
    <img  src={refresh} alt="" className="w-[24px]" />
        <p className="">
        다시 추천 받기
        </p>
            
    </button>
    <button className="bg-primary flex-1 rounded-[10px] gap-[10px] px-[20px] py-[10px] justify-center flex items-center">
    <img  src={addChat} alt="" className="w-[33px]" />
        <p>방 만들기</p>
    </button>
</div>
</div>
    )
}

export default RoomComplete;