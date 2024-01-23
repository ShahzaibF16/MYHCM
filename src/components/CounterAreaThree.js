import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterAreaThree = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className='counter-area bg-base pd-top-100 pd-bottom-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/27.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={40} /> K+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Users</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/28.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={15} /> +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Countries</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/29.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={14} /> +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Modules</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <div className='thumb'>
                  <img src='assets/img/icon/30.svg' alt='img' />
                </div>
                <h2 className='text-white mt-3 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={500} /> +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Worldwide Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaThree;
