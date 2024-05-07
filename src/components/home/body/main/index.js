import React from 'react'

import { apiData } from "./data.services"
import ItemCard from './ItemCard.component'

const index = () => {
    return (
        <div className='flex flex-wrap'>
            {
                apiData.map((item, index) => (
                    <ItemCard 
                        index={index} 
                        item={item}
                    />
                ))
            }
        </div>
    )
}

export default index