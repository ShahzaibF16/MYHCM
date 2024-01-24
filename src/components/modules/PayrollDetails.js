import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PayrollDetails = () => {
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
                    <img src='assets/img/modules/4.jpeg' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      Provision of an Intuitive Payroll Software
                    </h4>
                    <p>
                      Get acquainted with our payroll software’s exceptional features.
                    </p>
                    <p>
                      Fulfills country-specific statutory requirements with easy to manage system plug-in developed to handle centralized multi-country payroll administrations.
                      Advance built-in system integration tools and features user-friendly transaction maintenance and easy integration with Microsoft Excel spreadsheets.
                      Highly optimized payroll software processing to manage large workforce integrated system alerts and notifications.
                      Employs Development Framework Payroll Formula editor to build or edit your complete payroll formulas.
                      Integrates 3rd party external functions into the formula generation to allow you to embed your own localized policies into the system.
                      Able to use the Microsoft SQL server to advance user-defined functions and data storage to customize and create new policies inside the payroll software.
                    </p>
                    <div className='thumb'>
                      <img src='assets/img/modules/5.jpeg' alt='img' />
                    </div>
                    <h4>Compensation Management</h4>
                    <p>
                      Design comprehensive compensation packages aligned with your organization’s needs and execute them using data consolidated by MyHCM.
                      Define compensation components–base pay, bonuses, allowances to measure the total payment with the facility of pay ranges, according to the employee hierarchy, service years, and contract categories through the payroll software.
                      Eliminate manual benefit remunerations, audits, payout benefits with payroll and ensure all employees are in the correct corresponding plans.
                      Assign medical, entertainment, and other fringe benefits to the employees eligible for these benefits.
                    </p>
                    {/* <div
                      className='accordion accordion-inner accordion-icon-left mt-3 mb-4'
                      id='accordionExample'
                    >
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                          <button
                            className='accordion-button'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            What services do you offer?
                          </button>
                        </h2>
                        <div
                          id='collapseOne'
                          className='accordion-collapse collapse show'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            How long does it take for you to complete a project?
                          </button>
                        </h2>
                        <div
                          id='collapseTwo'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingTwo'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            How much does it cost to work with your agency?
                          </button>
                        </h2>
                        <div
                          id='collapseThree'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <h4>Employee Journey at its Finest</h4>
                    <p>
                      The standard employee tab offered by MyHCM bears resemblance to a classic
                      social media profile. To simplify, it is a summary of the fundamental data
                      unique to a staff member.
                    </p>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='thumb'>
                          <img src='assets/img/modules/1.jpeg' alt='img' />
                        </div>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> It consists of an employee’s contact information that proves to be helpful for other users of the same employee management system.
                          </li>
                          <li>
                            <FaCheckCircle /> You are allowed to add a professional profile picture and fill in your personal or work-based information such as phone number, position, organization, and email address.
                          </li>
                          <li>
                            <FaCheckCircle /> There is a wide range of modules that can be hooked to a single profile.
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-12'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle />The option to restrict access to certain information to employees of the same organization is available to all staff members.
                          </li>
                          <li>
                            <FaCheckCircle /> You have the control to decide who views related appraisals, competency ratings, contracts, and benefits.
                          </li>
                          <li>
                            <FaCheckCircle /> The database is centralized which creates a way of connecting all dots for the people involved and the management itself.
                          </li>
                        </ul>
                      </div>
                    </div> */}
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

export default PayrollDetails;
