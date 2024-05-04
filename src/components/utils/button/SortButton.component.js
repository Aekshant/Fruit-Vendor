import React from 'react'

const Sort = () => {
  return (
    <div
      className='border-gray-400 flex border rounded-3xl p-1 items-center text-sm shadow-md mx-3'
    >
        <h6 className='text-gray-700 pl-2 whitespace-nowrap'>Sort By</h6>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1" 
            stroke="currentColor" 
            className="w-full h-full px-1 py-1"
        >
            <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    </div>
  )
}

export default Sort