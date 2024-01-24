import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";


const ContactMain = () => {
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
      {/* ================= Contact Main start =================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='contact-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6 order-lg-end '
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='about-thumb-inner ms-xl-5 p-xl-5 pt-4 '>
                <img
                  className='animate-main-img'
                  src='assets/img/about/18.png'
                  alt='img'
                />
                <img
                  className='main-img m-4'
                  src='assets/img/about/119.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 order-lg-first '
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='section-title mb-0 mt-5 mt-lg-0'>
                <h6 className='sub-title'>GET IN TOUCH</h6>
                <h2 className='title'>
                  Request Your<span> Free</span> Demo Now!
                </h2>
                <p className='content'>
                  Ready to experience the MyHCM's difference? Fill out the form
                  below to request your free demo. One of our experts will reach
                  out to schedule a personalized session tailored to your
                  business needs.
                </p>
                <form className='mt-4' ref={form} onSubmit={sendEmail}>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Name Here' name="user_name" required/>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='email' placeholder='Email Here' name="user_email" required/>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='phone' placeholder='Phone' name="user_phone"/>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Job Title/Designation' name="user_job"/>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Company Name' name="user_company"/>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='single-input-inner style-border'>
                        <input type='text' placeholder='Industry' name="user_industry"/>
                      </div>
                    </div>
                    {/* <div className='col-lg-12'>
                      <div className='single-input-inner style-border'>
                        <textarea placeholder='Your Queries' defaultValue={""} />
                      </div>
                    </div> */}
                    <div className='col-12'>
                      <button type="submit" className='btn btn-border-gray mt-0' href='#'>
                        Get Free Demo <FaPlus />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/18.png' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Call for Help</h5>
                  <h6>+92 308 3663053</h6>
                  <h6>+92 326 8042833</h6>
                  <h6>+92 332 0482536</h6>
                  <h6>+92 312 8706030</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/17.png' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Email Us</h5>
                  <h6>harissaeed@myhcm.pk</h6>
                  <h6>mariam@myhcm.pk</h6>
                  <h6>amama@myhcm.pk</h6>
                  <h6>ahsan@myhcm.pk</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/icon/16.png' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Head Office</h5>
                  <h6>1D-203, Sector 30 Korangi Industrial Area,
                    Karachi, Sindh, Pakistan</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1080489389155!2d67.10145059999999!3d24.825978300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b85c7478c37%3A0x923a4510a9697ad1!2s1%2C%20Sector%2030%20Korangi%20Industrial%20Area%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074900!5e0!3m2!1sen!2s!4v1705259554778!5m2!1sen!2s' />
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
