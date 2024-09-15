import React from 'react'
import {product} from '../Data'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";

const Product = () =>{
   
    return(
        <>
        <section className='products' id="products">
            <h1 className='product-heading'>
                Our <span>Products</span>
            </h1>
            <div className='box-container'>
                {
                    product.map((item,index)=>(
                        <div className='box'>
                            <div className='icons'>
                                <a href='#'><FaShoppingCart /></a> 
                                <a href='#'><FaHeart /></a> 
                                <a href='#'><FaEye /></a> 
                            </div>
                            <div className='image'>
                                <img className='product-img' src={item.img} alt=""/>
                                </div>
                                <div className='content'>
                                    <h3>Fresh food</h3>
                                    <div className='stars'>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><IoStarSharp /></a>
                                    <a href="" ><FaStarHalfAlt /></a>
                                    
                                    </div>
                                    <div classname="price">
                                        $15.99 <span>$20.99</span>
                                    </div>
                                </div>
                        </div>
                    ))
                }                
            </div>
        </section>
        </>
    )
}

export default Product