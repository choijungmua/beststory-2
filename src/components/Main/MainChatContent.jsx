import FillMainLogo from "../../assets/images/FillMainLogo.svg";
const MainChatContent = ({ title, image, content, index, like }) => {
  return (
    <>
      {/* 메인 콘텐츠 */}

      <div className="px-[20px] relative pt-[20px] w-full flex gap-[50px]  ">
        <div className="flex items-center gap-[20px]">
          <img
            src={image}
            alt=""
            className="w-[160px] h-[160px] rounded-[5px] max-sm:w-[100px] max-sm:h-[138px]"
          />
          <div className="flex max-lg:flex-col max-lg:items-start gap-[10px] ">
            <div className="text-[30px] w-full mr-[60px] font-bold text-text flex gap-[10px]">
              <p>{index}</p>
              <div className="flex w-full items-center">
                <div className="gap-[10px] w-full flex flex-col">
                  <p>{title}</p>
                  <p className="text-[16px] w-full font-normal">{content}</p>
                </div>
              </div>
            </div>

            {like !== null && (
              <div className="flex-col max-lg:flex-row max-lg:gap-[10px] flex justify-center absolute max-lg:static right-[20px] items-center">
                <div className="w-[43px] h-[43px] max-sm:w-[30px] max-sm:h-[30px]">
                  <img src={FillMainLogo} alt="Main logo" />
                </div>
                <p className="font-bold text-primary text-[30px] max-sm:text-[26px]">
                  {like}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainChatContent;
