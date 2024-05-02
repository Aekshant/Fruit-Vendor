import React from 'react'

import Heading from "./Heading"
const index = () => {
    return (
        <div className='bg-gradient-to-t from-purple-300 to-gray-100 h-80 my-4 flex flex-wrap justify-between place-items-center'>
            <Heading/>
            <div className='w-96 mr-48'>
                <img alt='carousel' className='' src='corosalImage.png'/>
            </div>
        </div>
    )
}

export default index