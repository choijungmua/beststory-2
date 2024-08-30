const CategoryList = ({ categories }) => {
  return (
    <>
      {categories.map((item, index) => (
        <button
          key={index}
          className="flex font-bold border-tertiary border items-center text-text rounded-[50px] px-[25px] h-[40px]"
        >
          {item}
        </button>
      ))}
    </>
  );
};
export default CategoryList;
