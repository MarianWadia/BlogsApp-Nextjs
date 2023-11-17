import React from 'react'
import { blogs } from '@/data/posts'
import Link from 'next/link'

const Blogs = () => {
  return (
    <div className='max-w-4xl mx-auto bg-blue-100 my-8 rounded-lg'>
        <h1 className='font-bold text-3xl text-white p-4'>Blogs</h1>

        <div className='grid grid-col-1 md:grid-cols-3 gap-4 p-4 '>
            {blogs.map((blog)=>(
                <Link 
                    href={`/blogs/${blog.id}`} 
                    className='bg-white text-black rounded-md p-2 cursor-pointer flex justify-center flex-col gap-2 shadow-lg shadow-gray-300' 
                    key={blog.id}
                >
                    <h2 className='text-center font-bold text-md'>{blog.title}</h2>
                    <p className='text-sm'>{blog.body}</p>
                    <h6 className='text-slate-500 text-xs italic text-end'>{blog.username}</h6>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Blogs