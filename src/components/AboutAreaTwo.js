import React from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutAreaTwo = () => {
  return (
    <>
      {/* =============== About Area Two End ===============*/}
      <div className='about-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
          <div
              className='col-lg-6 mb-4 mb-lg-0 '
              data-aos='fade-right'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner'>
                <img
                  className='main-img'
                  src='assets/img/about/aboutt.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ABOUT MYHCM</h6>
                <h2 className='title'>
                  Empowering you with Voice enable Feature
                </h2>
                <p className='content mb-4'>
                  Our app, which is available over android and iOS devices,
                  will allow employees to carry out a range of HR-Related
                  activities using voice-enabled assistants.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Order Around Through Dialogue
                      </li>
                      <li>
                        <FaCheckCircle /> Integration of Voice Assistants
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6'>
                    <ul className='single-list-inner style-check style-heading style-check mb-3'>
                      <li>
                        <FaCheckCircle /> Multiple Tasks are Performed
                      </li>
                      <li>
                        <FaCheckCircle /> Command Through Speech
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='content'>
                  The app is the first of its kind for many Southeast
                  Asia and South Asia markets to be integerated with
                  virtual assistants; Siri&trade; and Google Assistant&trade;.
                </p>
                <Link className='btn btn-border-base' to='#'>
                  Discover More <FaPlus />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== About Area Two End ===============*/}
    </>
  );
};

export default AboutAreaTwo;
