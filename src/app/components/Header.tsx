import { getCurrentUser } from '@/libs/getCurrentUser'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import ButtonSignout from './ButtonSignout'

const Header = async () => {
  const user = await getCurrentUser()

  return (
    <header className='bg-gray-400 mx-auto flex justify-around py-4'>
        <Link href='/' className='text-2xl font-bold'>Blogs App</Link>
        <ul className='flex flex-row gap-5'>
            <li className='hover:underline'>
                <Link href='/blogs'>Blogs</Link>
            </li>
          {user?.email ? ( 
            <ButtonSignout />
            ) : (
              <li className='hover:underline'>
                <Link href='/api/auth/signin'>Login</Link>
              </li>
            )}
        </ul>
    </header>
  )
}

export default Header