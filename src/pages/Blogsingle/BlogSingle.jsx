import React from 'react'
import blogData from '../../fake/blog'
import { useParams } from 'react-router-dom'


const BlogSingle = () => {
    const {postId}= useParams()
    const blog = blogData.find(data => data.id == postId)
  return <>
        <section className='w-full h-screen flex items-center'>
        <div className="main w-1/2 ">
           <div className={`main ${blog.bg} p-4 rounded-md text-center ms-8`}>
           <h1 className='text-5xl text-white'>{blog.title}</h1>
            <img className="w-[300px] h-[300px] my-4 m-auto object-cover" src={blog.photo}alt="" />
            <p className='text-light'>{blog.content}</p>
           </div>
        </div>
        </section>
  </>
}

export default BlogSingle