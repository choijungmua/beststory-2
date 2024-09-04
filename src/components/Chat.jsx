import UserInfo from "../ui/UserInfo";
import Chatting from "./Main/Chatting";
const Chat = ({ data, id }) => {
  return (
    <div className="flex flex-col max-lg:hidden gap-[25px]">
      <UserInfo name={data.user} />

      <Chatting id={id} />
    </div>
  );
};
export default Chat;
