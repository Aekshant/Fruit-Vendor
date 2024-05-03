import React, {useState} from 'react'

import Items from "./Items.component"
import Heading from '../subCarousel/Heading'
const Index = () => {
  const [ scrollAction, setScrollAction ] = useState(null)
  const handleScroll = (data) => {
    if(scrollAction) data ? scrollAction.scrollLeft += 100 : scrollAction.scrollLeft -= 100
  };

  return (
    <div className='mx-56'>
      <Heading handleScroll={handleScroll} scrollStatus={scrollAction}/>
      <Items setScrollAction = {setScrollAction}/>
    </div>
  )
}

export default Index