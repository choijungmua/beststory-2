import search from "../../assets/images/search.svg";
import { categories } from "../../db/categories";
import useToggle from "../../hooks/useToggle";
import SelectTag from "../../ui/SelectTag";
import CategoryList from "../../ui/CategoryList";
import Check from "../../assets/images/Check.svg";
import { useCategory } from "../../store/Array";

const SECTION_CLASS = "bg-[#F3F3F3] pt-[25px] pb-[40px]";
const CONTAINER_CLASS =
  "relative mx-[260px] xl:mx-[260px] lg:mx-[130px] md:mx-[60px] sm:mx-[30px] max-sm:mx-[10px]";
const SEARCH_CONTAINER_CLASS =
  "max-sm:flex max-sm:flex-col max-sm:gap-[20px] mb-[20px]";
const SEARCH_BOX_CLASS =
  "bg-white rounded-[10px] border border-tertiary max-sm:w-full px-[20px] w-[65%] h-[76px] flex gap-[10px]";
const SEARCH_INPUT_CLASS = "w-full text-[20px] max-sm:text-[16px]";
const SEARCH_ICON_CLASS = "w-[44px] cursor-pointer";
const FILTER_TEXT_CLASS =
  "cursor-pointer absolute top-[45px] max-sm:static max-sm:right-0 right-[60px] text-[20px]";
const TAG_CONTAINER_CLASS = "flex gap-[10px] flex-col flex-wrap";
const TAG_TEXT_CLASS = "text-text";
const TAG_BUTTON_CONTAINER_CLASS =
  "flex gap-[10px] flex-wrap text-white mb-[20px]";
const TAG_BUTTON_CLASS =
  "flex gap-1 opacity-80 font-bold items-center rounded-[50px] bg-primary px-[25px] h-[40px]";

const MainTop = () => {
  const [showSearch, setShowSearch] = useToggle();
  const { categoryArray } = useCategory();

  return (
    <section className={SECTION_CLASS}>
      {/* 검색 필터 */}
      <div className={CONTAINER_CLASS}>
        <div className={SEARCH_CONTAINER_CLASS}>
          <div className={SEARCH_BOX_CLASS}>
            <input
              type="text"
              className={SEARCH_INPUT_CLASS}
              placeholder="원하는 주제의 방을 검색해 보세요."
            />
            <img src={search} alt="search icon" className={SEARCH_ICON_CLASS} />
          </div>
          <p onClick={setShowSearch} className={FILTER_TEXT_CLASS}>
            FILTER
          </p>
        </div>
        <SelectTag categoryArray={categoryArray} />
        <div className={TAG_CONTAINER_CLASS}>
          {!showSearch && (
            <>
              <p className={TAG_TEXT_CLASS}>
                추가할 태그를 선택하세요. (최대 5개)
              </p>
              <div className={TAG_BUTTON_CONTAINER_CLASS}>
                <CategoryList categories={categories} />
                <button onClick={setShowSearch} className={TAG_BUTTON_CLASS}>
                  <img src={Check} alt="check icon" />
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
