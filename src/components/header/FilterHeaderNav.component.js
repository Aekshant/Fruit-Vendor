import React from 'react'

import FilterNavComponent from "../home/body/Heading/Index";
import SearchButton from "../utils/button/SearchButton.component"

const FilterHeader = () => {
  return (
    <div className="flex justify-between place-items-center w-full">
    <FilterNavComponent/>
    <SearchButton/>
    </div>
  )
}

export default FilterHeader