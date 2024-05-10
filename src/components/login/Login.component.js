import React, { useState } from 'react'

import Title from "./Title.component"
import ValidateInputBox from '../utils/InputBox/ValidateInputBox'

const Login = () => {
  const [ loginState, setLoginState ] = useState(true)

  const handleLoginState = ( ) => {
      const currentState = !(loginState)
      setLoginState( currentState )
  }
  return (
    <div className='m-7'>
      <Title 
        title={ loginState ? "Login" : "Sign up" }
        subTitle={ loginState ? "create an account" : "login to your account" }
        changeLoginState = {handleLoginState}
      />
      { 
        loginState ? (
          <ValidateInputBox title="Phone Number" />
        ) : (
          <div>
            <ValidateInputBox title="Phone Number" />
            <ValidateInputBox title="Name" />
            <ValidateInputBox title="Email" />
          </div>
        )
      }
      
      <div className='my-2 mt-10 p-6 bg-orange-500 text-center cursor-pointer'>
        <h1 className='font-semibold text-white text-sm tracking-wider'>{ loginState ? "LOGIN" : "CONTINUE" }</h1>
      </div>
      <div className='text-xs inline'>
        <span className='text-xs inc text-gray-500' >
          {loginState ? "By clicking on Login, I accept the ": "By creating an account, I accept the "} 
        </span>
        <span>Terms & Conditions & Privacy Policy</span>
      </div>
    </div>
  )
}

export default Login