import Recommendation from "./Recommendation";
import addChat from "../../assets/images/addChat.svg";
import LiveNotifications from "./LiveNotifications";
import { Link } from "react-router-dom";
import useStore from "../../store/store";

const MainMiddle = () => {
  // Extract the array of titles from the store
  const newTitles = useStore((state) => state.newTitles);
  return (
    <section className="my-[30px] mx-[260px] mb-[135px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]">
      {/* 방만들기 */}
      <div className="justify-between flex mb-[50px]">
        <p className="text-text text-[36px] max-sm:text-[30px]">510개의 방</p>
        <Link
          to="/Room"
          className="flex bg-primary max-sm:w-[120px] max-sm:h-[40px] max-sm:p-0 text-[20px] max-sm:text-[16px] px-[20px] py-[10px] gap-[10px] justify-center items-center rounded-[10px] text-white "
        >
          <img
            src={addChat}
            alt="addChat"
            className="w-[33px] h-[33px] max-sm:w-[22px] max-sm:h-[22px]"
          />
          방 만들기
        </Link>
      </div>
      <Recommendation category="Best" />
      <Recommendation category="New" />
      <div className="mt-[65px] mb-[25px] text-text text-[20px] max-lg:mt-[40px]">
        <p>실시간 알림</p>
      </div>
      <div className="flex flex-col gap-[15px] lg:gap-[10px]">
        {newTitles.map((title, index) => (
          <LiveNotifications key={index} title={title} />
        ))}
      </div>
    </section>
  );
};

export default MainMiddle;
