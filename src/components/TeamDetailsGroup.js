import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamDetailsGroup = () => {
  return (
    <>
      {/* ================= TeamDetailsGroup Start =================*/}
      <div className='team-blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='team-details-page'>
            <div className='row'>
              <div className='col-lg-5 text-center'>
                <div className='thumb mb-4 mb-lg-0'>
                  <img src='assets/img/team/shahrukh.jpeg' alt='img' />
                </div>
              </div>
              <div className='col-lg-7 align-self-center ps-xl-5'>
                <h3 className='mb-2'>Shahrukh Nadeem</h3>
                <span className='designation'>Chief Executive Officer</span>
                <div className='details mt-4'>
                  <h4>Message</h4>
                  <p>
                    We want to help organizations in Pakistan take the digital leap in
                    terms of Human Resource Management.{" "}
                  </p>
                  <p>
                    It’s our goal to transform legacy HR into digital and more analytics
                    oriented organ of the organization. We strongly believe that HR is
                    the most critical and indispensable capital any organisation has
                    and we help it further channelise and optimise it through our Cutting
                    edge, Cloud based, Microsoft enabled and Intelligent HR software with
                    a robust and user friendly Mobile App.
                  </p>
                </div>
                <ul className='social-media style-base mt-4 pt-2'>
                  <li>
                    <a href='#'>
                      <FaFacebookF aria-hidden='true' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaLinkedinIn aria-hidden='true' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service area start */}
      {/* <div className='service-area bg-relative pd-bottom-90'>
        <div className='container'>
          <div className='section-title '>
            <h6 className='sub-title'>Service</h6>
            <h2 className='title'>My Service Here</h2>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/1.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>Mobile App Development</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/2.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>Content Marketing</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/service-icon/3.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/service-details'>E-commerce Solutions</Link>
                  </h5>
                  <p>
                    Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                    is simply is our busi Lorem is Ipsum is
                  </p>
                  <Link className='btn btn-border-base' to='/service-details'>
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* ================= TeamDetailsGroup End =================*/}
    </>
  );
};

export default TeamDetailsGroup;
