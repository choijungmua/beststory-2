const RoomContent = ({ title, image, content, index }) => {
  return (
    <div className="px-[20px] pt-[20px] max-sm:p-0 flex items-center gap-[20px]">
      <img
        src={image}
        alt=""
        className="w-[160px] h-[160px] max-sm:w-[100px] max-sm:h-[100px] rounded-[5px]"
      />
      <div className="text-[30px] max-sm:text-[20px] font-bold text-text flex gap-[20px]">
        <p>{index}</p>
        <div className="flex gap-[20px]">
          <div className="flex w-full h-full flex-col gap-[20px]">
            <p>{title}</p>
            <p className="text-[14px] max-sm:text-[12px] font-normal">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomContent;
