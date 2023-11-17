"use client"
import { blogs } from '@/data/posts'
import { useParams } from 'next/navigation'
import React from 'react'
import Comments from "@/app/components/Comments"

const BlogDetails = () => {
    const {id} = useParams()
    const clickedBlog = blogs.filter((blog) => blog.id === Number(id))
    console.log(clickedBlog);
    
  return (
    <div className='max-w-4xl bg-white text-black mx-auto my-12 p-4  rounded-md flex justify-center flex-col gap-2 shadow-lg shadow-gray-300'>
        <h2 className='text-center font-bold text-md'>{clickedBlog[0].title}</h2>
        <p className='text-sm'>{clickedBlog[0].body}</p>
        <h6 className='text-slate-500 text-xs italic text-end'>{clickedBlog[0].username}</h6>

        <Comments clickedBlog = {clickedBlog[0]} />
    </div>
  )
}

export default BlogDetails