import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assetes/slider.jpg";
import img2 from "../assetes/slider2.jpg";
import img3 from "../assetes/slider3.jpg";

const Hero = () => {
  // react-slick এর settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 rounded-xl overflow-hidden shadow-lg">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <img src={img1} alt="Hero 1" className="w-full h-[600px] object-cover" />
        </div>
        {/* Slide 2 */}
        <div>
          <img src={img2} alt="Hero 2" className="w-full h-[600px] object-cover" />
        </div>
        {/* Slide 3 */}
        <div>
          <img src={img3} alt="Hero 3" className="w-full h-[600px] object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
