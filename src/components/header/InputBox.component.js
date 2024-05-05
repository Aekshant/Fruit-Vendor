import React from 'react'

const InputBox = () => {
  return (
    <div
      className='flex items-center'
    >
      <div 
        className='bg-gray-200 flex my-5 mx-1 px-4 py-2 rounded-lg shadow-lg w-80 justify-between'
      >
        <span>Search For the Fruits</span>
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1} 
          stroke="currentColor" 
          className="w-6 h-6">
          <path 
            strokeLinecap="round"
            strokeLinejoin="round" 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      {/* 
      <div
        className='px-0 py-1 text-black'
      >|</div>
      <div
        className='bg-[#FFA559] my-5 mx-1 px-2 py-2 text-black font-semibold rounded-lg shadow-lg'
      >Search</div> */}
    </div>
  )
}

export default InputBox