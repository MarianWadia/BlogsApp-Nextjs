"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { ChangeEvent, FormEvent, useState } from 'react'

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
  } | null | undefined;
  
  interface MyComponentProps {
    singleBlog: BlogType | null;
  }

const FormComment: React.FC<MyComponentProps> = ({singleBlog}) => {
    const [comment, setComment] = useState<string>("")
    const { data } = useSession()

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const {value, name} = e.target
        name ==='comment' && setComment(value)
    }

    const handleSubmit = async () => {
      const response = await axios.post('/api/comment', {
          text: comment,
          postId: singleBlog?.id,
          userId: singleBlog?.authorId
        })
        const data = await response.data;
        console.log(data);
        setComment('')
    }
  return (
    <div>
        <div className='flex flex-col gap-3'> 
            <label htmlFor="">Add Comment</label>
            <div className='flex flex-row w-full'>
                <input type="text" name='comment' 
                    placeholder='add your comment here' 
                    className='w-4/6 md:w-5/6 mx-4 outline-none border border-gray-300 p-2 focus:outline-1 text-sm'
                    value={comment}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit} disabled={data?.user?.email? false : true}
                        className='bg-green-500 md:px-2 rounded-md text-sm md:text-md font-semibold text-cyan-50 w-2/6 md:w-1/6
                         hover:bg-green-900 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                    submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default FormComment