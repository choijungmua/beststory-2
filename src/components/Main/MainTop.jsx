import search from "../../assets/images/search.svg";
import { categories } from "../../db/categories";
import useToggle from "../../hooks/useToggle";
import SelectTag from "../../ui/SelectTag";
import CategoryList from "../../ui/CategoryList";
import Check from "../../assets/images/Check.svg";
import { useCategory } from "../../store/Array";

const MainTop = () => {
  const [showSearch, setShowSearch] = useToggle();
  const { categoryArray } = useCategory();

  return (
    <section className="bg-[#F3F3F3] pt-[25px] pb-[40px] ">
      {/* 검색 필터 */}
      <div className="relative mx-[260px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]">
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-[20px] mb-[20px]">
          <div className="bg-white  rounded-[10px] border border-tertiary max-sm:w-full px-[20px] w-[65%] h-[76px] flex gap-[10px]">
            <input
              type="text"
              className="w-full text-[20px] max-sm:text-[16px]"
              placeholder="원하는 주제의 방을 검색해 보세요."
            />
            <img src={search} alt="" className="w-[44px] cursor-pointer" />
          </div>
          <p
            onClick={setShowSearch}
            className="cursor-pointer absolute top-[45px] max-sm:static max-sm:right-0 right-[60px] text-[20px]"
          >
            FILTER
          </p>
        </div>
        <SelectTag categoryArray={categoryArray} />
        <div className="flex gap-[10px] flex-col flex-wrap">
          {!showSearch && (
            <>
              <p className="text-text">추가할 태그를 선택하세요. (최대 5개)</p>

              <div className="flex gap-[10px] flex-wrap text-white mb-[20px]">
                <CategoryList categories={categories} />
                <button
                  onClick={setShowSearch}
                  className="flex gap-1 opacity-80 font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]"
                >
                  <img src={Check} alt="" />
                  완료
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainTop;
