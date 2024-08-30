import send from "../assets/images/send.svg";
const ChatPrompt = () => {
  return (
    <div className="w-full border-t bg-white border-tertiary">
      <div className="gap-[10px] justify-between h-[76px] flex">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          className="pl-[20px] w-full placeholder:text-tertiary flex items-center"
        />
        <img src={send} alt="" className="w-[30px] mr-[20px]" />
      </div>
    </div>
  );
};

export default ChatPrompt;
