import React from 'react'
import './CSS/TopbarPage.css'
import RaiseArrow from '../lupinAssets/RaiseArrow.png'
import Global from "../lupinAssets/Global.png"


const TopbarPage = () => {
  return (
    <nav className='topbarpage'>
      <ul className='topbarpage-list'>
        <li>BSE <img src={RaiseArrow} alt="RaiseArrow" /> 2046.30</li>
        <li>|</li>
        <li>NSE <img src={RaiseArrow} alt="RaiseArrow" /> 2049.00</li>
        <li>Media</li>
        <li>Contact Us</li>
        <li><img src={Global} alt="Global" /></li>
       
      </ul>
    </nav>
  )
}

export default TopbarPage