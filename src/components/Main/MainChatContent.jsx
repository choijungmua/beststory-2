import thinBookMark from "../../assets/images/thinBookMark.svg"

import FillMainLogo from "../../assets/images/FillMainLogo.svg"
const MainChatContent = ({ 
    title, 
    image, 
    content, 
    index,
    like,
  }) => {
    return(
<>
        {/* 메인 콘텐츠 */}

            <div className="px-[20px] pt-[20px] w-full flex gap-[50px]  ">
                <div className="flex items-center gap-[20px]">

                <img src={image} alt="" className="w-[160px] h-[160px] rounded-[5px]" />
                <div className="text-[30px] font-bold text-[#323543] flex gap-[10px]">
                <p>{index}</p>
                <div className="flex w-full items-center">

                <div className="gap-[10px] flex flex-col">
                    <p>{title}</p>
                    <p className="text-[16px] font-normal">{content}</p>
                </div>
                </div>
                </div>

{like !== null &&
                <div className="flex-col flex justify-center items-center">


<div className="w-[43px] h-[43px]">

                <img src={FillMainLogo} alt="Main logo" />
</div>
                <p className="font-bold text-primary text-[30px]">{like}</p>
                </div>
}
                </div>
            </div>

</>
    )
}

export default MainChatContent;