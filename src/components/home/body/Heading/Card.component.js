import React from 'react'

const FilterCard = ( props ) => {
  const { name } = props
  return (
    <div
      className='border-gray-400 flex border font-semibold rounded-3xl p-2 items-center text-sm shadow-md mr-3'
    >
      <h6 className='text-gray-700 whitespace-nowrap p-1'>{name}</h6>
    </div>
  )
}

export default FilterCard