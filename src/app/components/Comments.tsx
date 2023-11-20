import React from 'react'


type Author ={
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
} | null;
type BlogType = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  authorId: string;
  author: Author;
} | null

interface MyComponentProps {
  singleBlog: BlogType | null;
}

const Comments :React.FC<MyComponentProps> = ({singleBlog}) => {
  return (
    <div className='md:mt-8 p-2 rounded-md'>
        <h3 className='font-semibold'>Comments</h3>
        <ul className='m-2 md:m-4 flex flex-col gap-2'>
            <li className='bg-slate-300 p-2 text-sm rounded-sm'>
               <div className='flex flex-row items-center gap-2'>
                    <h3 className='text-blue-500 font-semibold'>{singleBlog?.author?.name}</h3>
                    <h3 className='text-gray-700 font-semibold' >11-November-2023</h3>
               </div>
               <p className='mt-2 px-2'>Very Nice!!</p>
            </li>

            <li className='bg-slate-300 p-2 text-sm rounded-sm'>
               <div className='flex flex-row items-center gap-2'>
                    <h3 className='text-blue-500 font-semibold'>{singleBlog?.author?.name}</h3>
                    <h3 className='text-gray-700 font-semibold' >11-November-2023</h3>
               </div>
               <p className='mt-2 px-2'>Very Nice!!</p>
            </li>

            <li className='bg-slate-300 p-2 text-sm rounded-sm'>
               <div className='flex flex-row items-center gap-2'>
                    <h3 className='text-blue-500 font-semibold'>{singleBlog?.author?.name}</h3>
                    <h3 className='text-gray-700 font-semibold' >11-November-2023</h3>
               </div>
               <p className='mt-2 px-2'>Very Nice!!</p>
            </li>
        </ul>
    </div>
  )
}

export default Comments