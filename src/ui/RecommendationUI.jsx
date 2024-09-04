import { Link } from "react-router-dom";
import Travel1 from "../assets/images/Travel1.png"; // 필요 없는 import 제거

// 경과된 시간을 계산하는 함수
const getElapsedTime = (timestamp) => {
  const now = new Date();
  const timeStampDate = timestamp.toDate(); // Firestore Timestamp 객체를 JavaScript Date 객체로 변환

  const diffInMinutes = Math.floor((now - timeStampDate) / 60000); // 밀리초를 분으로 변환

  if (diffInMinutes < 1) {
    return "방금 전"; // 1분 미만
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`; // 1분 이상 60분 미만
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}시간 전`; // 1시간 이상 24시간 미만
  } else {
    return `${Math.floor(diffInMinutes / 1440)}일 전`; // 24시간 이상
  }
};

const RecommendationUI = ({ id, title, timestamp, user, content }) => {
  return (
    <div className="w-[49%] max-sm:h-[123px] max-2xl:w-full overflow-hidden flex mt-[20px] h-[210px] rounded-[10px] border border-tertiary">
      <div className="w-[180px] flex-shrink-0 justify-center items-center max-sm:w-[97px]">
        <img
          src={content[0]?.image || Travel1} // 기본 이미지 사용
          className="w-full h-full object-cover"
          alt={title}
        />
      </div>
      <div className="mx-[20px] flex-1 max-sm:mx-[15px] flex flex-col justify-center">
        <Link
          to={`/mainchat/${id}`}
          className="w-full font-bold text-[20px] max-sm:text-[16px] text-text flex flex-wrap max-sm:w-[250px]"
        >
          {title}
        </Link>

        <div className="flex gap-[8px] mt-[30px] flex-wrap text-[14px] max-sm:text-[12px] max-sm:mt-[10px] text-text">
          <div className="flex items-center gap-[4px]">
            <img
              src={content[0]?.userImage || Travel1} // 사용자 이미지 기본값 설정
              className="w-[22px] rounded-full"
              alt={user || "Unknown User"}
            />
            <p>{user || "Unknown User"}</p>
          </div>
          <div className="flex items-center gap-[3px]">
            <div className="rounded-full w-[8px] h-[8px] bg-[#495DAC]" />
            접속자
          </div>
          <div className="flex items-center gap-[3px]">
            <div className="rounded-full w-[8px] h-[8px] bg-gray-500" />
            {getElapsedTime(timestamp)} {/* 경과된 시간 표시 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationUI;
