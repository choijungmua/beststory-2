import UserInfo from "../ui/UserInfo";
import Chatting from "./Main/Chatting";
const Chat = () => {
  return (
    <div className="flex flex-col max-lg:hidden gap-[25px]">
      <UserInfo />

      <Chatting />
    </div>
  );
};
export default Chat;
