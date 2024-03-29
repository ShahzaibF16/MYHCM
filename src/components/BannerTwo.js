import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const BannerTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerTwo Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
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
                  Your Leap Into The World of Digital HR
                </h6>
                <h2
                  className='title '
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                  {""}
                  Revolutionizing <span>Workforce</span>
                </h2>
                <p
                  className='content pe-xl-5 '
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  Embrace the future with our Modern, Agile, and Scalable
                  HR software - powered by Microsoft Azure
                </p>
                <Link
                  className='btn btn-border-base '
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='#modules'
                >
                  All Modules <FaPlus />
                </Link>
                <div
                  className='d-inline-block align-self-center '
                  data-aos='fade-right'
                  data-aos-delay='350'
                  data-aos-duration='1500'
                ><Link to='/contact'>
                    <span
                      // onClick={() => setOpen(true)}
                      className='video-play-btn-hover'
                    >
                      <img src='assets/img/req.png' alt='img' />{" "}
                      <h6 className='d-inline-block'>Request a free Demo</h6>
                    </span>
                  </Link >
                  <div></div>
                </div>
                {/* <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  videoId='OQQ2KoLcmZI'
                  onClose={() => setOpen(false)}
                /> */}
              </div>
            </div>
            <div
              className='col-lg-6 col-md-9 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='banner-thumb-2 mt-4 mt-lg-0'>
                <img
                  className='banner-animate-img banner-animate-img-4'
                  src='assets/img/banner-2/3.png'
                  alt='img'
                />
                <div className='main-img-wrap'>
                  <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-2/4.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-2/5.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-3 top_image_bounce'
                    src='assets/img/banner-2/2.png'
                    alt='img'
                  />
                  <img
                    className='main-img'
                    src='assets/img/banner-2/first.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerTwo End ==================*/}
    </>
  );
};

export default BannerTwo;
