import { useEffect } from "react"; // useEffect 추가
import rightArrow from "../../assets/images/rightArrow.svg";
import RecommendationUI from "../../ui/RecommendationUI";
import MainImg1 from "../../assets/images/MainImg1.png";
import MainImg2 from "../../assets/images/MainImg2.png";
import MainImg3 from "../../assets/images/MainImg3.png";
import MainImg4 from "../../assets/images/MainImg4.png";
import NewImg1 from "../../assets/images/NewImg1.png";
import NewImg2 from "../../assets/images/NewImg2.png";
import NewImg3 from "../../assets/images/NewImg3.png";
import NewImg4 from "../../assets/images/NewImg4.png";
import useStore from "../../store/store";

// 배열 선택 함수
const getRecommendations = (category) => {
  if (category === "Best") {
    return [
      {
        title: "유럽의 숨겨진 보석: 아직 알려지지 않은 여행지",
        image: MainImg4,
        userName: "jkjk0192",
        userImg: MainImg1,
        tags: ["여행", "휴식", "취미"],
        participants: 5,
        lastActive: "방금",
      },
      {
        title: "여름에 갖고 있으면 좋을 여름 필수 아이템",
        image: MainImg1,
        userName: "01q64won",
        userImg: MainImg2,
        tags: ["생활", "휴식"],
        participants: 22,
        lastActive: "2시간",
      },
      {
        title: "인사이드 아웃3에서 가장 원하는 감정 캐릭터는?",
        image: MainImg2,
        userName: "D1zn10903",
        userImg: MainImg3,
        tags: ["애니메이션", "심리", "만화"],
        participants: 615,
        lastActive: "방금",
      },
      {
        title: "메이크업 아티스트들이 추천하는 가성비 화장품",
        image: MainImg3,
        userName: "lim_younaaa",
        userImg: MainImg4,
        tags: ["뷰티", "생활"],
        participants: 8,
        lastActive: "1시간",
      },
    ];
  } else {
    return [
      {
        title: "2024년 주목할 IT 기술",
        image: NewImg1,
        userName: "rucifer_0",
        userImg: NewImg4,
        tags: ["IT", "기술", "2024"],
        participants: 10,
        lastActive: "10분",
      },
      {
        title: "현대 정치사의 가장 영향력 있는 리더",
        image: NewImg2,
        userName: "99nim_ii",
        userImg: NewImg3,
        tags: ["정치", "역사"],
        participants: 3,
        lastActive: "12시간",
      },
      {
        title: "최고의 개 품종",
        image: NewImg3,
        userName: "TangTang_abc",
        userImg: NewImg2,
        tags: ["강아지", "반려동물"],
        participants: 10,
        lastActive: "50분",
      },
      {
        title: "내 고양이 이름은?",
        image: NewImg4,
        userName: "고먐미111",
        userImg: NewImg1,
        tags: ["고양이", "반려동물"],
        participants: 3,
        lastActive: "12시간",
      },
    ];
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
