import search from "../../assets/images/search.svg";
import { useState, useEffect, useCallback } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import useToggle from "../../hooks/useToggle";
import CategoryList from "../../ui/CategoryList";
import Check from "../../assets/images/Check.svg";
import { useSearchCategory } from "../../store/Array";
import SearchSelectTag from "../../ui/SearchSelectTag";
import { useTranslation } from "react-i18next";

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
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSearch, setShowSearch] = useToggle();
  const { searchCategory, setSearchCategory } = useSearchCategory();
  const { t } = useTranslation();

  // 검색 및 필터링 함수
  const fetchFilteredData = useCallback(
    async (term) => {
      if (!term.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const colRef = collection(db, "responses");

        // 'title' 필드를 정렬해야 하므로 orderBy 사용
        const q = query(
          colRef,
          where("title", "<=", term),
          where("title", ">=", term + "\uf8ff"),
          orderBy("title"),
          orderBy("timestamp", "desc")
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResults(data);
        console.log(data);
      } catch (err) {
        setError(t("error")); // 번역된 에러 메시지 사용
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [t]
  );

  // 입력 변경 시 검색어 업데이트 및 debounce 적용
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        fetchFilteredData(searchTerm);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, fetchFilteredData]);

  return (
    <section className={SECTION_CLASS}>
      <div className={CONTAINER_CLASS}>
        <div className={SEARCH_CONTAINER_CLASS}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className={SEARCH_BOX_CLASS}
          >
            <input
              type="text"
              value={searchTerm}
              className={SEARCH_INPUT_CLASS}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("search_placeholder")} // 번역된 플레이스홀더 사용
            />
            <img
              src={search}
              alt={t("search")} // 번역된 alt 텍스트 사용
              className={SEARCH_ICON_CLASS}
              onClick={() => fetchFilteredData(searchTerm)}
            />
          </form>
          <p onClick={setShowSearch} className={FILTER_TEXT_CLASS}>
            {t("filter")} {/* 번역된 필터 텍스트 사용 */}
          </p>
        </div>
        <SearchSelectTag />
        <div className={TAG_CONTAINER_CLASS}>
          {!showSearch && (
            <>
              <p className={TAG_TEXT_CLASS}>
                {t("select_tags")} {/* 번역된 태그 선택 안내 텍스트 사용 */}
              </p>
              <div className={TAG_BUTTON_CONTAINER_CLASS}>
                <CategoryList
                  setCategoryArray={setSearchCategory}
                  categoryArray={searchCategory}
                />
                <button onClick={setShowSearch} className={TAG_BUTTON_CLASS}>
                  <img src={Check} alt={t("done")} />{" "}
                  {/* 번역된 완료 alt 텍스트 사용 */}
                  {t("done")} {/* 번역된 완료 버튼 텍스트 사용 */}
                </button>
              </div>
            </>
          )}
        </div>
        {loading && (
          <p>
            {t("loading")} <span className="spinner"></span>{" "}
            {/* 번역된 로딩 텍스트 사용 */}
          </p>
        )}
        {error && <p>{error}</p>}
        {results.length === 0 && !loading && !error && (
          <p>{t("no_results")}</p>
          // {/* 번역된 결과 없음 텍스트 사용 */}
        )}
        {results.length > 0 && (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MainTop;
