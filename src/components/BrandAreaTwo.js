import React from "react";
import Marquee from "react-fast-marquee";

const BrandAreaTwo = () => {
  return (
    <div className='about-area bg-white mb-5 pt-5 pb-5'>
      <div className='container'>
        <div className='client-slider'>
          <Marquee gradient={false}>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-06.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-02.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-03.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-07.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-01.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-04.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-06.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-02.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-03.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-07.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-04.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/gallery/FLAGS-01.png' alt='img' />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaTwo;
