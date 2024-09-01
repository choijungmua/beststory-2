const SelectTag = ({ categoryArray }) => {
  const selectedTags = ["여행", "휴식", "취미"];
  return (
    <div className="flex flex-wrap gap-[10px] text-white mb-[20px]">
      {categoryArray.map((item, index) => (
        <p
          key={index}
          className="flex font-bold  whitespace-nowrap items-center rounded-[50px] bg-primary px-[25px] max-sm:text-[14px] max-sm:h-[30px] h-[40px]"
        >
          {item}
        </p>
      ))}
    </div>
  );
};
export default SelectTag;
