import React from 'react';
import "./Test.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className='test'>
      <div className='row'>
        <div className='col-lg-12 margin'>
          <h2 className='text-white text-center'>Testinonimal</h2>
        </div>
      </div>
      <div className='container mt-4'>
          <Slider {...settings}>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 box1">
              <div className="body">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit,
                  maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
                </p>
                <div>
                  <p>Lorem ipsum <br/><span>Lorem ipsum</span></p>
                  </div>         
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 box1">
              <div className="body">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit,
                  maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”</p>
                  <div>
                  <p>Lorem ipsum <br/><span>Lorem ipsum</span></p>
                  </div>    
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 box1">
              <div className="body">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit,
                  maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”</p>
                  <div>
                  <p>Lorem ipsum <br/><span>Lorem ipsum</span></p>
                  </div>    
              </div>
            </div>
          </Slider>
      </div>
    </section>
  )
}

export default Test;