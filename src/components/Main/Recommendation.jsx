import { useEffect } from "react"; // useEffect 추가
import rightArrow from "../../assets/images/rightArrow.svg";
import RecommendationUI from "../../ui/RecommendationUI";
import { MainBestData, MainNewData } from "../../db/MainData";

import useStore from "../../store/store";

// 배열 선택 함수
const getRecommendations = (category) => {
  if (category === "Best") {
    return MainBestData;
  } else {
    return MainNewData;
  }
};

// Recommendation 컴포넌트
const Recommendation = (props) => {
  const { category } = props;

  // category 값에 따라 색상 설정
  const categoryColor = category === "Best" ? "bg-primary" : "bg-secondary";

  // category에 따라 추천 목록 가져오기
  const recommendations = getRecommendations(category);

  // 컴포넌트가 처음 렌더링될 때 'New' 카테고리의 제목을 스토어에 저장
  useEffect(() => {
    if (category === "New") {
      const newTitles = getRecommendations("New").map((item) => item.title);
      useStore.getState().setNewTitles(newTitles);
    }
  }, [category]);

  return (
    <div className="mb-[60px]">
      <div className="flex justify-between">
        <div className="flex items-center gap-[10px]">
          <p
            className={`text-white px-[10px] py-[5px] font-bold ${categoryColor} rounded-[50px]`}
          >
            {category.toUpperCase()}
          </p>
          <span className="text-[20px] text-text">
            {category === "Best" ? "추천하는 방" : "최근에 만들어진 방"}
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-text">MORE</p>
          <img src={rightArrow} alt="Right Arrow" />
        </div>
      </div>
      <div className="flex mt-[20px] gap-[20px] xl:gap-[10px] max-lg:gap-[5px]">
        <div className="flex w-full flex-wrap max-xl:flex-nowrap gap-[20px] 2xl:flex-row max-2xl:flex-col xl:gap-[20px] max-lg:gap-[5px]">
          {recommendations.map((data, index) => (
            <RecommendationUI key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
