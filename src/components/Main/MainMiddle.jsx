import Recommendation from "./Recommendation";
import addChat from "../../assets/images/addChat.svg";
import LiveNotifications from "./LiveNotifications";
import { Link } from "react-router-dom";
import useStore from "../../store/store";

const SECTION_CLASS =
  "my-[30px] mx-[260px] mb-[135px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]";
const HEADER_CONTAINER_CLASS = "justify-between flex mb-[50px]";
const HEADER_TEXT_CLASS = "text-text text-[36px] max-sm:text-[30px]";
const LINK_CLASS =
  "flex bg-primary max-sm:w-[120px] max-sm:h-[40px] max-sm:p-0 text-[20px] max-sm:text-[16px] px-[20px] py-[10px] gap-[10px] justify-center items-center rounded-[10px] text-white";
const LINK_IMAGE_CLASS = "w-[33px] h-[33px] max-sm:w-[22px] max-sm:h-[22px]";
const ALERT_TEXT_CLASS =
  "mt-[65px] mb-[25px] text-text text-[20px] max-lg:mt-[40px]";
const NOTIFICATIONS_CONTAINER_CLASS = "flex flex-col gap-[15px] lg:gap-[10px]";

const MainMiddle = () => {
  // Extract the array of titles from the store
  const newTitles = useStore((state) => state.newTitles);

  return (
    <section className={SECTION_CLASS}>
      {/* 방만들기 */}
      <div className={HEADER_CONTAINER_CLASS}>
        <p className={HEADER_TEXT_CLASS}>510개의 방</p>
        <Link to="/Room" className={LINK_CLASS}>
          <img src={addChat} alt="addChat" className={LINK_IMAGE_CLASS} />방
          만들기
        </Link>
      </div>
      <Recommendation category="Best" />
      <Recommendation category="New" />
      <div className={ALERT_TEXT_CLASS}>
        <p>실시간 알림</p>
      </div>
      <div className={NOTIFICATIONS_CONTAINER_CLASS}>
        {newTitles.map((title, index) => (
          <LiveNotifications key={index} title={title} />
        ))}
      </div>
    </section>
  );
};

export default MainMiddle;
