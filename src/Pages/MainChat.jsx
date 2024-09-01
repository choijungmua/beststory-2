import Chat from "../components/Chat";
import Contents from "../components/Main/Contents";
import { useChatShow } from "../store/ChatStore";

const MainChat = () => {
  const { chatShow } = useChatShow();
  return (
    <section className="bg-bgColor flex ">
      <div className="mx-[260px] max-lg:gap-0 pt-[20px] flex gap-[25px] max-2xl:mx-[50px] max-lg:mx-[10px] max-sm:mx-0">
        <Contents />

        <Chat chatShow={chatShow} />
      </div>
    </section>
  );
};

export default MainChat;
