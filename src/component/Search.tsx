import { ReactEventHandler } from "react";

const Search = (props: { setQuerySearch: string }) => {
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setQuerySearch(e.target.value);
  };
  return (
    <div className="dark:bg-gray-800 p-4">
      <input
        type="text"
        className="w-full px-3 py-1 rounded-lg"
        placeholder="Search with Ingredients, dish, etc"
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default Search;
