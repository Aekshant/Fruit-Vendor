import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-gray-200 place-items-center h-16'>
      <div className='m-5 p-2 flex'>
        <img className='w-7 mx-1 bg-green-400 rounded-lg' src="/logo.png" alt="image1" />
        <span className='font-bold text-xl'>Fruit Vendor</span>
      </div>
      <div className='m-5 p-2'>Operations</div>
      <div className='flex place-items-center'>
        <div 
            className='flex items-center'
        >
          <input className='my-5 mx-1 px-2 py-1 rounded-lg'/>
          <div 
            className='px-0 py-1 text-black'
          >|</div>
          <div 
            className='bg-[#FFA559] my-5 mx-1 px-2 py-1 text-black font-semibold rounded-lg shadow-lg'
          >Search</div>
        </div>
        {/* <div className='text-lg'>|</div> */}
        <div 
            className='m-5 px-2 py-1 bg-[#FFA559] font-semibold text-black rounded-lg place-items-center'
        >Sign In</div>
      </div>
    </div>
  )
}

export default Header