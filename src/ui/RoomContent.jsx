
const RoomContent = ({ title, image, content, index }) => {
    return (
        <div className="px-[20px] pt-[20px] flex items-center gap-[20px]">
            <img src={image} alt="" className="w-[160px] h-[160px] rounded-[5px]" />
            <div className="text-[30px] font-bold text-[#323543] flex gap-[5px]">
                <p>{index}</p>
                <div className="flex gap-[20px]">
                    <div className="flex flex-col gap-[20px]">
                        <p>{title}</p>
                        <p className="text-[14px] font-normal">{content}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomContent;
