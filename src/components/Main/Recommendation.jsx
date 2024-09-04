import { useEffect, useState } from "react";
import rightArrow from "../../assets/images/rightArrow.svg";
import RecommendationUI from "../../ui/RecommendationUI";
import { db } from "../../firebase-config"; // Firestore 설정 파일
import { collection, getDocs } from "firebase/firestore";
import useStore from "../../store/store";
import { usePostState } from "../../store/PostStateStore";

// Constants for categories
const CATEGORIES = {
  BEST: "Best",
  NEW: "New",
  ALL: "All",
  BOOK: "Book",
};

// 스타일 상수
const STYLES = {
  container: "mb-[60px]",
  header: "flex justify-between",
  headerText: "flex items-center gap-[10px]",
  categoryTag: "text-white px-[10px] py-[5px] font-bold rounded-[50px]",
  categoryBest: "bg-primary",
  categoryNew: "bg-secondary",
  categoryAll: "bg-red-400",
  categoryBook: "bg-blue-400",
  description: "text-[20px] text-text",
  more: "text-text",
  recommendations: "flex mt-[20px] gap-[20px] xl:gap-[10px] max-lg:gap-[5px]",
  itemsContainer:
    "flex w-full flex-wrap max-xl:flex-nowrap gap-[20px] 2xl:flex-row max-2xl:flex-col xl:gap-[20px] max-lg:gap-[5px]",
};

const Recommendation = ({ category }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postState, setPostState } = usePostState();
  const [showMore, setShowMore] = useState(false);

  // 메인페이지의 방 목록 변경
  const handleMoreNameChange = () => {
    setShowMore((prev) => {
      const newState = !prev ? `${category}List` : "";
      setPostState(newState);
      return !prev;
    });
  };

  // category 값에 따라 색상 설정
  const categoryColor =
    {
      [CATEGORIES.BEST]: STYLES.categoryBest,
      [CATEGORIES.NEW]: STYLES.categoryNew,
      [CATEGORIES.ALL]: STYLES.categoryAll,
      [CATEGORIES.BOOK]: STYLES.categoryBook,
    }[category] || STYLES.categoryNew;

  // Firestore에서 추천 목록 가져오기
  const fetchRecommendations = async () => {
    try {
      setIsLoading(true);
      const snapshot = await getDocs(collection(db, "responses"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Sort by timestamp before setting state
      const sortedData = data.sort(
        (a, b) => b.timestamp.seconds - a.timestamp.seconds
      );

      setRecommendations(sortedData);
    } catch (error) {
      console.error("Firestore 데이터 불러오기 오류:", error);
      setError("데이터를 불러오는 데 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [category]);

  useEffect(() => {
    if (category === CATEGORIES.NEW) {
      const newTitles = recommendations.map((item) => item.title);
      useStore.getState().setNewTitles(newTitles);
    }
  }, [recommendations, category]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  if (error) return <div className="text-red-500">{error}</div>;

  // recommendations 배열에서 최대 4개 항목만 추출
  const limitedRecommendations = recommendations.slice(0, 4);

  // 조건에 따라 출력할 데이터 결정
  const displayRecommendations =
    ["BestList", "NewList", "AllList", "BookMarkList"].includes(postState) ||
    category === CATEGORIES.BOOK
      ? recommendations
      : limitedRecommendations;

  return (
    <div className={STYLES.container}>
      <div className={STYLES.header}>
        <div className={STYLES.headerText}>
          <p className={`${STYLES.categoryTag} ${categoryColor}`}>
            {category.toUpperCase()}
          </p>
          <span className={STYLES.description}>
            {category === CATEGORIES.BEST && "추천하는 방"}
            {category === CATEGORIES.NEW && "최근에 만들어진 방"}
            {category === CATEGORIES.ALL && "모든 방"}
            {category === CATEGORIES.BOOK && "북마크한 방"}
          </span>
        </div>
        {category !== CATEGORIES.ALL && category !== CATEGORIES.BOOK && (
          <div
            onClick={handleMoreNameChange}
            className="flex items-center gap-[10px] cursor-pointer"
          >
            <p className={STYLES.more}>MORE</p>
            <img src={rightArrow} alt="Right Arrow" />
          </div>
        )}
      </div>
      <div className={STYLES.recommendations}>
        <div className={STYLES.itemsContainer}>
          {displayRecommendations.map((data) => (
            <RecommendationUI key={data.id} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
