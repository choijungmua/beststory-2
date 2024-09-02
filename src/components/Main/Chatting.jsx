import { useEffect, useRef } from "react";
import ChatGrayBox from "../../ui/ChatGrayBox";
import OtherChat from "../../ui/OtherChat";
import ChatPrompt from "../../ui/ChatPrompt";
import MyChat from "../../ui/MyChat";
import { useChatting } from "../../store/ChatStore";

const CONTAINER_CLASS =
  "w-[450px] max-lg:w-full overflow-hidden bg-white rounded-[10px] border border-tertiary";
const CHAT_LIST_CLASS =
  "w-full overflow-y-auto overflow-x-hidden h-[50vh] max-sm:h-[50vh] max-lg:h-[80vh] py-[10px] flex flex-col gap-[15px] px-[20px]";

const Chatting = () => {
  const { chatting } = useChatting();

  // 스크롤을 제어하기 위한 ref
  const chatContainerRef = useRef(null);

  // chatting 배열이 업데이트될 때마다 스크롤을 맨 아래로 내림
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatting]); // chatting 배열이 업데이트될 때마다 실행

  return (
    <div className={CONTAINER_CLASS}>
      <div
        ref={chatContainerRef} // chatContainerRef를 채팅 리스트 컨테이너에 연결
        className={CHAT_LIST_CLASS}
      >
        <ChatGrayBox message="채팅이 시작되었습니다." />

        {chatting.map((chat, index) =>
          chat.isMine ? (
            <MyChat key={index} message={chat.message} img={chat.img} />
          ) : (
            <OtherChat key={index} message={chat.message} />
          )
        )}
      </div>
      <ChatPrompt />
    </div>
  );
};

export default Chatting;
