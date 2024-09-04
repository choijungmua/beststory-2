import MainImg3 from "../assets/images/MainImg3.png";
const OtherChat = ({ message, img, userId, Time }) => {
  return (
    <div className="flex gap-[8px]">
      <div className="flex flex-col my-[5px] text-text">
        {/* ID, 시간 */}
        <span className="flex items-center mb-[10px]">
          <img
            src={MainImg3}
            alt=""
            className="w-[41px] h-[41px] rounded-full"
          />
          <p>{userId}</p>
          <p className="mx-[5px]">·</p>
          <p className="text-[#99A2C1]">{Time}</p>
        </span>
        {/* Contents */}

        <p>{message}</p>
        {!img === null && (
          <>
            <img
              src="https://www.myrealtrip.com/offers/27491"
              alt=""
              className="w-[183px] h-[165px] rounded-[10px]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default OtherChat;
