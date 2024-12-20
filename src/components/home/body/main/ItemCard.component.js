import React from 'react'

const ItemCard = ( props ) => {
  const { item } = props
  return (
    <div className='m-6 hover:scale-95 hover:duration-100'>
        <div className='bg-green-400 flex rounded-lg w-full justify-center cursor-pointer shadow-xl p-3'>
          <img alt={item.alt} className='object-contain h-36' src={item.src} />
        </div>
        <div className='px-2'>
            <h3 className='font-semibold mt-2 text-lg'>{item.name}</h3>
            <div className='flex'>
              <div>
                  <span
                      className='text-sm bg-green-600 rounded-full text-center text-white px-1 py-0'>
                      &#9734;
                  </span>
              </div>
              <div className='mx-2'>
                  <h4 className='font-bold'>4.3 &#183; 25-30 mins</h4>
              </div>
            </div>
            <div className='text-gray-700 font-light'>
              <h6>Fruits, Veggies, Salad</h6>
              <h6>Ram Nagar</h6>
            </div>
        </div>
    </div>
  )
}

export default ItemCard