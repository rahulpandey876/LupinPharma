import React from 'react';
import './CSS/HealingHealthPage.css';
import RespiratoryImage from "../lupinAssets/LupinAssets20.jpg";
import CardiovascularImage from "../lupinAssets/LupinAssets21.jpg";
import TuberculosisImage from "../lupinAssets/LupinAssets22.jpg";
import DiabetesImage from "../lupinAssets/LupinAssets23.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HealingHealthPage = () => {
  return (
    <div className='HealingHealthPage'>
      <div className="HealingHealth-text">
        <h3>Healing and Health</h3>
        <p>Therapeutics that address the toughest challenges</p>
        <button>Explore</button>
      </div>
      <div className='HealingHealth-images'   >
        <div id='RespiratoryImage'data-aos="fade-up" data-aos-delay="400" >
          <LazyLoadImage
            src={RespiratoryImage}
          
            alt="RespiratoryImage"
            effect="blur"
            width={300}
            height={300}
          />
          <button id='RespiratoryButton'>Respiratory</button>
        </div>
        <div id='TuberculosisImage' data-aos="fade-up">
          <LazyLoadImage
            src={TuberculosisImage}
            alt="TuberculosisImage"
            effect="blur"
            width={300}
            height={300}
          />
          <button id='TuberculosisButton'>Tuberculosis(TB)</button>
        </div>
        <div id='CardiovascularImage' data-aos="fade-up">
          <LazyLoadImage
            src={CardiovascularImage}
            alt="CardiovascularImage"
            effect="blur"
            width={300}
            height={300}
          />
          <button id='CardiovascularButton'>Cardiovascular</button>
        </div>
        <div id='DiabetesImage' data-aos="fade-up">
          <LazyLoadImage
            src={DiabetesImage}
            alt="DiabetesImage"
            effect="blur"
            width={300}
            height={300}
          />
          <button id='DiabetesButton'>Diabetes</button>
        </div>
      </div>
    </div>
  );
};

export default HealingHealthPage;
