import React from "react";

const ContactAreaThree = () => {
  return (
    <>
      {/* ========================= contact Area Three start =========================*/}
      <div className='price-process-area pd-top-120'>
        <div className='contact-inner-1 contact-inner-2'>
          <div className='row'>
            <div
              className='col-lg-6 '
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <img className='w-100' src='assets/img/about/geofenced.png' alt='img' />
            </div>
            <div
              className='col-lg-4'
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0'>
                <h6 className='sub-title'>ATTENDANCE MANAGEMENT SYSTEM</h6>
                <h2 className='title mb-4'>
                  Geo Fenced <span>Attendance</span> Management
                </h2>
                <div className='media mb-3'>
                  <div className='media-left me-3'>
                    <img src='assets/img/icon/26.png' alt='img' />
                  </div>
                  <div className='media-body'>
                    <h5>Mark Attendance </h5>
                    <p className='mb-0'>
                      Mark your attendance with MyHCM's geofenced
                      and geotagged attendance on your mobile device.
                    </p>
                  </div>
                </div>
                <div className='media mb-3'>
                  <div className='media-left me-3'>
                    <img src='assets/img/icon/26.png' alt='img' />
                  </div>
                  <div className='media-body'>
                    <h5>Current Location</h5>
                    <p className='mb-0'>
                      Open mobile app, go to time tile, map will
                      pop up signifying your current location.
                    </p>
                  </div>
                </div>
                <div className='media'>
                  <div className='media-left me-3'>
                    <img src='assets/img/icon/26.png' alt='img' />
                  </div>
                  <div className='media-body'>
                    <h5>Check In/Out</h5>
                    <p className='mb-0'>
                      Just check in / out and thats it, your
                      attendance is marked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*========================= contact-inner Three end =========================*/}
    </>
  );
};

export default ContactAreaThree;
