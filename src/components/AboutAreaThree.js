import React from "react";
import Marquee from "react-fast-marquee";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutAreaThree = () => {
  return (
    <>
      {/* =============== About Area Three End ===============*/}
      <div className='about-area bg-gradient-gray pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner mb-4 mb-lg-0'>
                <img
                  className='main-img'
                  src='assets/img/about/aboutplay.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 wow animated fadeInRight'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Get Our<span> Mobile App</span> Now
                </h2>
                <p className='content mb-4'>
                  Experience user-friendly HR on the go. Stay connected with your teams effortlessly using our simple and accessible app
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the dum
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Mistakes To Avoid to the dum
                      </li>
                      <li>
                        <FaCheckCircle /> Your Startup industry stan
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  Our HRM software lets you focus on people rather
                  than on the processes.
                  Trusted By over 500 Customers Worldwide!
                  App is available on Android and iOS.
                </p>
                <Link className='btn btn-border-base' to='https://apps.apple.com/lk/app/microimage-hcm/id1267702412'>
                  APP STORE <FaPlus />
                </Link>
                <Link className='btn btn-border-base mx-2' to='https://play.google.com/store/apps/details?id=com.microimage.hcmv2'>
                  GOOGLE PLAY<FaPlus />
                </Link>
              </div>
            </div>
          </div>
          <div className='bg-base client-border-radius p-xl-5 p-3 mt-5'>
            <div className='client-slider'>
              <Marquee gradient={false}>
                <div className='thumb'>
                  <img src='assets/img/client/w1.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w2.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w3.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w4.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w5.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w6.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w7.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w8.png' alt='img' />
                </div>
                <div className='thumb'>
                  <img src='assets/img/client/w9.png' alt='img' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* =============== About Area Three End ===============*/}
    </>
  );
};

export default AboutAreaThree;
