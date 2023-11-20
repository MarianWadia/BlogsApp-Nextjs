import React from 'react'
import Link from 'next/link'
import {prisma, disconnect} from '@/libs/db'


const getPosts = async () => {
    const blogs = await prisma.post.findMany({
        include:{
            author: true
        }
    })
    await disconnect()
    return blogs
}
const Blogs = async () => {
    const posts = await getPosts()
  return (
    <div className='max-w-4xl mx-auto bg-gray-400 my-8 rounded-lg'>
        <h1 className='font-bold text-3xl text-gray-700 p-4 text-center'>The Blogs</h1>

        <div className='grid grid-col-1 md:grid-cols-3 gap-4 p-4 '>
            {posts.map((post:any)=>(
                <Link 
                    href={`/blogs/${post.id}`} 
                    className='bg-white text-black rounded-md p-2 cursor-pointer flex justify-center flex-col gap-2 shadow-lg shadow-gray-300' 
                    key={post.id}
                >
                    <h2 className='text-center font-bold text-md'>{post.title}</h2>
                    <p className='text-sm'>{post.body}</p>
                    <h6 className='text-slate-500 text-xs italic text-end'>{post.author.name}</h6>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Blogs