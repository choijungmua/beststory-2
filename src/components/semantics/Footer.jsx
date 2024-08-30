import mainGrayLogo from "../../assets/images/mainGrayLogo.svg"
const Footer = () => {
    return(
        <footer className="text-[#8B8B8B] w-[100%] h-[184px] bg-[#D9D9D9] 2xl:block xl:hidden lg:hidden md:hidden sm:hidden max-sm:hidden ">
            <div className="mx-[260px]">
                <span className="flex font-bold text-[30px] pt-[25px]">

                <img src={mainGrayLogo} className="w-[26px] ml-2" alt="" />
                <p>베스트스토리</p>
                </span>

<div className="mt-[24px] leading-[1]">

                <p className="">Softway Inc.</p>
                <p>softway@softway.co.kr</p>
                <span className="flex">

                <p>C-809, 161-8 Magokjungang-ro, Gangseo-gu, Seoul, Republic of Korea</p>
            <p className="absolute right-[215px]">Copyright © 2024 Softway | Powered by Softway</p>
                </span>
</div>
            </div>
        </footer>
    )}
export default Footer;
