import React from 'react'
import { useDispatch } from 'react-redux'

import InputBox from "./InputBox.component"
import { slider } from "../redux/login/profileSlice.redux"

const Sign = () => {
  const dispatch = useDispatch()
  const handleLogin = ( ) => {
    dispatch( slider() )
  }
  return (
    <div className='flex place-items-center'>
      <InputBox/>
      <div
        className='bg-[#FFA559] cursor-pointer font-semibold m-5 px-2 py-2 text-black rounded-lg place-items-center shadow-lg '
        onClick={handleLogin}
      >Sign In</div>
    </div>
  )
}

export default Sign