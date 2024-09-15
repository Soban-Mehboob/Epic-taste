import React from 'react'
import {review} from '../Data'
import quoteImg from '../assests/quotes.png'
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";

const Review = () =>{

    return(
        <>
        <section className='review' id="review">
            <h1 className='review-heading'>customer's <span>review</span></h1>
            <div className='box-container'>
                {review.map((item,index)=>(
                    <div className='box'>
                        <img src={quoteImg} alt='' className='quote' />
                        <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
                    </p>  
                    <img src={item.img} alt="" className='user'/>
                    <h3>John Doe</h3>
                    <div className='stars'>
                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><FaStarHalfAlt /></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Review