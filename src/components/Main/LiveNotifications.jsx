import { Link } from "react-router-dom";

const TEXT_CLASS = "text-text text-[20px]";
const CONTAINER_CLASS =
  "border flex items-center rounded-[10px] px-[20px] py-[30px] border-tertiary";
const TEXT_LINK_CLASS =
  "flex max-xl:flex-col text-[20px] max-lg:text-[18px] max-sm:text-[14px]";
const LINK_CLASS = "font-bold text-[#495DAC] mr-1";

const LiveNotifications = (props) => {
  const { title } = props;

  // Render the component
  return (
    <div className={TEXT_CLASS}>
      <div className={CONTAINER_CLASS}>
        <span className={TEXT_LINK_CLASS}>
          <Link to="/MainChat" className={LINK_CLASS}>
            {title}
          </Link>
          <p>채팅룸이 새로 생성되었어요. 참여해보세요!</p>
        </span>
      </div>
    </div>
  );
};

export default LiveNotifications;
