import React from "react";
import image1 from "../../assets/images/slider-image-2.jpeg";
import image2 from "../../assets/images/slider-image-3.jpeg";
import image3 from "../../assets/images/grocery-banner.png";
import image4 from "../../assets/images/grocery-banner-2.jpeg";

import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed:4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='conteiner '>
      <div className="row flex flex-row my-3">
       <div className='w-2/3'>
       <Slider {...settings}>
       <img src={image3} className='w-full main-img' />
       <img src={image4} className='w-full main-img' /> 
       </Slider>
       </div>
       <div className='w-1/3'>
         <img src={image1} className='w-full second-img' />
         <img src={image2} className='w-full second-img' />
       </div>
        
      </div>
    </div>
  )

 
}
