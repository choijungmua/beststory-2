import PropTypes from "prop-types";
import { useSearchCategory } from "../store/Array";
const SearchSelectTag = () => {
  const { searchCategory } = useSearchCategory();
  return (
    <div className="flex flex-wrap gap-[10px] text-white mb-[20px]">
      {searchCategory.map((item, index) => (
        <div
          key={index}
          className="flex font-bold whitespace-nowrap items-center rounded-full bg-primary px-[25px] max-sm:text-[14px] max-sm:h-[30px] h-[40px]"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

// Adding prop types to validate props
SearchSelectTag.propTypes = {
  postCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchSelectTag;
