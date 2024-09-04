import React, { useEffect } from "react";
import RoomContent from "../../ui/RoomContent";
import { useRoomStore } from "../../store/roomStore";
import { initialDogData } from "../../db/initialDogData";

export default function Answer({ submittedValue }) {
  const { roomData, setRoomData, setMainTitle } = useRoomStore();
  useEffect(() => {
    // 데이터와 제목을 초기화합니다.
    setMainTitle(submittedValue);
    setRoomData(initialDogData); // 초기 데이터를 설정
  }, [submittedValue, setRoomData, setMainTitle]);

  return (
    <>
      {/* 답변 */}
      {roomData.map((data, index) => (
        <RoomContent key={index + 1} {...data} index={index + 1} />
      ))}
    </>
  );
}
