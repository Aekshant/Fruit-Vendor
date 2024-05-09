import React from 'react'

const SubText = (props) => {
    const { className ="py-2 text-gray-400 cursor-pointer hover:text-gray-100", children } = props
  return (
    <h1 className={className} {...props}>{children}</h1>
  )
}

export default SubText