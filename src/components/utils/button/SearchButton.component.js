import React from "react";

import SearchSvg from "../svg/Search.svg";

const SearchButton = () => {
  return (
    <div
      className="flex p-2 cursor-pointer font-semibold
      items-center border rounded-3xl border-orange-400 hover:bg-[#FFA559]"
    >
      <h1 className="px-1 text-gray-700 hover:text-black">Search</h1>
      <SearchSvg className="pr-2 h-5" />
    </div>
  );
};

export default SearchButton;
