import React from 'react'

const Logo = () => {
  return (
    <div className='flex text-center items-center'>
      <div className='bg-[#FFA559] m-5 p-2 flex rounded-lg shadow-lg'>
        <img className='w-7 p-1 bg-black rounded-xl' src="/logo.png" alt="image1" />
        <span className='font-bold text-xl ml-1'>Fruit Vendor</span>
      </div>
    </div>
  )
}

export default Logo