// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

// Define class names as constants
const CONTAINER_CLASS =
  "px-[20px] pt-[20px] max-sm:p-0 flex items-center gap-[20px]";
const IMAGE_CLASS =
  "w-[160px] h-[160px] max-sm:w-[100px] max-sm:h-[100px] rounded-[5px]";
const TEXT_CONTAINER_CLASS =
  "text-[30px] max-sm:text-[20px] font-bold text-text flex gap-[20px]";
const CONTENT_WRAPPER_CLASS = "flex gap-[20px]";
const CONTENT_CLASS = "flex w-full h-full flex-col gap-[20px]";
const TITLE_CLASS = "";
const CONTENT_TEXT_CLASS = "text-[14px] max-sm:text-[12px] font-normal";

const RoomContent = ({ title, image, content, index }) => {
  const truncatedContent = truncateText(content, 80); // Adjust the maxLength as needed

  return (
    <div className={CONTAINER_CLASS}>
      <img src={image} alt="Room content" className={IMAGE_CLASS} />
      <div className={TEXT_CONTAINER_CLASS}>
        <p>{index}</p>
        <div className={CONTENT_WRAPPER_CLASS}>
          <div className={CONTENT_CLASS}>
            <p className={TITLE_CLASS}>{title}</p>
            <p className={CONTENT_TEXT_CLASS}>{truncatedContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomContent;
