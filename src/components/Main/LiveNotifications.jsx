import { Link } from "react-router-dom";

const LiveNotifications = (props) => {
  const { title } = props;
  // Render the component
  return (
    <>
      <div className="text-text text-[20px] ">
        <div className="border flex items-center rounded-[10px] px-[20px] py-[30px] border-tertiary">
          <span className="flex max-xl:flex-col text-[20px] max-lg:text-[18px] max-sm:text-[14px]">
            <Link to="/MainChat" className="font-bold text-[#495DAC] mr-1">
              {title}{" "}
            </Link>
            <p>채팅룸이 새로 생성되었어요. 참여해보세요!</p>
          </span>
        </div>
      </div>
    </>
  );
};
export default LiveNotifications;
