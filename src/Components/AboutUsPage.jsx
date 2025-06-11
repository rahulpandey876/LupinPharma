import React, { useState } from 'react'
import AboutusImg from '../lupinAssets/LupinAboutUsImg.png'
import "./CSS/AboutUsPage.css"

const AboutUsPage = () => {
    const [Showmore, setShowmore]= useState(false)
    const Fulltext= `Lupin’s journey is a testament to the potential of human imagination, compassion, and the unwavering pursuit of a better tomorrow. Established in 1968 by our visionary founder, Dr. Desh Bandhu Gupta, Lupin has evolved from humble beginnings to become a global healthcare leader.

Headquartered in Mumbai, India, Lupin is a global pharmaceutical leader with a footprint across the U.S., LATAM, APAC, EMEA and India, with products distributed in over 100 markets. With a diverse portfolio of over 1,200 products, Lupin remains committed to its mission of making quality healthcare accessible to the communities we serve. Our visionary Founder, Dr. Desh Bandhu Gupta, instilled in us the importance of offering quality, affordable and innovative medicines and being a responsible corporate citizen, making a positive difference to patients, communities and the environment.

Lupin has a network of 15 manufacturing sites, 7 research centers, and a dedicated workforce of over 22,000 professionals. The company places emphasis on business excellence, R&D and innovation, patient centricity and quality and compliance to consistently deliver value to our stakeholders. Lupin has also been at the forefront of leveraging digital solutions to serve patient needs.

Our efforts have positioned Lupin as a leader in generics, branded generics, complex generics, APIs, biosimilars and specialty medicines. With a specialized portfolio that includes branded and generic formulations, biologic products and active pharmaceutical ingredients, the company enjoys leadership positions in India, the U.S. and several other key markets focused on therapeutic areas such as respiratory, cardiovascular, anti-diabetic, anti-infective, gastrointestinal, central nervous system and women’s health.

Lupin is committed to improving patient health outcomes through its adjacencies – Lupin Diagnostics, Lupin Digital Health and Atharv Ability.

Lupin Human Welfare and Research Foundation is a testament to the company’s commitment to enriching communities and enhancing both Lives and Livelihoods. Through initiatives across 4,771 villages in eight states of India, we have positively impacted the lives of over 1.57 Mn people.

Our strides in the ESG journey have propelled Lupin to the forefront of the global pharmaceutical industry, where we rank in the top 5 percent. With a DJSI score of 69, we stand as a beacon of sustainability and responsible corporate citizenship, setting new standards for excellence in the pharma sector.

At Lupin, we continue to stride ahead in our quest for excellence and remain committed to creating meaningful and impactful health outcomes that benefit patients and communities alike.`

const Halftext= Fulltext.slice(0,280) + "...."


  return (
    <div className='AboutUsPage'>
        <img loading='lazy' src={AboutusImg} alt="AboutusImg" />
        <h1><span>About Lupin</span></h1>
        <p id='para1'>Driven by Science, Inspired by patients</p>
        <p id='para2'>{Showmore?Fulltext:Halftext }</p>
        <button onClick={()=>setShowmore(!Showmore)}>{Showmore?"Show Less": "Show More"}</button>
    </div>
  )
}

export default AboutUsPage