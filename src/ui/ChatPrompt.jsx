import send from "../assets/images/send.svg"
const ChatPrompt = () => {
    return(
<div className="w-full border-t bg-white border-tertiary">

<div className="gap-[10px] justify-between mx-[20px] h-[76px] flex">
    <input type="text" placeholder="메시지를 입력하세요" className=" placeholder:text-tertiary flex items-center" />
    <img src={send} alt="" className="w-[30px]" />
</div>
</div>
    )
}

export default ChatPrompt;