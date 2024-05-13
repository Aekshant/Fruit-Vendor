import React from 'react'
import { useSelector } from "react-redux";

import Logo from './Logo.component'
import Sign from './Sign.component'

const Header = () => {
  const sliderStatus = useSelector((store) => store.profile.slider);
  console.log(sliderStatus);
  return (
    <div className={'flex justify-between place-items-center h-20 px-48 sticky top-0 bg-white ' + ( sliderStatus ? "" : "z-50" )}>
      <Logo/>
      <Sign/>
    </div>
  )
}

export default Header