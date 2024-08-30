import dog from "../assets/images/dog.png"


const RoomContent = () => {
    return(

<>

<div className="px-[20px] pt-[20px]  flex items-center gap-[20px]">
<img src={dog} alt="" className="w-[160px] h-[160px] rounded-[5px]" />
<div className="text-[30px] font-bold text-[#323543] flex gap-[5px]">
<p>1</p>
<div className="flex gap-[20px]">

<div className="flex flex-col gap-[20px]">
    <p>저먼 셰퍼드</p>
    <p className="text-[14px] font-normal">저먼 셰퍼드는 독일에서 유래된 중형에서 대형의 작업견 품종입니다. 이 품종의 공식 명칭은 영어로 저먼 셰퍼드 독입니다. 이 품종은 영국과 아일랜드에서 알사시안으로 알려져 있습니다.</p>
</div>
</div>
</div>
</div>


</>
    )
}

export default RoomContent;