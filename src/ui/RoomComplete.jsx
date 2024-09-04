import React from "react";
import refresh from "../assets/images/refresh.svg";
import addChat from "../assets/images/addChat.svg";
import { Link } from "react-router-dom";

const RoomComplete = ({ documentId, onReset }) => {
  return (
    <div className="w-full">
      <div className="gap-[10px] text-[20px] h-[76px] text-white flex">
        <button
          className="flex items-center flex-3 gap-[10px] bg-[#8899DA] px-[15px] whitespace-nowrap justify-center py-[10px] rounded-[10px]"
          onClick={onReset} // Reset 함수 호출
        >
          <img src={refresh} alt="Refresh icon" className="w-[24px]" />
          <p>다시 추천 받기</p>
        </button>

        <Link
          to={`/mainchat/${documentId}`}
          className="bg-primary flex-1 rounded-[10px] gap-[10px] px-[20px] py-[10px] justify-center flex items-center"
        >
          <img src={addChat} alt="Add chat icon" className="w-[33px]" />
          <p>방 만들기</p>
        </Link>
      </div>
    </div>
  );
};

export default RoomComplete;
