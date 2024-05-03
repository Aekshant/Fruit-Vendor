import React, { useEffect, useRef, useState } from 'react'

import { apiData } from "./data.services"

const Items = ( {scrollAction, setScrollAction } ) => {
  const scrollRef = useRef(null)
  // const handleRight = (data) => {
    // scrollRef.current.scrollLeft += 100;
    // handleRightScroll("hehe");
  // };
  useEffect( ()=> {
    setScrollAction(scrollRef.current)
  }, [] )
  // no-scrollbar
  return (
    <div ref={scrollRef} className='flex mx-14 my-2 text-center overflow-x-scroll'>
    {
      apiData.map((item, index) => (
        <div key={index} className='m-6 w-full'>
          <img alt={item.alt} className='object-contain h-20' src={item.src} />
          <h3 className='font-semibold my-2'>{item.name}</h3>
        </div>
      ))
    }
  </div>

  )
}

export default Items