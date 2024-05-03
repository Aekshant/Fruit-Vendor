import React from 'react'

import Logo from './Logo.component'
import Sign from './Sign.component'

const Header = () => {
  return (
    <div className='flex justify-between place-items-center h-20 px-48 sticky top-0 bg-white'>
      <Logo/>
      <Sign/>
    </div>
  )
}

export default Header