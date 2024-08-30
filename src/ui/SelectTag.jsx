const SelectTag = () => {
  const items = ["여행", "휴식", "취미"];
  return (
    <div className="flex gap-[10px] text-white mb-[20px]">
      {items.map((item, index) => (
        <p
          key={index}
          className="flex font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]"
        >
          {item}
        </p>
      ))}
    </div>
  );
};
export default SelectTag;
