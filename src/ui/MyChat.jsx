import MainImg3 from "../assets/images/MainImg3.png";
import TripImg from "../assets/images/TripImg.png";

const MyChat = ({ message, img, userId, Time }) => {
  return (
    <div className="flex w-full gap-[8px]">
      <div className="flex w-full flex-col my-[5px] justify-center text-text items-end">
        {/* ID, 시간 */}
        <span className="flex items-center mb-[10px]">
          <p>{userId}</p>
          <p className="mx-[5px]">·</p>
          <p className="text-[#99A2C1]">{Time}</p>
          <img src={img} alt="" className="w-[41px] h-[41px] rounded-full" />
        </span>
        {/* Contents */}

        {!img === null && (
          <>
            <img
              src="https://www.myrealtrip.com/offers/27491"
              alt=""
              className="w-[183px] h-[165px] rounded-[10px]"
            />
          </>
        )}
        <p>{message}</p>
      </div>
    </div>
  );
};

export default MyChat;
