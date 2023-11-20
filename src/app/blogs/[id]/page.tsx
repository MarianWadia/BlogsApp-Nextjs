import React, { FC } from 'react'
import Comments from "@/app/components/Comments"
import FormComment from '@/app/components/FormComment'
import {prisma, disconnect} from '@/libs/db'

interface blogDetailsPageProps{
  params: {
    id: string
  }
}

const getPost = async (params: {id: string}) =>{
  try {
    const singlePost = await prisma.post.findUnique({
      where: {id: params.id},
      include: {
        author: true
      }
    })
    return singlePost
  } catch (error) {
    console.error(error)
  }finally{
    await disconnect()
  }

}
const BlogDetails: FC<blogDetailsPageProps>= async ({params}) => {
  const singleBlog = await getPost(params)
  return (
    <div className='max-w-3xl md:max-w-4xl bg-white text-black mx-4 md:mx-auto my-12 p-4 rounded-md flex justify-center flex-col gap-2 shadow-lg shadow-gray-300'>
        <h2 className='text-center font-bold text-md'>{singleBlog?.title}</h2>
        <p className='text-sm'>{singleBlog?.body}</p>
        <h6 className='text-slate-500 text-xs italic text-end'>{singleBlog?.author?.name}</h6>

        <Comments singleBlog = {singleBlog} />
        <FormComment singleBlog = {singleBlog} />
    </div>
  )
}

export default BlogDetails