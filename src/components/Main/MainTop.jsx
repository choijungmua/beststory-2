import search from "../../assets/images/search.svg";
import { categories } from "../../db/categories";
const MainTop = () => {
  return (
    <section className="bg-[#F3F3F3] pt-[25px] pb-[40px] ">
      {/* 검색 필터 */}
      <div className="relative mx-[260px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]">
        <p className="cursor-pointer absolute top-[45px] right-[60px] text-[20px] xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[16px] ">
          FILTER
        </p>
        <div className="bg-white  rounded-[10px] border border-tertiary px-[20px] w-[65%] h-[76px] flex gap-[10px]">
          <input
            type="text"
            className="w-full text-[20px] xl:text-[20px] max-lg:text-[16px] max-sm:text-[14px]"
            placeholder="원하는 주제의 방을 검색해 보세요."
          />
          <img src={search} alt="" className="w-[44px]" />
        </div>
        <ul className=" mt-[20px] flex font-bold gap-[5px] flex-wrap">
          {categories.map((category, index) => (
            <button
              className="bg-white flex justify-center items-center border boder-[#D8DEF3] h-[40px] rounded-[50px] px-[25px] py-[10px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] "
              key={index}
            >
              {category}
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MainTop;
//
