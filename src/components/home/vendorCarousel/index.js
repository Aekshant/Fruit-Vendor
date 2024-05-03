import React, {useState} from 'react'

import Items from "./Items.component"
import Heading from './Heading'
const Index = () => {
  const [ scrollAction, setScrollAction ] = useState(null)
  const handleScroll = (data) => {
    if(scrollAction) data ? scrollAction.scrollLeft += 100 : scrollAction.scrollLeft -= 100
  };

  return (
    <div className='mx-56 mt-10 mb-11 shadow-[rgba(209,213,219)_0px_2px_0px_0px]'>
      <Heading handleScroll={handleScroll} scrollStatus={scrollAction}/>
      <Items setScrollAction = {setScrollAction}/>
    </div>
  )
}

export default Index