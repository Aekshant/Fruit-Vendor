import React from "react";

const ValidateInputBox = ( props ) => {
  const { title = "" } = props;
  // dark:focus:border-blue-500 
  return (
    <div className="relative">
        <input 
          type="text" 
          id="floating_filled" 
          className="block px-2.5 pb-2.5 pt-5
          w-full text-sm text-gray-900 bg-gray-50 
          dark:bg-white border border-gray-300
          appearance-none 
          focus:outline-none 
          focus:ring-0 peer" 
          placeholder=" "
        />
        <label 
          htmlFor="floating_filled" 
          className="absolute text-sm 
          text-gray-500 
          dark:text-gray-400 
          duration-300 transform -translate-y-4 
          scale-75 top-4 z-10 origin-[0] start-2.5 
          peer-focus:text-gray-600 
          peer-focus:dark:text-gray-400 
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75 peer-focus:-translate-y-4 
          rtl:peer-focus:translate-x-1/4 
          rtl:peer-focus:left-auto"
        >{title}
        </label>
    </div>
  );
};

export default ValidateInputBox;
