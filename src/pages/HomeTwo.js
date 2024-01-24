import React from "react";
import NavBar from "../components/NavBar";
import AboutAreaTwo from "../components/AboutAreaTwo";
import AboutAreaOne from "../components/AboutAreaOne";
import AboutAreaSix from "../components/AboutAreaSix";
import BannerThree from "../components/BannerThree";
import BlogAreaTwo from "../components/BlogAreaTwo";
import CaseStudyAreaTwo from "../components/CaseStudyAreaTwo";
import CounterAreaThree from "../components/CounterAreaThree";
import FooterOne from "../components/FooterOne";
import WorkProcessTwo from "../components/WorkProcessTwo";
import AboutAreaThree from "../components/AboutAreaThree";
import ContactAreaThree from "../components/ContactAreaThree";
import BrandAreaOne from "../components/BrandAreaOne";

const HomeTwo = () => {
  return (
    <>
      {/* Navigation Bar Two*/}
      {/* <NavbarTwo /> */}
      <NavBar />

      {/* Banner Two */}
      {/* <BannerTwo /> */}
      <BannerThree/>

      {/* Counter Area One */}
      <CounterAreaThree />
      {/* <CounterAreaFour /> */}

      {/* Contact Area One */}
      {/* <ContactAreaOne /> */}

      {/* Work Process Two */}
      <WorkProcessTwo/>

      {/* Contact Area Three */}
      <ContactAreaThree />
      
      {/* Service Domains */}
      <AboutAreaOne />

      {/* About Area Two */}
      <AboutAreaTwo />

      
      {/* Testimonial Two */}

      {/* option 2 */}
      {/* <CaseStudyAreaTwo /> */}

      {/* option 1 */}
      {/* <AboutAreaSix /> */}

      {/* About Area Three */}
      <AboutAreaThree />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Footer Two */}
      <FooterOne />
      {/* <FooterTwo /> */}
    </>
  );
};

export default HomeTwo;
