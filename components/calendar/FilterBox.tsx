import FilterArrow from "@/public/svgs/FilterArrow.svg";

const FilterBox = ({
  filterName,
  onClick,
  handleSelect,
}: {
  filterName: string;
  onClick: () => void | null;
  handleSelect: (e) => void;
}) => {
  return (
    <select
      value={filterName}
      onChange={handleSelect}
      className="dropdown w-fit h-[1.9rem] flex justify-center items-center bg-main-color rounded-3xl text-white py-[0.31rem] pl-[0.94rem] pr-[0.44rem] gap-0.5"
    >
      <FilterArrow />
    </select>
  );
};

export default FilterBox;
