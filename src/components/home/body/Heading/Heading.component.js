import React from 'react'

import Filter from './Filter.component'

const Heading = () => {
  return (
    <div className='flex flex-col text-left'>
        <h1 className='font-bold text-xl'>Restaurants with online food delivery in Nagpur</h1>
        <Filter/>
    </div>
  )
}

export default Heading
