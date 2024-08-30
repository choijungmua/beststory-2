import send from "../assets/images/send.svg"
const RoomPrompt = () => {
    return(
<div className="w-full border rounded-[10px] bg-white border-tertiary">

<div className="gap-[10px] justify-between mx-[20px] h-[76px] flex">
    <input type="text" placeholder="내용을 입력하세요" className=" w-full text-[20px] text-[#323543] placeholder:text-tertiary flex items-center" />
    <img src={send} alt="" className="w-[30px]" />
</div>
</div>
    )
}

export default RoomPrompt;