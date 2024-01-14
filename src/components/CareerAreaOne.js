import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CareerAreaOne = () => {
  return (
    <>
      {/* career area start */}
      <div className='career-section pd-top-120 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  Experience The <span>Power</span> Of Our Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className='career-wrap-area'>
            <nav>
              <div
                className='nav nav-tabs career-nav-tab'
                id='nav-tab'
                role='tablist'
              >
                <button
                  className='nav-link active'
                  id='nav-mission-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-mission'
                  type='button'
                  role='tab'
                  aria-controls='nav-mission'
                  aria-selected='true'
                >
                  Enhanced Productivity
                </button>
                <button
                  className='nav-link'
                  id='nav-vision-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-vision'
                  type='button'
                  role='tab'
                  aria-controls='nav-vision'
                  aria-selected='false'
                >
                  Time & Cost Efficiency
                </button>
                <button
                  className='nav-link'
                  id='nav-career-tab'
                  data-bs-toggle='tab'
                  data-bs-target='#nav-career'
                  type='button'
                  role='tab'
                  aria-controls='nav-career'
                  aria-selected='false'
                >
                  Intuitive Consolidated System
                </button>
              </div>
            </nav>
            <div className='tab-content' id='nav-tabContent'>
              <div
                className='tab-pane fade show active'
                id='nav-mission'
                role='tabpanel'
                aria-labelledby='nav-mission-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/about/199.png' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Enhanced Productivity</h3>
                      <p className='mb-3'>
                        Upgrade to our HRM software for smart time investment. Focus on people, not processes, enhancing team productivity efficiently. Go digital to boost organization productivity, eliminating extensive paperwork.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-vision'
                role='tabpanel'
                aria-labelledby='nav-vision-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/about/177.png' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Time & Cost Efficiency</h3>
                      <p className='mb-3'>
                        MyHCM's cloud-based HRM software ensures consistent team management anywhere. With controlled HR processes, it frees up time for essential tasks, allowing businesses to save significant effort and focus on priorities, leaving no room for pending projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='nav-career'
                role='tabpanel'
                aria-labelledby='nav-career-tab'
              >
                <div className='career-wrap'>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img src='assets/img/about/188.png' alt='img' />
                    </div>
                    <div className='col-lg-7'>
                      <h3 className='mb-3'>Intuitively Designed Consolidated System</h3>
                      <p className='mb-3'>
                        MyHCM's app, included with our HRM software, seamlessly integrates with a user-friendly interface. Employees access productivity features, centralizing HR information and saving time. Now, crucial data is readily available on a single platform, preventing oversight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* career area start */}
    </>
  );
};

export default CareerAreaOne;
