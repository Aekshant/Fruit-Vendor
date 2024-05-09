import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CrossSvg from "../utils/svg/Cross.svg"
import { slider } from "../redux/login/profileSlice.redux"

const Index = () => {
  const dispatch = useDispatch()
  const sliderStatus = useSelector( ( store ) => store.profile.slider )
  console.log(sliderStatus);

  const handleLogin = ( ) => {
    dispatch( slider() )
  }
  return (
    <div
    id="slideover-container"
    className={ "w-full h-full fixed inset-0 " + ( sliderStatus ? "" : "invisible" ) }
  >
    <div
      id="slideover-bg"
      className={ "w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 " + ( sliderStatus ? "opacity-50" : "opacity-0" ) }
    />
    <div
      id="slideover"
      className={ "w-96 bg-white h-full absolute right-0 duration-300 ease-out transition-all " + ( sliderStatus ? "" : "translate-x-full" ) }
    >
      <div 
        className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5"
        onClick={handleLogin}
      >
        <CrossSvg/>
      </div>
    </div>
  </div>
  )
}

export default Index