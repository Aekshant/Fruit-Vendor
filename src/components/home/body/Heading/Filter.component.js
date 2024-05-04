import React from 'react'


import FilterButton from "../../../utils/button/FilterButton.component"
import SortButton from "../../../utils/button/SortButton.component"
import FilterCard from "./Card.component"

const Filter = () => {
  return (
    <div className='flex w-full h-9 my-4'>
        <FilterButton/>
        <SortButton/>
        <FilterCard name={"Fast Delivery"}/>
        <FilterCard name={"New Stores"}/>
        <FilterCard name={"Rating 4.0+"}/>
        <FilterCard name={"Fruits"}/>
        <FilterCard name={"Offers"}/>
        <FilterCard name={"Salad Store"}/>
        <FilterCard name={"Fruit Basket"}/>
    </div>
  )
}

export default Filter


