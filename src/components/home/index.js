import React from 'react'

import Carousel from "./carousel"
import SubCarousel from "./subCarousel"
import VendorCarousel from './vendorCarousel'

const index = () => {
  return (
    <div className=''>
        <Carousel/>
        <SubCarousel/>
        <VendorCarousel/>
    </div>
  )
}

export default index