import React, { useEffect, useRef } from 'react'

import { apiData } from "./data.services"

const Items = ( {scrollAction, setScrollAction } ) => {
  const scrollRef = useRef(null)
  useEffect( ()=> {
    setScrollAction(scrollRef.current)
  }, [] )

  return (
    <div ref={scrollRef} className='flex mx-4 my-2 no-scrollbar overflow-x-scroll'>
    {
      apiData.map((item, index) => (
        <div key={index} className='m-6 w-full'>
          <div className='bg-green-400 flex rounded-lg w-60 justify-center cursor-pointer shadow-xl'>
            <img alt={item.alt} className='object-contain h-44' src={item.src} />
          </div>
          <div className='px-2'>
            <h3 className='font-semibold mt-2 text-lg'>{item.name}</h3>
            <div className='flex'>
              <div>
                <span 
                    className='text-sm bg-green-600 rounded-full text-center text-white px-1 py-0'>
                    &#9734;
                </span>
              </div>
              <div className='mx-2'>
                <h4 className='font-bold'>4.3 &#183; 25-30 mins</h4>
              </div>
            </div>
            <div className='text-gray-700 font-light'>
              <h6>Fruits, Veggies, Salad</h6>
              <h6>Ram Nagar</h6>
            </div>
          </div>
        </div>
      ))
    }
  </div>

  )
}

export default Items