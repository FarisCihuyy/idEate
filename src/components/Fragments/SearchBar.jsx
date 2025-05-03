import Icn from "../Elements/Icon";

const SearchBar = () => {
  return (
    <label
      htmlFor="search"
      className="w-full flex items-center gap-2 border border-accent p-1 pr-5 rounded-full"
    >
      <Icn name="mynaui:search" variant="bg-accent" />
      <input
        id="search"
        type="search"
        placeholder="Search your product"
        className="w-full outline-none bg-transparent appearance-none placeholder:text-light"
      />
    </label>
  );
};

export default SearchBar;
