import React from 'react'

import { apiData } from "./data.services"

const Items = () => {
  return (
    <div className='flex mx-14 my-2 text-center no-scrollbar overflow-x-scroll'>
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