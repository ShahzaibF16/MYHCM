import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className='footer-area bg-margenta bg-cover'>
        <div className='footer-subscribe'>
          <div className='container'>
            <div
              className='footer-subscribe-inner bg-cover'
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className='row'>
                <div className='col-lg-6'>
                  <h2 className='mb-lg-0 mb-3'>Subscribe To Our Newsletter</h2>
                </div>
                <div className='col-lg-6 align-self-center text-lg-end'>
                  <input type='text' placeholder='Your e-mail address' />
                  <a className='btn btn-orange border-radius-0' href='#'>
                    Submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo2.png' alt='img' />
                </div>
                <div className='details'>
                  <p>
                    Leap into the World of Digital HR
                  </p>
                  <p className='mt-3'>
                    <FaPhoneAlt /> +92 308 3663053
                  </p>
                  <p className='mt-2'>
                    <FaEnvelope />  info@myhcm.pk
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href='https://www.facebook.com/profile.php?id=61554595533346&mibextid=LQQJ4d '>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/myhcmpk'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.instagram.com/myhc.m?igsh=MTZ1NnNmem5ycGV1eQ%3D%3D&utm_source=qr'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href=''>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Modules</h4>
                <ul>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Payroll
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> HR Analytics
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Employee Profile{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Leave Management
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Recruitments
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Time Attendance
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Voice Enabled Feature
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Company</h4>
                <ul>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Team
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Blog{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Careers
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Partners
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <ul>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/icon/15.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaCalendarAlt />
                          <span>Head Office Karachi</span>
                        </div>
                        <h6 className='title mb-0' style={{fontSize:"12px"}}>
                          <Link to='/blog-details'>
                            Mariam Khan | 0326-8042833 | 1D-203, Sector 30, Korangi Industrial Area, Karachi.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/icon/15.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaCalendarAlt />
                          <span>Regional Office Lahore</span>
                        </div>
                        <h6 className='title mb-0' style={{fontSize:"12px"}}>
                          <Link to='/blog-details'>
                            Amama Riaz | 0332-0482536 | 1st Floor، NTC Building، 6 Shahrah Aiwan-e-Sanat-o-Tijarat, G.O.R. - I, Lahore, Punjab 54000
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/icon/15.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaCalendarAlt />
                          <span>Regional Office Islamabad</span>
                        </div>
                        <h6 className='title mb-0' style={{fontSize:"12px"}}>
                          <Link to='/blog-details'>
                            Ahsan Amin | 0312-8706030 | A State Life Blg. 6، 60 Nazim-ud-din Rd, F 6/4 Blue Area, Islamabad, Islamabad Capital Territory, Pakistan
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© MyHCM 2024-25 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a href='#'>Terms &amp; Condition</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
