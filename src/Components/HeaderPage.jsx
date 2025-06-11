import React, { useState } from 'react'
import LupinLogo from "../lupinAssets/LupinLogo.png"
import "./CSS/HeaderPage.css"

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HeaderPage = () => {

  const [isOpen, setIsOpen]= useState(false)
  return (
   <>
    <div className='headerpage'>
     <Link to='/'> <img id='LupinLogo' src={LupinLogo} alt="LupinLogo" /></Link>
      <nav>
        <ul className='headerpage-list'>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li>Products</li>
          <li>Investors</li>
          <li>Community</li>
          <li>Careers</li>
        </ul>
      </nav>
      </div>
      <div className='hamburger-container'>
        {isOpen? <RxCross2 className='hamburgerMenu'onClick={()=>setIsOpen(!isOpen)}  />:<GiHamburgerMenu className='hamburgerMenu' onClick={()=>setIsOpen(!isOpen)}/>}
        
        
      </div>
     {isOpen &&  <nav className='headerpage-responsive'>
        <ul className='headerpage-list-responsive'>
          <li><Link to="/aboutUs">About Us <FaChevronDown id='RaiseArrow1' /></Link></li>
          <li>Products <FaChevronDown id='RaiseArrow2'/></li>
          <li>Investors <FaChevronDown id='RaiseArrow3' /></li>
          <li>Community</li>
          <li>Careers</li>
        </ul>
      </nav>}
      
      </>
  )
}

export default HeaderPage