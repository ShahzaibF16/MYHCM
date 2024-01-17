import React from "react";
import Marquee from "react-fast-marquee";
const BrandAreaOne = () => {
  return (
    <div className='about-area bg-light pt-5 pb-5'>
      <div className='container'>
        <div className='row justify-content-center mb-4'>
          <div className='col-xl-7 col-lg-9'>
            <div className='section-title text-center'>
              <h6 className='sub-title'>OUR CLIENTS</h6>
              <h2 className='title'>
                Embrace The Future<span> Of Work</span>  With Our Valued Clients.
              </h2>
            </div>
          </div>
        </div>
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
