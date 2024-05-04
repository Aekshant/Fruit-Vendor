import React from 'react'

import Carousel from "./carousel"
import SubCarousel from "./subCarousel"
import VendorCarousel from './vendorCarousel'
import Body from "./body"

const index = () => {
  return (
    <div className=''>
        <Carousel/>
        <SubCarousel/>
        <VendorCarousel/>
        <Body/>
    </div>
  )
}

export default index