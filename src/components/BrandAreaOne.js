import React from "react";
import Marquee from "react-fast-marquee";
const BrandAreaOne = () => {
  return (
    <div className='about-area bg-light pt-5 pb-5'>
      <div className='container'>
        <div className='client-slider'>
          <Marquee gradient={false}>
            <div className='thumb'>
              <img src='assets/img/client/110.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/88.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/99.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/11.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/22.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/33.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/44.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/55.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/66.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/77.png' alt='img' />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaOne;
