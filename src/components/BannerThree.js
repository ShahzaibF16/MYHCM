import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_f6rbgeo", //YOUR_SERVICE_ID
        "template_w91oxvd", //YOUR_TEMPLATE_ID
        form.current,
        "oNZZAG-q3Fu1rPRGZ" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Message Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className='banner-area bg-relative banner-area-2 bg-cover'
        // style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}
      >
        <img className='bg-img-2' src='assets/img/banner-3/4.png' alt='img' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='banner-inner pe-xl-5'>
                <h6
                  className='subtitle '
                  data-aos='fade-right'
                  data-aos-delay='100'
                  data-aos-duration='1500'
                >
                  YOUR LEAP INTO THE WORLD OF DIGITAL HR
                </h6>
                <h1
                  className='title'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1500'
                >
                   <span>Revolutionizing </span> Workforce
                </h1>
                <p
                  className='content pe-xl-5'
                  data-aos='fade-right'
                  data-aos-delay='250'
                  data-aos-duration='1500'
                >
                  Embrace the future with our Modern, Agile, and Scalable
                  HR Software - Powered by Microsoft Azure
                </p>
                {/* <Link
                  className='btn btn-border-base '
                  data-aos='fade-right'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  to='/about'
                >
                  Get Free Demo <FaPlus />
                </Link> */}
                <Toaster position='bottom-center' reverseOrder={false} />
                <form className='mt-2'  ref={form} onSubmit={sendEmail}>
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
                      <button type="submit" className='btn btn-border-base mt-2' href='#'>
                        Get Free Demo <FaPlus />
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            <div className='col-lg-6 col-md-10 align-center'>
              <div
                className='banner-thumb-3'
                data-aos='fade-left'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                <div className='main-img-wrap'>
                  {/* <img
                    className='banner-animate-img banner-animate-img-1 left_image_bounce'
                    src='assets/img/banner-3/33.png'
                    alt='img'
                  />
                  <img
                    className='banner-animate-img banner-animate-img-2 left_image_bounce'
                    src='assets/img/banner-3/22.png'
                    alt='img'
                  /> */}
                  <img
                    className='main-img left_image_bounce'
                    src='assets/img/banner-3/first.png'
                    alt='img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
    </>
  );
};

export default BannerThree;
