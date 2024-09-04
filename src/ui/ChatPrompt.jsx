import send from "../assets/images/send.svg";

const ChatPrompt = ({ handleSendMessage, message, setMessage }) => {
  return (
    <div className="w-full border-t bg-white border-tertiary">
      <form
        onSubmit={handleSendMessage}
        className="gap-[10px] justify-between h-[76px] flex"
      >
        <input
          type="text"
          value={message} // 입력 필드의 값은 message 상태로 관리됨
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
          className="pl-[20px] w-full placeholder:text-tertiary flex items-center"
          aria-label="메시지 입력"
        />
        <button
          type="submit"
          className="flex items-center"
          aria-label="전송 버튼"
        >
          <img src={send} alt="Send" className="w-[30px] mr-[20px]" />
        </button>
      </form>
    </div>
  );
};

export default ChatPrompt;
