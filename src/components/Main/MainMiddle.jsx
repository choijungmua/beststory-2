import Recommendation from "./Recommendation";
import addChat from "../../assets/images/addChat.svg";
import LiveNotifications from "./LiveNotifications";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { usePostState } from "../../store/PostStateStore";
import { useTranslation } from "react-i18next";

// 스타일 정의
const styles = {
  section:
    "my-[30px] mx-[260px] mb-[135px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]",
  headerContainer: "justify-between flex mb-[50px]",
  headerText: "text-text text-[36px] max-sm:text-[30px] cursor-pointer",
  link: "flex bg-primary max-sm:w-[120px] max-sm:h-[40px] max-sm:p-0 text-[20px] max-sm:text-[16px] px-[20px] py-[10px] gap-[10px] justify-center items-center rounded-[10px] text-white",
  linkImage: "w-[33px] h-[33px] max-sm:w-[22px] max-sm:h-[22px]",
  alertText: "mt-[65px] mb-[25px] text-text text-[20px] max-lg:mt-[40px]",
  notificationsContainer: "flex flex-col gap-[15px] lg:gap-[10px]",
};

const MainMiddle = () => {
  const { t } = useTranslation();
  // Extract the array of titles from the store
  const newTitles = useStore((state) => state.newTitles);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roomLength, setRoomLength] = useState(0);
  const { postState, setPostState } = usePostState();
  const [isBoolPostState, setIsBoolPostState] = useState(false);

  // Firestore에서 데이터 가져오기
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const snapshot = await getDocs(collection(db, "responses"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRoomLength(data.length);
    } catch (error) {
      console.error("Firestore 데이터 불러오기 오류:", error);
      setError(t("error")); // 번역된 에러 메시지 사용
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full">
        {t("loading")}
      </div> // 번역된 로딩 텍스트 사용
    );
  if (error) return <div className="text-red-500">{error}</div>;

  // newTitles의 개수를 5개로 제한
  const limitedNewTitles = newTitles.slice(0, 5);

  // 메인페이지의 방 목록 변경
  const handleMoreNameChange = () => {
    const newState = !isBoolPostState ? "AllList" : "";
    setPostState(newState);
    setIsBoolPostState(!isBoolPostState);
  };

  return (
    <section className={styles.section}>
      {/* 방 만들기 */}
      <div className={styles.headerContainer}>
        <p onClick={handleMoreNameChange} className={styles.headerText}>
          {t("room_count", { count: roomLength })}{" "}
          {/* 번역된 방 개수 텍스트 사용 */}
        </p>
        <Link to="/Room" className={styles.link}>
          <img
            src={addChat}
            alt={t("create_room")}
            className={styles.linkImage}
          />{" "}
          {/* 번역된 alt 텍스트 사용 */}
          {t("create_room")} {/* 번역된 방 만들기 텍스트 사용 */}
        </Link>
      </div>
      {postState === "BookList" && <Recommendation category="Book" />}
      {postState === "AllList" && <Recommendation category="All" />}
      {postState === "" && (
        <>
          <Recommendation category="Best" />
          <Recommendation category="New" />
        </>
      )}
      {postState === "BestList" && <Recommendation category="Best" />}
      {postState === "NewList" && <Recommendation category="New" />}
      <div className={styles.alertText}>
        <p>{t("real_time_notifications")}</p>{" "}
        {/* 번역된 실시간 알림 텍스트 사용 */}
      </div>
      <div className={styles.notificationsContainer}>
        {limitedNewTitles.map((title, index) => (
          <LiveNotifications key={index} title={title} />
        ))}
      </div>
    </section>
  );
};

export default MainMiddle;
