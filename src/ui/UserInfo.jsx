import MainImg2 from "../assets/images/MainImg2.png";
const UserInfo = () => {
  return (
    <div className="relative px-[20px]  py-[30px] bg-white rounded-[10px] border border-tertiary">
      {/* <p className="text-right text-[#99A2C1]">2024.08.01 개설</p> */}

      <div className="  flex justify-between ">
        <div className="flex">
          <img
            src={MainImg2}
            className="mr-[3px] w-[22px] border border-tertiary rounded-full"
            alt=""
          />
          <p>jkjk0192</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-primary w-[8px] h-[8px] mr-1" />
          <p>접속자 5</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
