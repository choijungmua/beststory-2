import rightArrow from "../../assets/images/rightArrow.svg"
import RecommendationUI from "../../ui/RecommendationUI";
import MainImg1 from "../../assets/images/MainImg1.png"
import MainImg2 from "../../assets/images/MainImg2.png"
import MainImg3 from "../../assets/images/MainImg3.png"
import MainImg4 from "../../assets/images/MainImg4.png"


const Recommendation = () => {


  // 추천하는 방
  const recommendations = [
    {
      title: "유럽의 숨겨진 보석: 아직 알려지지 않은 여행지",
      image: MainImg4,
      userName: "jkjk0192",
      userImg: MainImg1,
      tags: ["여행", "휴식", "취미"],
      participants: 5,
      lastActive: "방금"
    },
    {
      title: "여름에 갖고 있으면 좋을 여름 필수 아이템",
      image: MainImg1,
      userName: "01q64won",
      userImg: MainImg2,
      tags: ["생활", "휴식"],
      participants: 22,
      lastActive: "2시간"
    },
    {
      title: "인사이드 아웃3에서 가장 원하는 감정 캐릭터는?",
      image: MainImg2,
      userName: "D1zn10903",
      userImg: MainImg3,
      tags: ["애니메이션", "심리", "만화"],
      participants: 615,
      lastActive: "방금"
    },
    {
      title: "메이크업 아티스트들이 추천하는 가성비 화장품",
      image: MainImg3,
      userName: "lim_younaaa",
      userImg: MainImg4,
      tags: ["뷰티", "생활"],
      participants: 8,
      lastActive: "1시간 전 대화"
    },
  ];
  return (
    <div className="mb-[60px]">
<div className="flex justify-between">
<div className="flex items-center gap-[10px]">
    <p className="text-white px-[10px] py-[5px] font-bold bg-primary rounded-[50px]">
        BEST
    </p>
    <span className="text-[20px] text-[#323543]">추천하는 방</span>
</div>
<div className="flex items-center gap-[10px]">
    <p className="text-[#323543]">MORE</p>
        <img src={rightArrow} alt="" />
</div>
</div>
<div className="flex  mt-[20px] gap-[20px] xl:gap-[10px] max-lg:gap-[5px]">
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
