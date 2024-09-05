import React from 'react'
import blogData from '../../fake/blog'
import { Link } from 'react-router-dom'

const Blog = () => {
  return <>
        <>
            <section className='w-full h-screen m-10'>
               <div className="container mx-auto">
               <div className="textty grid grid-cols-4 gap-16 mb-10">
                {
                    blogData.map((item)=>{
                        return(
                        <div key={item.id} className="blog1 bg-slate-400 w-[300px] h-[auto] rounded-md">
                        <div className="thumnail">
                            <img className='rounded-md w-full h-[350px] object-cover' src={item.photo} alt="" />
                        </div>

                        <div className="text-content p-3 ">
                            <h1 className='text-xl'>{item.title}</h1>
                            <Link className='py-3 px-10 inline-block bg-orange-500 mt-2 rounded-md  hover:bg-green-800 hover:text-white' to={`/blog/${item.id}`}>Learn More</Link>
                        </div>
                    </div>
                        )
                        
                        
                    })
                }
                    
                   
                </div>
               </div>
            </section>
        </>
  </>
}

export default Blog