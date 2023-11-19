"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { FormData } from '@/types/blog'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const inputClass = `w-full p-2 rounded border border-gray-300 border-2 focus:outline-none 
    focus:border-blue-400 text-black`
    
const NewPostForm = () => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        body: ""
    })

    const [post, setPost] = useState(null)
    const router = useRouter()
    const handleChange = (e: ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = async (e: FormEvent <HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const response = await axios.post('/api/post', formData);
            if(response.status === 200){
                const post = await response.data
                setPost(post)
                router.push(`/blogs/${post.createdPost.id}`)                
            }
        } catch (error) {
            console.error(error)
        }
    }
    const {data} = useSession()

  return (
    <form className='max-w-3xl mx-auto p-4 bg-gray-200 flex flex-col gap-4 rounded-md justify-center items-center' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Post Title Here' className={inputClass} name="title" 
             value={formData.title} onChange={handleChange}/>
        <ReactTextareaAutosize className={inputClass} placeholder='Enter Post body Here' name='body' 
            minRows={5} value={formData.body} onChange={handleChange}/>
        <button disabled={data?.user?.email? false : true} type='submit'className='bg-green-500 w-28 md:w-1/4 p-1 rounded-md text-l md:font-semibold hover:bg-green-800 transition-all disabled:bg-gray-400'>
            Submit
        </button>
    </form>
  )
}

export default NewPostForm