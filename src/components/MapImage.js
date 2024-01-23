import React from "react";

const MapImage = () => {
    return (
        <>
            <div className='map-image-area pd-bottom-60'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='section-title mb-4 mt-4 mt-lg-0 text-center'>
                            <h6 className='sub-title'>GLOBALIZE</h6>
                            <h2 className='title'>
                                Our  <span>Team</span>
                            </h2>
                            <p className='content'>
                                A global team united by the mission of solving challenges with tailored, localized solutions.                </p>
                        </div>
                        <div
                            className='col-lg-8 mb-4 mb-lg-0'
                            data-aos='fade-right'
                            data-aos-delay='200'
                            data-aos-duration='1500'
                        >
                            <img
                                className='main-img w-100'
                                src='assets/img/banner/map.jpg'
                                alt='img'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapImage;
