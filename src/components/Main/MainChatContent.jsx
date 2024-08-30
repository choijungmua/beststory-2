import thinBookMark from "../../assets/images/thinBookMark.svg"
import MainImg2 from "../../assets/images/MainImg2.png"
import FillMainLogo from "../../assets/images/FillMainLogo.svg"
const MainChatContent = () => {
    return(

<>
        {/* 메인 콘텐츠 */}

            <div className="px-[20px] pt-[20px]  flex items-center gap-[20px]">
                <img src={MainImg2} alt="" className="w-[160px] h-[160px] rounded-[5px]" />
                <div className="text-[30px] font-bold text-[#323543] flex gap-[5px]">
                <p>1</p>
                <div className="flex gap-[20px]">

                <div className="gap-[20px]">
                    <p>알바니아, 베라트</p>
                    <p className="text-[16px] font-normal">"천 창문 도시"로 불리는 베라트는 아름다운 오스만 건축과 중세의 매력을 간직한 작은 마을입니다.</p>
                </div>
                <div className="flex-col flex items-center">

                <img src={FillMainLogo} alt="" className="w-[43px]" />
                <p className="font-bold text-primary">21</p>
                </div>
                </div>
                </div>
            </div>

</>
    )
}

export default MainChatContent;