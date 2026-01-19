"use client"
import React from 'react'
import { signIn } from 'next-auth/react';


const LoginButton = () => {
  return <button 
  className='btn w-full bg-blue-600 border-none text-white hover:bg-blue-700 h-12 text-lg shadow-lg shadow-blue-200'
  onClick={() => signIn()}
  >
    Sign In
  </button>
}

export default LoginButton
