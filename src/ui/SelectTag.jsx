import PropTypes from "prop-types";
import { useCategory } from "../store/Array";
const SelectTag = ({ postCategory = [] }) => {
  const { categoryArray } = useCategory();
  return (
    <div className="flex flex-wrap gap-[10px] text-white mb-[20px]">
      {categoryArray.map((item, index) => (
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
SelectTag.propTypes = {
  postCategory: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectTag;
