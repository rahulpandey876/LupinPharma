import React from 'react';
import './CSS/App.css'
import HomePage from './HomePage';
import TopbarPage from "./topbarpage";
import HeaderPage from "./headerpage";
import FooterPage from './FooterPage';

 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';






const App=()=>{

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // animate only once
    });
  }, []);

  return (
    <>
    <div className='App'>
      <div>
        <TopbarPage/>
        <HeaderPage/>
      </div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/aboutUs' element={<AboutUsPage/>}/>
    </Routes>
    <div>
    <FooterPage/>
    
    
    </div>
    </div>
    </>
  )
}

export default App