import send from "../assets/images/send.svg";
import useInput from "../hooks/useInput";
import { useChatting } from "../store/ChatStore";

const ChatPrompt = () => {
  const { chatting, setChatting } = useChatting();

  // useInput 훅을 사용하여 입력 필드의 상태 관리
  const chatInput = useInput(""); // 초기값은 빈 문자열

  const handleSubmit = (e) => {
    e.preventDefault();

    if (chatInput.value.trim() === "") {
      // 메시지가 비어있으면 전송하지 않음
      return;
    }

    // 새로운 메시지를 현재 chatting 배열에 추가
    setChatting([
      ...chatting,
      { isMine: true, message: chatInput.value, image: null },
    ]);

    // 필요한 경우, 제출 후 입력 필드를 비울 수 있음
    chatInput.onChange({ target: { value: "" } }); // 입력 필드 비우기
  };

  return (
    <div className="w-full border-t bg-white border-tertiary">
      <form
        onSubmit={handleSubmit}
        className="gap-[10px] justify-between h-[76px] flex"
      >
        <input
          type="text"
          value={chatInput.value} // 입력 필드의 값은 chatInput.value
          onChange={chatInput.onChange} // 입력 값이 변경되면 chatInput.onChange 호출
          placeholder="메시지를 입력하세요"
          className="pl-[20px] w-full placeholder:text-tertiary flex items-center"
        />
        <button type="submit" className="flex items-center">
          <img src={send} alt="Send" className="w-[30px] mr-[20px]" />
        </button>
      </form>
    </div>
  );
};

export default ChatPrompt;
