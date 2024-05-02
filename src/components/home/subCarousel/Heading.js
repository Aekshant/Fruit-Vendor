import React from 'react'

const Heading = () => {
    return (
        <div className='flex justify-between text-center'>
            <h1 className='font-bold text-xl'>What's on your mind?</h1>
            <div className='flex space-x-2'>
                <div className='p-1 bg-gray-300 rounded-2xl cursor-pointer'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="currentColor" 
                        class="w-6 h-6">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                    </svg>
                </div>
                <div className='p-1 bg-gray-300 rounded-2xl cursor-pointer'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="currentColor" 
                        class="w-6 h-6"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Heading