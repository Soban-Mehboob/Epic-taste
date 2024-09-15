import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const Footer = () => {
    return(
        <>
        <section className='footer' id='footer'>
            <div className='share'>
                <a href='#'><FaFacebookF /></a>
                <a href='#'><FaXTwitter /></a>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaLinkedin /></a>
                <a href='#'><FaPinterestP /></a>
            </div>
            <div className='links'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Menu</a>
            <a href='#'>Products</a>
            <a href='#'>Review</a>
            <a href='#'>Contact</a>
            <a href='#'>Blogs</a>
            </div>
            <div className='credit'>
                created by <span>soban</span>
            </div>
        </section>
        </>
    )
}

export default Footer