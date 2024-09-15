import React from 'react'
import aboutImg from '../assests/about.jpeg'
const About = () =>{
    return(
        <>
        <section className='about' id="about">
            <h1 className='heading-about'>
                <span className='head'>ABOUT</span> US
            </h1>
            <div className='row'>
                <div className='image'>
                  <img src={aboutImg} alt="" />  
                </div>
                <div className='content'>
                    <h3>
                        What Makes Our Food Special?
                    </h3>
                    <p>
                    Lorem Ipsum Dolor Sit Amet Consectetur adipisicing elit. Voluptatibus Qui
Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id
Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                    </p>
                    <p>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing elit. Odit Amet Enim
Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati
Sapiente?
                    </p> 
                    <a href='#' className='btn-about'>
                        Learn More
                    </a>
                </div>
            </div>

        </section>
        </>
    )
}

export default About