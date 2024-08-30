import MainImg3 from "../assets/images/MainImg3.png";
import TripImg from "../assets/images/TripImg.png";
const ChatBox = () => {
  return (
    <div className="flex gap-[8px]">
      <img src={MainImg3} alt="" className="w-[41px] h-[41px] rounded-full" />
      <div className="flex flex-col my-[5px] text-text">
        {/* ID, 시간 */}
        <span className="flex mb-[10px]">
          <p>qwgeravds</p>
          <p className="mx-[5px]">·</p>
          <p className="text-[#99A2C1]">오전 11:32</p>
        </span>
        {/* Contents */}

        <p>여기 좋아용..</p>
        <p className="text-primary">https://www.myrealtrip.com/offers/27491</p>
        <img
          src={TripImg}
          alt=""
          className="w-[183px] h-[165px] rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default ChatBox;
