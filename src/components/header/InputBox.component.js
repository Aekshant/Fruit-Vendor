import React from 'react'

const InputBox = () => {
  return (
    <div
      className='flex items-center'
    >
      <div 
        className='bg-gray-200 my-5 mx-1 px-4 py-2 rounded-lg shadow-lg w-60'
      >Search For the Fruits</div>
      <div
        className='px-0 py-1 text-black'
      >|</div>
      <div
        className='bg-[#FFA559] my-5 mx-1 px-2 py-2 text-black font-semibold rounded-lg shadow-lg'
      >Search</div>
    </div>
  )
}

export default InputBox