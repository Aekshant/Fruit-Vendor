import React, { useState, useEffect } from 'react'

const Heading = ({ handleScroll, scrollStatus }) => {
    const [ buttonDisable, setButtonDisable ] = useState( { 
        left : false,
        right: true
     } )

    useEffect( ()=> {
        if( 
            scrollStatus?.scrollLeft === (scrollStatus?.scrollWidth - scrollStatus?.clientWidth)
         )setButtonDisable( { left : false, right: false }  )
    }, [scrollStatus] )
    
    const scrollHandler = ( data ) => {
        handleScroll(data)
        if( 
            scrollStatus.scrollLeft > 0 && 
            scrollStatus.scrollLeft === (scrollStatus.scrollWidth - scrollStatus.clientWidth)
          ){
            setButtonDisable({ left : true, right: false  })
        }else if( scrollStatus.scrollLeft > 0 ){
            setButtonDisable({ left : true, right: true  })
        }else{
            setButtonDisable({ left : false, right: true  })
        }
    }
    
    return (
        <div className='flex justify-between text-center'>
            <h1 className='font-bold text-xl'>Top Fruit Store chains in Nagpur</h1>
            <div className='flex space-x-2'>
                <div 
                    className={
                        buttonDisable.left ? 
                        'p-1 bg-gray-300 rounded-2xl cursor-pointer hover:bg-gray-400' :
                        'p-1 bg-gray-300 rounded-2xl'
                    }
                    onClick={()=>scrollHandler(0)}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                    </svg>
                </div>
                <div 
                    className={
                        buttonDisable.right ? 
                        'p-1 bg-gray-300 rounded-2xl cursor-pointer hover:bg-gray-400' :
                        'p-1 bg-gray-300 rounded-2xl'
                    }
                    onClick={()=>scrollHandler(1)}
                    >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Heading