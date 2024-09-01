import { Link } from "react-router-dom";

import { useEffect } from "react";
import useRoomStore from "../store/roomStore";
import Travel1 from "../assets/images/Travel1.png";
import Travel2 from "../assets/images/Travel2.png";
import Travel3 from "../assets/images/Travel3.png";
import Travel4 from "../assets/images/Travel4.png";
import Travel5 from "../assets/images/Travel5.png";
const RecommendationUI = ({
  title,
  image,
  userName,
  tags,
  participants,
  lastActive,
  userImg,
}) => {
  const { roomData, setRoomData, setMainTitle } = useRoomStore();
  useEffect(() => {
    // 데이터를 초기화하는 예시
    setMainTitle("유럽의 숨겨진 보석: 아직 알려지지 않은 여행지");
    const initialDogData = [
      {
        title: "알바니아, 베라트",
        image: Travel1,
        content: `"천 창문 도시"로 불리는 베라트는 아름다운 오스만 건축과 중세의 매력을 간직한 작은 마을입니다.`,
        like: "21",
      },
      {
        title: "슬로베니아, 피란",
        image: Travel2,
        content:
          "아드리아 해를 마주한 작고 조용한 해안 도시 피란은 중세의 매력과 베네치아 스타일의 건축이 어우러져 있습니다.",
        like: "15",
      },
      {
        title: "폴란드, 자코파네",
        image: Travel3,
        content:
          "타트라 산맥 아래 위치한 자코파네는 자연 애호가들에게 완벽한 등산지이자 겨울 스포츠의 천국입니다.",
        like: "10",
      },
      {
        title: "루마니아, 시기쇼아라",
        image: Travel4,
        content:
          "중세 성곽 도시 시기쇼아라는 드라큘라의 전설로 유명하며, 유네스코 세계문화유산으로 지정된 아름다운 건축물을 자랑합니다.",
        like: "7",
      },
      {
        title: "포르투갈, 오비두스",
        image: Travel5,
        content:
          "고대 성벽에 둘러싸인 오비두스는 포르투갈의 숨겨진 로맨틱한 마을로, 돌로 된 좁은 골목과 전통적인 흰 벽 집들이 매력적입니다.`",
        like: "2",
      },
    ];

    setRoomData(initialDogData); // 초기 데이터를 설정
  }, [setRoomData]);

  // Render the component
  return (
    <>
      <div className="w-[49%] max-sm:h-[123px] max-2xl:w-full overflow-hidden flex mt-[20px] h-[210px] rounded-[10px] border border-tertiary">
        <div className="w-[180px] flex-shrink-0 justify-center items-center max-sm:w-[97px]">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Travel"
          />
        </div>
        <div className="mx-[20px] flex-1 max-sm:mx-[15px] flex flex-col justify-center">
          <Link
            to="/MainChat"
            className="w-full font-bold text-[20px] max-sm:text-[16px] text-text flex flex-wrap max-sm:w-[250px]"
          >
            {title}
          </Link>

          <div className="flex font-bold text-[14px] gap-[5px] mt-[5px] whitespace-nowrap">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="rounded-[50px] flex items-center px-[25px] h-[40px] border max-sm:px-[15px] border-tertiary max-sm:h-[30px]"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="flex gap-[8px] mt-[30px] flex-wrap text-[14px] max-sm:text-[12px] max-sm:mt-[10px] text-text">
            <div className="flex items-center gap-[4px]">
              <img
                src={userImg}
                className="w-[22px] rounded-full"
                alt={userName}
              />
              <p>{userName}</p>
            </div>
            <div className="flex items-center gap-[3px]">
              <div className="rounded-full w-[8px] h-[8px] bg-[#495DAC]" />
              접속자 {participants}
            </div>
            <div className="flex items-center gap-[3px]">
              <div className="rounded-full w-[8px] h-[8px] bg-tertiary" />
              {lastActive}전
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecommendationUI;
