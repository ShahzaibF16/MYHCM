import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* =================== Testimonial Two Start ===================*/}
      <div className='testimonial-area pd-top-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-9'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>CLIENT TALK</h6>
                <h2 className='title'>
                  Client’s Review For <span>Our Work</span> Satisfaction
                </h2>
              </div>
            </div>
          </div>
          <div className='testimonial-slider-2  slider-control-dots'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "MyHCM software has revolutionized our HR processes. It's incredibly user-friendly and has streamlined our workflows, making it easy to manage employee data, payroll, and performance evaluations. Our team is more efficient, and the support from the MyHCM team is unparalleled."
                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/15.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>Kantar</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "As an employee, I appreciate the transparency and accessibility that MyHCM provides. I can easily access my payroll information, submit leave requests, and track my performance goals. It's a user-friendly platform that empowers employees to take control of their HR-related activities."
                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/21.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>Bykea</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "Implementing MyHCM was a game-changer for our organization. The analytics and reporting tools provided valuable insights, helping us make informed decisions about our workforce. The comprehensive suite of features ensures that every aspect of HR is covered seamlessly."
                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/16.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>Techtix</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "Recruitment can be challenging, but with MyHCM, it became a breeze. The applicant tracking system simplified our hiring process, from posting jobs to onboarding. The system's automation features saved us time and allowed us to focus on finding the best candidates."
                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/19.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>YAHMI Facilities Management Services (UAE)</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "MyHCM’s robust security features were a key factor for us. The software is highly secure, ensuring the confidentiality of our sensitive HR data. The integration capabilities with other systems have made it an indispensable part of our IT infrastructure."
                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/17.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>ReachFirst</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "Training and development are crucial for us, and MyHCM excels in this area. The learning management system is intuitive, making it easy to create and track training programs. It has significantly contributed to the skill development of our workforce."                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/18.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>Starcom MediaVest Group</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "MyHCM has not only transformed our HR processes but also made a positive impact on our financial management. The payroll system is accurate, and the budgeting tools have helped us optimize our workforce costs effectively."                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/20.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>Thal Limited</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "Ensuring compliance with regulations is critical for us, and MyHCM's compliance features are top-notch. The system automatically updates to reflect changes in labor laws, helping us stay compliant without manual effort."                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/22.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>PMLTC</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "MyHCM is a perfect fit for small businesses. It's scalable, affordable, and covers all the essential HR functions. The self-service options empower our employees, and the support team has been fantastic in addressing our specific needs."
                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/23.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>H&M</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-inner style-2'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='icon mb-2'>
                        <img src='assets/img/icon/25.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      <p className='designation mb-0'>
                        "The implementation of MyHCM was smooth, and the system's cloud-based architecture ensures easy maintenance and updates. The customizable dashboards allow us to tailor the interface to our specific needs, providing a seamless experience for both administrators and end-users."                      </p>
                    </div>
                    <div className='col-sm-4 align-self-center text-sm-end mt-4 mt-sm-0'>
                      <div className='thumb d-inline-block'>
                        <img src='assets/img/testimonial/24.png' alt='img' />
                      </div>
                    </div>
                    <div className='col-sm-8 mt-4'>
                      <h5 className='mb-0'>zameen.com</h5>
                    </div>
                    <div className='col-sm-4 mt-sm-4'>
                      <div className='ratting-inner'>
                        <span>Rating:</span>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* =================== Testimonial Two End ===================*/}
    </>
  );
};

export default TestimonialTwo;
