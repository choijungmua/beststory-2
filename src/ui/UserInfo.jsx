import MainImg2 from "../assets/images/MainImg2.png";

import { useChatShow } from "../store/ChatStore";
import useAuth from "../hooks/useAuth";
const UserInfo = () => {
  const { user } = useAuth();
  const { chatShow, setChatShow } = useChatShow();
  return (
    <div className="relative px-[20px] p-2 h-[84px] max-lg:h-[60px] bg-white rounded-[10px] max-sm:mx-0  border border-tertiary">
      {/* <p className="text-right text-[#99A2C1]">2024.08.01 개설</p> */}

      <div className="flex h-full gap-[10px] justify-between items-center">
        <div className="flex items-center">
          <img
            src={MainImg2}
            className="mr-[3px] w-[22px] border border-tertiary rounded-full"
            alt=""
          />
          <p className="ml-2">{user?.displayName || "Guest"}</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-primary w-[8px] h-[8px] mr-1" />
          <div className="flex gap-[5px]">
            <p className="flex items-center">접속자 5</p>
            <div className="max-lg:inline hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
