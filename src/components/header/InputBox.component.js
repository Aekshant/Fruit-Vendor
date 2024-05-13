import React, { useState } from "react";

import LeftArrowSvg from "../utils/svg/LeftArrow.svg"
import SearchSvg from "../utils/svg/Search.svg"

const InputBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center">
      {open ? (
        <div className="flex my-5 mx-1 px-4 py-2 rounded-lg shadow-lg w-80 justify-between items-center">
          <div  className="w-5 cursor-pointer" onClick={() => setOpen(false)}>
            <LeftArrowSvg/>
          </div>
          <input
            className="focus:outline-none placeholder-gray-500 w-full px-4"
            placeholder="Search For the Fruits"
          />
        </div>
      ) : (
        <div 
          className="bg-gray-200 flex my-5 mx-1 px-4 py-2 rounded-lg shadow-lg w-80 justify-between"
          onClick={() => setOpen(true)}
        >
          <span>Search For the Fruits</span>
          <div className="w-6 h-6">
          <SearchSvg/>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputBox;
