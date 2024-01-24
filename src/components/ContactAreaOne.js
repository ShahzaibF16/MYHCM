import React from "react";

const ContactAreaOne = () => {
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <div className='contact-area pd-bottom-60'>
        <div className='container'>
          <div className='contact-inner-1'>
            <img
              className='top_image_bounce animate-img-1'
              src='assets/img/banner/2.png'
              alt='img'
            />
            <img
              className='top_image_bounce animate-img-2'
              src='assets/img/about/6.png'
              alt='img'
            />
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src='assets/img/bg/4.png' alt='img' />
              </div>
              <div
                className='col-lg-4 wow animated fadeInRight'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  <h6 className='sub-title'>REQUEST FREE DEMO</h6>
                  <h2 className='title'>
                    Not Sure About <span>Automating</span> Your HRM?
                  </h2>
                  <p className='content'>
                    Complete the form and will schedule a demo for you to decide for yourself.
                  </p>
                  <form className='mt-4'>
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
                        <a
                          className='btn btn-border-base mt-0 w-100'
                          href='#'
                        >
                          Get a Free Demo
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
