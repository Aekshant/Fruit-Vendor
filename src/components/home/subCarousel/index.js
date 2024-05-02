import React from 'react'

import { apiData } from "./data.services"
import Items from "./Items.component"
import Heading from '../subCarousel/Heading'
const Index = () => {

  return (
    <div className='mx-56'>
      <Heading/>
      <Items />
    </div>
  )
}

export default Index