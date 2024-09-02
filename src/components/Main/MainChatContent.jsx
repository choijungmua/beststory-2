import FillMainLogo from "../../assets/images/FillMainLogo.svg";

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const CONTAINER_CLASS = "px-[20px] relative pt-[20px] w-full flex gap-[50px]";
const IMAGE_CONTAINER_CLASS = "flex items-center gap-[20px]";
const IMAGE_CLASS =
  "w-[160px] h-[160px] rounded-[5px] max-sm:w-[100px] max-sm:h-[138px]";
const TEXT_CONTAINER_CLASS =
  "flex max-lg:flex-col max-lg:items-start gap-[10px]";
const TITLE_CLASS =
  "text-[30px] w-full mr-[60px] font-bold text-text flex gap-[10px]";
const CONTENT_WRAPPER_CLASS = "flex w-full items-center";
const CONTENT_CLASS = "gap-[10px] w-full flex flex-col";
const CONTENT_TEXT_CLASS = "text-[16px] w-full font-normal";
const LIKE_CONTAINER_CLASS =
  "flex-col max-lg:flex-row max-lg:gap-[10px] flex justify-center absolute max-lg:static right-[20px] items-center";
const LIKE_IMAGE_CLASS = "w-[43px] h-[43px] max-sm:w-[30px] max-sm:h-[30px]";
const LIKE_TEXT_CLASS = "font-bold text-primary text-[30px] max-sm:text-[26px]";

const MainChatContent = ({ title, image, content, index, like }) => {
  const truncatedContent = truncateText(content, 80); // Adjust the maxLength as needed

  return (
    <div className={CONTAINER_CLASS}>
      <div className={IMAGE_CONTAINER_CLASS}>
        <img src={image} alt="Chat content" className={IMAGE_CLASS} />
        <div className={TEXT_CONTAINER_CLASS}>
          <div className={TITLE_CLASS}>
            <p>{index}</p>
            <div className={CONTENT_WRAPPER_CLASS}>
              <div className={CONTENT_CLASS}>
                <p>{title}</p>
                <p className={CONTENT_TEXT_CLASS}>{truncatedContent}</p>
              </div>
            </div>
          </div>
          {like !== null && (
            <div className={LIKE_CONTAINER_CLASS}>
              <div className={LIKE_IMAGE_CLASS}>
                <img src={FillMainLogo} alt="Main logo" />
              </div>
              <p className={LIKE_TEXT_CLASS}>{like}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainChatContent;
