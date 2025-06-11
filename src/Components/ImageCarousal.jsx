import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "../Components/CSS/ImageCarousel.css"

import Image1 from "../lupinAssets/LupinAssets14.jpg";
import Image2 from "../lupinAssets/LupinAssets15.jpg";
import Image3 from "../lupinAssets/LupinAssets16.jpg";
import Image4 from "../lupinAssets/LupinAssets17.jpg";
import Image5 from "../lupinAssets/LupinAssets18.jpg";
import Image6 from "../lupinAssets/LupinAssets19.jpg";

const ImageCarousal = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  
  const slideRef= useRef(null);
  const [ActiveIndex, setActiveIndex]= useState(0)

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of images visible at once
    slidesToScroll: 1,// Number of images to scroll at once
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,// Hide the default arrows
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex)
  };
  const handlethumbnailClick=(index)=>{
    slideRef.current.slickGoTo(index)

  }

  return (
    <div className='slider-container' >
      <Slider ref={slideRef} {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
            
              src={src}
             
              alt={`image ${index + 1}`}
             className='CarousalImage'
             />
            {index === 1 && <div className='CarousalImage-text1'>
                <h3>Integrated Report <br /> FY 2023-2024.</h3>
                <button>Download Now</button>
            </div> }
            {index===2 &&  <div className='CarousalImage-text2'>
                <h3>For a Better <br /> Tomorrow.</h3>
                <button>Our Research</button>
                </div>}
                {index===3 && <div className='CarousalImage-text3'>
                <h3>For a Better <br /> Tomorrow.</h3>
                <button>Our Therapies</button>
                    </div>}
                    {index===4 && <div className='CarousalImage-text4'>
                <h3>For a Better <br /> Tomorrow.</h3>
                <button>Our Story</button>
                    </div>}
          </div>
        ))}
      </Slider>
      <div>
        
        <div className="thumbnail-container">
             {/* this is circular thumbnail feature. */}
            {images.map((src, index)=>(
                <div key={index} className="thumbnail-wrapper">
                    <img src={src}   alt={`thumbnail ${index+1}`}
                    className={`thumbnail ${index === ActiveIndex ? "active" : ""}`}
                    onClick={()=>handlethumbnailClick(index)}/>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousal;
