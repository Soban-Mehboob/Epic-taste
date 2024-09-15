import React, { useRef, useState, useEffect } from 'react';
import Logo from "../assests/logo.jpeg";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { cart } from '../Data.js';

const Navbar = () => {

  // State for header background change on scroll
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
  };

  return (
    <>
      <header className={`header ${headerScrolled ? 'scrolled' : ''}`}>
        <a href='#' className='logo'>
          <img className='img-logo' src={Logo} alt="Logo" />
        </a>
        <nav className='navbar' ref={navbarRef}>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#menu'>Menu</a>
          <a href='#products'>Products</a>
          <a href='#review'>Review</a>
          <a href='#contact'>Contact</a>
          <a href='#blogs'>Blogs</a>
        </nav>
        <div className='icons'>
          <div onClick={searchHandler}><CiSearch /></div>
          <div onClick={cartHandler}><FaCartShopping /></div>
          <div id="menu-btn" onClick={navbarHandler}><FaBars /></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type='search' placeholder='Search here...' id="search-box" />
        </div>
        <div className='cart-items-container' ref={cartRef}>
          {
            cart.map((item, index) => (
              <div key={index} className='cart-item'>
                <span className='times'><FaTimes /></span>
                <img className='menu-imgs' src={item.img} alt="Cart Item" />
                <div className='content'>
                  <h3>{item.name}</h3>
                  <div className='price'>${item.price}</div>
                </div>
              </div>
            ))
          }
          <a className='button-1' href='#'>Checkout Now</a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
