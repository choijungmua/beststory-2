const ChatGrayBox = ({ message }) => {
  return (
    <>
      <span className="flex rounded-[10px] text-[12px] text-[#99A2C1] p-[5px] bg-[#F3F3F3]">
        <p className="font-bold mr-1">{message} </p>
        {/* <p>에 투표했습니다</p> */}
        {/* <p className="font-bold mx-1 text-text">·</p> */}
        <p>오전 10:15</p>
      </span>
    </>
  );
};

export default ChatGrayBox;
