import search from "../../assets/images/search.svg";
import { categories } from "../../db/categories";
import MoreInfo from "../../assets/images/MoreInfo.svg";
import useIsMobile from "../../hooks/useIsMobile";
import useToggle from "../../hooks/useToggle";
const MainTop = () => {
  const isMobile = useIsMobile(); // 기본 640px을 breakpoint로 사용
  const [isMoreInfo, setIsMoreInfo] = useToggle();
  const displayedCategories = isMobile ? categories.slice(0, 8) : categories;
  return (
    <section className="bg-[#F3F3F3] pt-[25px] pb-[40px] ">
      {/* 검색 필터 */}
      <div className="relative mx-[260px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]">
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-[20px]">
          <div className="bg-white  rounded-[10px] border border-tertiary max-sm:w-full px-[20px] w-[65%] h-[76px] flex gap-[10px]">
            <input
              type="text"
              className="w-full text-[20px] max-sm:text-[16px]"
              placeholder="원하는 주제의 방을 검색해 보세요."
            />
            <img src={search} alt="" className="w-[44px]" />
          </div>
          <p className="cursor-pointer absolute top-[45px] max-sm:static max-sm:right-0 right-[60px] text-[20px]">
            FILTER
          </p>
        </div>
        <div className="flex">
          <ul className="mt-[20px] max-sm:mt-[7px] flex font-bold gap-[5px] flex-wrap">
            {(isMoreInfo ? displayedCategories : categories).map(
              (category, index) => (
                <button
                  className="bg-white flex justify-center items-center border boder-[#D8DEF3] h-[40px] rounded-[50px] px-[25px] py-[10px] xl:text-[16px] max-lg:text-[14px]"
                  key={index}
                >
                  {category}
                </button>
              )
            )}
          </ul>
          <img
            src={MoreInfo}
            alt="MoreInfo"
            onClick={setIsMoreInfo}
            className="right-0 -bottom-6 absolute max-sm:inline hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default MainTop;
