import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        // style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
        <img className='bg-img-2' src='assets/img/banner-3/4.png' alt='img' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  YOUR LEAP INTO THE WORLD OF
                </h6>
                <h2
                  className='title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                   <span>DIGITAL HR</span> REVOLUTIONIZING WORKFORCE
                </h2>
                <p
                  className='content pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  Embrace the future with our Modern, Agile, and Scalable
                  HR software - powered by Microsoft Azure
                </p>
                {/* <Link
                  className='btn btn-border-base '
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Get Free Demo <FaPlus />
                </Link> */}

                <form className='mt-2'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Name Here' name="user_name" required />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='email' placeholder='Email Here' name="user_email" required />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='phone' placeholder='Phone' name="user_phone" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Job Title/Designation' name="user_job" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Company Name' name="user_company" />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Industry' name="user_industry" />
                      </div>
                    </div>
                    <div className='col-12'>
                      <button type="submit" className='btn btn-border-base mt-2' href='#'>
                        Get Free Demo <FaPlus />
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            <div className='col-lg-6 col-md-10 align-center'>
              <div
                className='banner-thumb-3'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <div className='main-img-wrap'>
                  {/* <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-3/33.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-3/22.png'
                    alt='img'
                  /> */}
                  <img
                    className='main-img left_image_bounce'
                    src='assets/img/banner-3/fourth.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
    </>
  );
};

export default BannerThree;
