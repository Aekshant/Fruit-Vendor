import React from 'react'

import InputBox from "./InputBox.component"
const Sign = () => {
  return (
    <div className='flex place-items-center'>
      <InputBox/>
      <div
        className='m-5 px-2 py-2 bg-[#FFA559] font-semibold text-black rounded-lg place-items-center shadow-lg'
      >Sign In</div>
    </div>
  )
}

export default Sign