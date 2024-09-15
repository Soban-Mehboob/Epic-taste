import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
    return(
        <>
        <section className='contact' id='contact'>
            <h1 className='contact-heading'>Contact
                <span>Us</span>
            </h1>
            <div className='row'>
            <iframe
class="map"
src="https://www.google.com/maps/embed?
pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.
8480109!3d41.2802068!3m2!111024!21768!4f13.
1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonal
d&#39;
s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
allowfullscreen=""
loading="lazy"
></iframe>
<form>
    <h3>Get In Touch</h3>
    <div className='inputBox'>
        <span><FaUser /></span>
        <input type='text' placeholder='name' />
    </div>
    <div className='inputBox'>
        <span><MdEmail /></span>
        <input type='email' placeholder='email' />
    </div>
    <div className='inputBox'>
        <span><IoCall /></span>
        <input type='number' placeholder='number' />
    </div>
    <input type='submit' value="contact now" className='form-btn' />
</form>
            </div>
        </section>
        </>
    )
}

export default Contact 