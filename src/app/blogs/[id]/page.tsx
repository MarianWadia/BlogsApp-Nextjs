"use client"
import { blogs } from '@/data/posts'
import { useParams } from 'next/navigation'
import React from 'react'
import Comments from "@/app/components/Comments"
import FormComment from '@/app/components/FormComment'



const BlogDetails = () => {
    const {id} = useParams()
    const filteredBlog = blogs.filter((blog) => blog.id === Number(id))
    const singleBlog = filteredBlog[0]
    
  return (
    <div className='max-w-3xl md:max-w-4xl bg-white text-black mx-4 md:mx-auto my-12 p-4 rounded-md flex justify-center flex-col gap-2 shadow-lg shadow-gray-300'>
        <h2 className='text-center font-bold text-md'>{singleBlog.title}</h2>
        <p className='text-sm'>{singleBlog.body}</p>
        <h6 className='text-slate-500 text-xs italic text-end'>{singleBlog.username}</h6>

        <Comments singleBlog = {singleBlog} />
        <FormComment singleBlog = {singleBlog} />
    </div>
  )
}

export default BlogDetails