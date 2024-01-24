import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PerformanceManagementDetails = () => {
  return (
    <>
      {/* ===================== Service Details Area start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> All Our Modules
                  </h5>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/employee-profile'>Employee Profile</Link>
                    </li>
                    <li>
                      <Link to='/employee-self-service'>Employee Self Service</Link>
                    </li>
                    <li>
                      <Link to='/hr-analytics'>HR Analytics & Reports</Link>
                    </li>
                    <li>
                      <Link to='/learning-management'>Learning Management</Link>
                    </li>
                    <li>
                      <Link to='/mobile-app'>Mobile App</Link>
                    </li>
                    <li>
                      <Link to='/recruitment'>Recruitment</Link>
                    </li>
                    <li>
                      <Link to='/time-management'>Time Management</Link>
                    </li>
                    <li>
                      <Link to='/organization-charts'>Organizational Charts</Link>
                    </li>
                    <li>
                      <Link to='/leave-management'>Leave Absence Management</Link>
                    </li>
                    <li>
                      <Link to='/performance-management'>Performance Management</Link>
                    </li>
                    <li>
                      <Link to='/payroll'>Payroll</Link>
                    </li>
                    <li>
                      <Link to='/voice-enabled'>Voice Enabled Mobile Services</Link>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/999.png' alt='img' />
                  </div>
                  <div className='details'>
                    <a className='btn btn-base border-radius-5' href='/about'>
                      Discover our company +
                    </a>
                  </div>
                </div>
                <div className='widget widget_download'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> Useful Links
                  </h5>
                  <ul>
                    <li>
                      <a href='/contact'>
                        {" "}
                        Get Free Demo <FaAngleDoubleRight />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        Play Store <FaAngleDoubleRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='assets/img/modules/24.jpg' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      Employee Journey at its Finest
                    </h4>
                    <p>
                      Elevate the employee journey with a social-media-style profile for streamlined HR
                      interactions. Centralized database and customizable modules empower employees to manage
                      information. Control access to appraisals, ratings, contracts, and benefits.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/23.jpg' alt='img' />
                    </div>
                    <h4>Create a Competitive Company Culture</h4>
                    <p>
                      MyHCM's Performance Management System enables real-time performance tracking, goal setting,
                      competency assessment, and fostering a competitive company culture. Streamline training, appraisal
                      processes, and potential assessments. Transform your HR processes with MyHCM's comprehensive and
                      user-friendly solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default PerformanceManagementDetails;
