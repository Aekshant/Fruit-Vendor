import React from 'react'

import AppleStoreSvg from '../svg/AppleStore.svg'
const AppleStore = () => {
  return (
    <div className="p-2 px-4 bg-black text-white flex rounded-2xl mx-7 cursor-pointer">
    <div className="w-10">
      <AppleStoreSvg className="w-full h-full "/>
    </div>
    <div className="ml-3">
      <div className="text-sm">Download on the</div>
      <div className="text-lg font-bold">App Store</div>
    </div>
  </div>
  )
}

export default AppleStore