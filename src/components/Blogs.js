import React from 'react'
import {blog} from '../Data'

const Blogs=()=>{
    return(
        <>
<section className='blog' id="blog">
            <h1 className='blog-heading'>
                Our <span>Blogs</span>
            </h1>
            <div className='box-container'>
                {
                    blog.map((item,index)=>(
                        <div key={index} className='box'>
                            <div className='image'>
                                <img className='blog-img' src={item.img} alt=""/>
                                </div>
                                <div className='content'>
                                    <a href="" className='title'>
                                        tasty and refreshing
                                    </a>
                                    <span>by admin 21st may 2022</span>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.
                                    </p>
                                    <a href="" className='blog-btn'>Read more</a>
                                </div>
                        </div>
                    ))
                }                
            </div>
        </section>
        </>
    )
}

export default Blogs;