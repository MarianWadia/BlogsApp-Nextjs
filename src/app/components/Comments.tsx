import React from 'react'

interface blogType {
    id: number;
    title: string;
    body: string;
    username: string;
}

const Comments = ({clickedBlog}: any) => {
  return (
    <div className='bg-gray-100 mt-8 p-2 rounded-md'>
        <h3 className='font-semibold'>Comments</h3>
        <ul className='m-4 flex flex-col gap-2'>
            <li className='bg-slate-300 p-2 text-sm rounded-lg'>
               <div className='flex flex-row items-center gap-2'>
                    <h3 className='text-blue-500 font-semibold'>{clickedBlog.username}</h3>
                    <h3 className='text-gray-700 font-semibold' >11-November-2023</h3>
               </div>
               <p className='mt-2 px-2'>Very Nice!!</p>
            </li>
        </ul>
    </div>
  )
}

export default Comments