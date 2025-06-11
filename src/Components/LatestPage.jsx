import React from 'react'
import './CSS/LatestPage.css'
import InvestorsImage from '../lupinAssets/LupinAssets15.jpg'
import PressReleaseImage from '../lupinAssets/LupinAssets24.jpg'
import AwardImage from '../lupinAssets/LupinAssets25.png'
import Announcements from '../lupinAssets/LupinAssets26.jpg'

const LatestPage = () => {
  const latestImages=[InvestorsImage,PressReleaseImage,AwardImage,Announcements]
  return (
    <div className='latestpage'>
      <h3>Latest from Lupin</h3>
      <div className='latest-images'>
       {latestImages.map((image , index)=>
        (
          <div key={index} className='latestimage'>
            <img src={image} alt={`image ${index+1}`} />
            <div className="overlay"></div>

            { index===0 &&  <div id='Investors'>
              <h4>INVESTORS</h4>
              <p>Integrated Report 2024</p>
              </div>}
              { index===1 &&  <div id='PressRelease'>
              <h4>PRESS RELEASE</h4>
              <p>Lupin Receives Approval from U.S. FDA for Raltegravir Tablets USP, 600mg</p>
              </div>}
              { index===2 &&  <div id='AwardsRecognition'>
              <h4>AWARDS AND RECOGNITION</h4>
              <p>Lupin Human Welfare and Research Foundation won the Best Social Welfare Initiative of the Year award, at the 13th Edition of CSR Summit &amp; Awards 2025, organized by UBS Forums Pvt. Ltd.</p>
              </div>}
              { index===3 &&  <div id='Announcements'>
              <h4>ANNOUNCEMENTS</h4>
              <p>Lupin Acquires Brands ONDERO and ONDERO MET to expand Diabetes Portfolio in India</p>
              </div>}
          </div>
        )
      )}
      </div>
    
  

  </div>
  )
}


export default LatestPage;