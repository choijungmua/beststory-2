import { useState, useRef, useEffect } from "react";
import { useChatting } from "../../store/ChatStore";
import ChatGrayBox from "../../ui/ChatGrayBox";
import OtherChat from "../../ui/OtherChat";
import ChatPrompt from "../../ui/ChatPrompt";
import MyChat from "../../ui/MyChat";
import useUserStore from "../../store/Auth";
import useFormatTimestamp from "../../hooks/useFormatTimestamp"; // Import the custom hook

const CONTAINER_CLASS =
  "w-[450px] max-lg:w-full overflow-hidden bg-white rounded-[10px] border border-tertiary";
const CHAT_LIST_CLASS =
  "w-full overflow-y-auto overflow-x-hidden h-[50vh] max-sm:h-[50vh] max-lg:h-[80vh] py-[10px] flex flex-col gap-[15px] px-[20px]";

const Chatting = ({ id }) => {
  // Accept roomId as a prop
  const { user } = useUserStore();
  const { chatting, sendMessage, fetchMessages } = useChatting();
  const [message, setMessage] = useState("");
  const userId = user?.displayName || "";

  const chatContainerRef = useRef(null);
  const { formatTimestamp } = useFormatTimestamp(); // Use the custom hook

  useEffect(() => {
    if (id) {
      const unsubscribe = fetchMessages(id); // Pass roomId to fetchMessages
      return () => unsubscribe(); // Unsubscribe on component unmount
    }
  }, [fetchMessages, id]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatting]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(id, userId, message); // Pass roomId to sendMessage
      setMessage(""); // Clear the message input field
    }
  };

  // 채팅을 순서대로 sort하기
  const sortedChatting = [...chatting].sort((a, b) => {
    if (a.timestamp && b.timestamp) {
      return a.timestamp.seconds - b.timestamp.seconds;
    }
    return 0;
  });

  return (
    <div className={CONTAINER_CLASS}>
      <div ref={chatContainerRef} className={CHAT_LIST_CLASS}>
        <ChatGrayBox message="채팅이 시작되었습니다." />

        <div className="flex flex-col">
          {sortedChatting.map((chat, index) => {
            const formattedTime = formatTimestamp(chat.timestamp);
            return chat.userId === userId ? (
              <MyChat
                key={index}
                userId={chat.userId}
                message={chat.message}
                img={user.photoURL}
                Time={formattedTime}
              />
            ) : (
              <OtherChat
                key={index}
                userId={chat.userId}
                message={chat.message}
                img={chat.img}
                Time={formattedTime}
              />
            );
          })}
        </div>
      </div>
      <ChatPrompt
        handleSendMessage={handleSendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Chatting;
