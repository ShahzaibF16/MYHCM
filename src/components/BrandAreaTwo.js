import React from "react";
import Marquee from "react-fast-marquee";

const BrandAreaTwo = () => {
  return (
    <div className='about-area bg-white mb-5 pt-5 pb-5'>
      <div className='container'>
        <div className='row justify-content-center mb-4'>
          <div className='col-xl-7 col-lg-9'>
            <div className='section-title text-center'>
              <h6 className='sub-title'>ONE SOLUTION, ENDLESS REACH</h6>
              <h2 className='title'>
                Navigate <span> HR Challenges</span>  With MyHCM Across Countries in Native Languages.
              </h2>
            </div>
          </div>
        </div>
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
