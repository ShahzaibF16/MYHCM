import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LeaveManagementDetails = () => {
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
                    <img src='assets/img/modules/16.jpeg' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      Augmented Accuracy of Employee Leave & Absence Management
                    </h4>
                    <p>
                      Elevate leave and absence management accuracy. Recognize various absence types,
                      identify trends, and enhance performance monitoring. Streamline tasks, free up HR
                      professionals for more significant work, and eliminate errors. Adopt a paper-free,
                      eco-friendly solution with transparent leave request submissions. Accurately generate
                      reports and analyses for organizational insights. Transform your HR experience with MyHCM.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/17.jpeg' alt='img' />
                    </div>
                    <h4>Categorizing Employee Leave & Absence Types</h4>
                    <p>
                      Customize absence types and categories effortlessly. Link recurring or nonrecurring elements with
                      input values in hours/days. Set up absence benefit plans for systematic leave management. Employees
                      and managers can enter/view absences, and HR professionals can upload/view information from timecards.
                      Streamline reporting by distinguishing between absence types and categories. Manage paid time off accruals
                      with flexible plans tailored to your organization's needs. Simplify employee leave and absence management
                      with MyHCM.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/16.jpeg' alt='img' />
                    </div>
                    <h4>Management of Paid Time Off Accruals</h4>
                    <p>
                      Streamline absence reporting effortlessly. Access multiple templates to track and analyze absence trends.
                      'Absences and Leave Reports' provide detailed insights for individuals or entire enterprises. Automated reports
                      ensure accuracy in analyzing absence patterns and employee performance during leave. MyHCM offers flexibility
                      in absence supervision and paid time off accrual plans, allowing you to set rules based on your unique needs.
                      Take control of recording and managing absences efficiently with MyHCM.
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

export default LeaveManagementDetails;
