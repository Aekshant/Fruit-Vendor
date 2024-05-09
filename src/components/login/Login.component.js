import React from 'react'

const Login = () => {
  return (
    <div className='m-7'>
      <div className='flow-root'>
        <div className='my-2 float-left'>
          <h1 className='text-3xl'>Login</h1>
          <div className='flex mt-2 text-sm'>
            or <p className='text-[#FDA219] ml-2 font-semibold cursor-pointer'>create an account</p>
          </div>
          <h1 className='font-extrabold text-xl'>____</h1>
        </div>
        <div className='bg-purple-100 rounded-full p-2 flex w-24 h-24 float-right'>
          <div className='bg-purple-200 rounded-full px-5 py-4'>
            <img alt='tomatoEmoji' src='./tomato.png'/>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='border-gray-300 border p-2 px-5 my-8'>
        <p className='text-xs text-gray-500 py-1'>Phone number</p>
        <input className='focus:outline-none'/>
      </div>
      <div className='my-2 p-6 bg-orange-500 text-center'>
        <h1 className='font-semibold text-white text-sm tracking-wider'>LOGIN</h1>
      </div>
      <div className='text-xs inline'>
        <span className='text-xs inc text-gray-500' >By clicking on Login, I accept the </span>
        <span>Terms & Conditions & Privacy Policy</span>
      </div>
    </div>
  )
}

export default Login