import React from 'react'

const Filter = () => {
  return (
    <div
      className='border-gray-400 
      flex border font-semibold rounded-3xl p-1 
      items-center text-sm shadow-md cursor-pointer 
      hover:text-orange-500 group'
    >
      <h6 className='text-gray-700 pl-2 group-hover:text-orange-500'>Filter</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-full h-full px-1 py-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    </div>
  )
}

export default Filter