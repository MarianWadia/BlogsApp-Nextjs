import {prisma, disconnect} from '@/libs/db';
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
} | null | undefined;

interface MyComponentProps {
  singleBlog: BlogType | null;
}


interface commentType {
    id: string;
    text: string;
    createdAt: Date;
    userId: string;
    postId: string;
}

const getComments = async (singleBlog: BlogType) =>{
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc"
      },
      where: {
        postId: singleBlog?.id
      }
    })
    return comments;
  } catch (error) {
    console.error(error);
  }finally{
    await disconnect()
    
  }
}
const Comments :React.FC<MyComponentProps> = async ({singleBlog}) => {
  const comments = await getComments(singleBlog)

  console.log(comments)
  return (
    <div className='md:mt-8 p-2 rounded-md'>
        <h3 className='font-semibold'>Comments</h3>
        <ul className='m-2 md:m-4 flex flex-col gap-2'>
          {comments&&comments.length>0&&comments?.map((comment: commentType)=>(
            <li className='bg-slate-300 p-2 text-sm rounded-sm' key={comment.id}>
              <div className='flex flex-row items-center gap-2'>
                  <h3 className='text-blue-500 font-semibold'>{singleBlog?.author?.name}</h3>
                  <h3 className='text-gray-700 font-semibold' >{comment?.createdAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</h3>
              </div>
              <p className='mt-2 px-2'>{comment?.text}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Comments