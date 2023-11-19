"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const ButtonSignout = () => {
  return (
    <div>
        <button onClick={()=>signOut()} className='hover:underline'>Logout</button>
    </div>
  )
}

export default ButtonSignout