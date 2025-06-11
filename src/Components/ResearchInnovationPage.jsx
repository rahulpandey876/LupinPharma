import React, { useState } from 'react'
import "./CSS/ResearchInnovationPage.css"
import ResearchInnovationImg from '../lupinAssets/LupinAssets27.jpg'
import Manufacturing from '../lupinAssets/LupinAssets28.jpg'

const ResearchInnovationPage = () => {
  const [showResearchInnovation, setShowResearchInnovation] = useState(true);
  const [showManufacturing, setShowManufacturing] = useState(false);

  const handleRI= ()=>{
   
    setShowManufacturing(false);
    setShowResearchInnovation(true)
  }

  const handleManufacturing=()=>{
    setShowResearchInnovation(false)
    setShowManufacturing(true)
  }
  return (
    <div className='ResearchInnovationPage'>
      <div className='ResearchInnovationPage-header'>
        <button className={showResearchInnovation? "Showbtn1": "btn1"} id='btn1' onClick={handleRI}>Research & Innovation</button>
        <button className={showManufacturing?"Showbtn2":"btn2"} id='btn2' onClick={handleManufacturing}>Manufacturing</button>
      </div>
      <div className='ResearchInnovationPage-content'>
      {showResearchInnovation && <div className='ResearchInnovationPage-content-RI'>
      
         <img id='ResearchInnovationImg' src={ResearchInnovationImg} alt="ResearchInnovationImg" />
         <div className='ResearchInnovation-content-RI-text'>
         <h4>Research & Innovation</h4>
          <p>our Research & innovation capabilities drive our leadership position across the globe</p>
          <button>Explore</button>
         </div>
         
        </div>}

        
       {showManufacturing &&  <div className='ResearchInnovationPage-content-Manufacturing'>
        <img src={Manufacturing} alt="ManufacturingImg" />
         <div className='Manufacturing-content-RI-text'>
          <h4>Manufacturing</h4>
          <p>our global manufacturing footprint helps us deliver quality pharmaceutical around the world</p>
          <button>Explore</button>
         </div>
         </div>}
        </div>
        </div>

     
  )
}

export default ResearchInnovationPage