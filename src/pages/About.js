import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessFour from "../components/WorkProcessFour";
import MapImage from "../components/MapImage";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Why MyHCM"} />

      {/* About Area One */}
      {/* <AboutAreaOne /> */}

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Work Process One */}
      <WorkProcessFour />

      {/* Map Image */}
      <MapImage/>

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />      

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
