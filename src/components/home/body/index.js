import React from 'react'


import Heading from './Heading/Heading.component'
import MainBody from "./main"
import DownSVG from "../../utils/svg/DownArrow.svg"

const index = () => {
  return (
    <div className='mx-56 mt-10 mb-11 shadow-[rgba(209,213,219)_0px_2px_0px_0px]'>
        <Heading/>
        <MainBody/>
        <div className='border border-gray-300 cursor-pointer flex justify-center rounded-xl shadow-md mx-72 mt-5 py-3 h-14 whitespace-nowrap'>
          <h3 className='font-bold'>Show More</h3>
          <div>
            <DownSVG/>
          </div>
        </div>
        <div className='p-5'></div>
    </div>
  )
}
export default index