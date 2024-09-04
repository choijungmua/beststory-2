import search from "../../assets/images/search.svg";
import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import useToggle from "../../hooks/useToggle";
import CategoryList from "../../ui/CategoryList";
import Check from "../../assets/images/Check.svg";
import { useSearchCategory } from "../../store/Array";
import SearchSelectTag from "../../ui/SearchSelectTag";

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

  // 검색 및 필터링 함수
  const fetchFilteredData = async (term) => {
    if (!term.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const colRef = collection(db, "responses");

      // 부분 일치 검색을 위한 쿼리 작성
      const q = query(
        colRef,
        where("title", ">=", term),
        where("title", "<=", term + "\uf8ff"), // 유니코드 문자로 끝을 설정하여 범위 검색
        orderBy("timestamp", "desc")
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResults(data);
    } catch (err) {
      setError(
        "데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 입력 변경 시 검색어 업데이트 및 debounce 적용
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        fetchFilteredData(searchTerm);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

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
              placeholder="원하는 주제의 방을 검색해 보세요."
            />
            <img
              src={search}
              alt="search icon"
              className={SEARCH_ICON_CLASS}
              onClick={() => fetchFilteredData(searchTerm)}
            />
          </form>
          <p onClick={setShowSearch} className={FILTER_TEXT_CLASS}>
            FILTER
          </p>
        </div>
        <SearchSelectTag />
        <div className={TAG_CONTAINER_CLASS}>
          {!showSearch && (
            <>
              <p className={TAG_TEXT_CLASS}>
                추가할 태그를 선택하세요. (최대 5개)
              </p>
              <div className={TAG_BUTTON_CONTAINER_CLASS}>
                <CategoryList
                  setCategoryArray={setSearchCategory}
                  categoryArray={searchCategory}
                />
                <button onClick={setShowSearch} className={TAG_BUTTON_CLASS}>
                  <img src={Check} alt="check icon" />
                  완료
                </button>
              </div>
            </>
          )}
        </div>
        {loading && (
          <p>
            검색 중... <span className="spinner"></span>
          </p>
        )}
        {error && <p>{error}</p>}
        {results.length === 0 && !loading && !error && (
          <p>검색 결과가 없습니다.</p>
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
