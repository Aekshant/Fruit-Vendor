import React, { useEffect, useRef, useState } from 'react'

import { apiData } from "./data.services"

const Items = ( {scrollAction, setScrollAction } ) => {
  const scrollRef = useRef(null)
  useEffect( ()=> {
    setScrollAction(scrollRef.current)
  }, [] )

  return (
    <div ref={scrollRef} className='flex mx-4 my-2 text-center no-scrollbar overflow-x-scroll'>
    {
      apiData.map((item, index) => (
        <div key={index} className='m-6 w-full cursor-pointer'>
          <img alt={item.alt} className='object-contain h-20' src={item.src} />
          <h3 className='font-semibold my-2'>{item.name}</h3>
        </div>
      ))
    }
  </div>

  )
}

export default Items