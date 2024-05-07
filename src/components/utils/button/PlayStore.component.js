import React from 'react'


import GooglePlaySvg from "../svg/GooglePlay.svg"
const PlayStore = () => {
  return (
    <div className="p-2 px-5 bg-black text-white flex rounded-2xl cursor-pointer">
    <div className="w-10">
      <GooglePlaySvg className="w-full h-full"/>
    </div>
    <div className="ml-3">
      <div className="text-sm">Get it on</div>
      <div className="text-lg font-bold">Google Play</div>
    </div>
  </div>
  )
}
export default PlayStore