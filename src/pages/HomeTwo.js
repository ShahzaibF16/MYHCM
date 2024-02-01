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
import BrandAreaTwo from "../components/BrandAreaTwo";

const HomeTwo = () => {
  return (
    <>
      {/* <NavbarTwo /> */}
      <NavBar />
      {/* <BannerTwo /> */}
      <BannerThree/>     
      <BrandAreaOne />
      {/* <CounterAreaFour /> */}
      {/* <ContactAreaOne /> */}
      <WorkProcessTwo/>
      <BrandAreaTwo />
      <ContactAreaThree />    
      {/* Service Domains */}
      <AboutAreaOne />
      {/* About Area Two */}
      <AboutAreaTwo />
      <CounterAreaThree />
      {/* option 2 */}
      {/* <CaseStudyAreaTwo /> */}
      {/* option 1 */}
      {/* <AboutAreaSix /> */}
      <AboutAreaThree />
      <BlogAreaTwo />
      <FooterOne />
      {/* <FooterTwo /> */}
    </>
  );
};

export default HomeTwo;
