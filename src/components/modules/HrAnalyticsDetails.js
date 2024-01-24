import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HrAnalyticsDetails = () => {
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
                    <img src='assets/img/modules/8.jpeg' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      HR Analytics and Reports- Providing a strong foundation for your strategic HR operations
                    </h4>
                    <p>
                      Elevate strategic HR operations with powerful analytics and real-time insights.
                      Make informed decisions effortlessly.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/9.jpeg' alt='img' />
                    </div>
                    <h4>Plan Better with Reliable Statistics With In-depth HR analytics and Reports</h4>
                    <p>
                      Enhance planning with MyHCM's HR analytics. Access reliable statistics: time, attendance,
                      headcount, leave, and more. Streamline operations with insightful reports for better
                      decision-making.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/10.jpeg' alt='img' />
                    </div>
                    <h4>Gain Deep Insights with Our HR Analytics</h4>
                    <p>
                      Deep insights, one platform. Access real-time HR analytics on attendance, performance, recruitment,
                      and more. Streamline decision-making with a broad spectrum of workforce data. Utilize Natural
                      Language Query and CRM Analytics for quick, strategic insights. Transform HR processes with comprehensive
                      reporting.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/10.jpeg' alt='img' />
                    </div>
                    <h4>Get Access To Current Customized Data</h4>
                    <p>
                      Access real-time, customized HR analytics with Microsoft BI tools. Gain insights instantly for informed decision-making. Generate HR reports in minutes. Elevate your organization's performance tracking effortlessly.
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

export default HrAnalyticsDetails;
