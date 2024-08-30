import Recommendation from "./Recommendation";
import addChat from "../../assets/images/addChat.svg";
import LiveNotifications from "./LiveNotifications";
import { Link } from "react-router-dom";
import useStore from "../../store/store";

const MainMiddle = () => {
  // Extract the array of titles from the store
  const newTitles = useStore((state) => state.newTitles);
  console.log(newTitles);
  return (
    <section className="my-[30px] mx-[260px] mb-[135px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]">
      {/* 방만들기 */}
      <div className="justify-between flex mb-[50px]">
        <p className="text-text text-[36px] xl:text-[36px] lg:text-[30px] md:text-[30px] sm:text-[26px]">
          510개의 방
        </p>
        <Link to="/Room">
          <div
            className="flex bg-primary text-[20px] px-[20px] py-[10px] gap-[10px] justify-center items-center rounded-[10px] text-white 
            xl:px-[20px] lg:px-[20px] md:px-[15px] sm:px-[10px]
            xl:py-[10px] lg:py-[10px] md:py-[8px] sm:py-[6px]
            xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[18px]"
          >
            <img src={addChat} alt="" />방 만들기
          </div>
        </Link>
      </div>
      <Recommendation category="Best" />
      <Recommendation category="New" />
      <div className="mt-[65px] mb-[25px] text-text text-[20px] lg:mt-[40px] lg:mb-[15px] lg:text-[16px]">
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
