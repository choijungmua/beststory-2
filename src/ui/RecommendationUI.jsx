import { Link } from "react-router-dom";
const RecommendationUI = ({ 
  title, 
  image, 
  userName, 
  tags, 
  participants, 
  lastActive,
  userImg
}) => {


  // Render the component
  return (
    <>
  <div className="w-[48%] max-2xl:w-full overflow-hidden flex mt-[20px] h-[210px] rounded-[10px] border border-tertiary">
      <img src={image} className="w-[180px] xl:w-[180px] lg:w-[150px] md:w-[150px] max-sm:w-[150px]" alt="" />
      <div className="w-full px-[20px] xl:px-[20px] lg:px-[10px] md:px-[10px] sm:px-[10px] flex flex-col justify-center">
        <p className="font-bold text-[20px] xl:text-[20px] max-lg:text-[16px] max-md:text-[16px] max-sm:text-[16px] text-[#323543] ">
          <Link to="/MainChat">{title}</Link>
        </p>
          
        <div className="flex gap-[5px] mt-[5px] whitespace-nowrap flex-wrap">
          {tags.map((tag, index) => (
            <p key={index} className="rounded-[50px] flex items-center px-[25px] h-[40px] border border-tertiary xl:px-[25px] lg:px-[20px] md:px-[15px] max-sm:px-[8px] xl-h-[40px] lg-h-[30px] md-h-[30px] max-sm:h-[30px]">
              {tag}
            </p>
          ))}
        </div>
        <div className="flex gap-[8px] mt-[30px] flex-wrap text-[14px] text-[#323543]">
          <div className="flex items-center gap-[4px]">
            <img src={userImg} className="w-[22px] rounded-full" alt={userName} />
            <p>{userName}</p>
          </div>
          <p className="flex items-center gap-[3px]">
            <div className="rounded-full w-[8px] h-[8px] bg-[#495DAC]" />
            접속자 {participants}
          </p>
          <p className="flex items-center gap-[3px]">
            <div className="rounded-full w-[8px] h-[8px] bg-tertiary" />
            {lastActive} 전 대화
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
export default RecommendationUI;
