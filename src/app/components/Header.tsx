import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-800 mx-auto flex justify-around py-4'>
        <Link href='/' className='text-2xl font-bold'>Blogs App</Link>
        <ul className='flex flex-row gap-5'>
            <li className='hover:underline'>
                <Link href='/blogs'>Blogs</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/api/auth/signin'>Login</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header