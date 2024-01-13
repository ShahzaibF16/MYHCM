import React from "react";
import Marquee from "react-fast-marquee";
const BrandAreaOne = () => {
  return (
    <div className='about-area bg-gray pt-5 pb-5'>
      <div className='container'>
        <div className='client-slider'>
          <Marquee gradient={false}>
            <div className='thumb'>
              <img src='assets/img/client/10.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/8.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/9.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/1.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/2.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/3.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/4.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/5.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/6.png' alt='img' />
            </div>
            <div className='thumb'>
              <img src='assets/img/client/7.png' alt='img' />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaOne;
