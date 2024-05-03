import React from 'react'
import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>Error Page</div>
  )
}

export default Error