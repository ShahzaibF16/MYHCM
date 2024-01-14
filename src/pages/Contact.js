import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterOne from "../components/FooterOne";
import NavBarTwo from "../components/NavbarTwo";

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBarTwo />

      {/* Navigation Bar */}
      <Breadcrumb title={"Get A Free Demo"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Contact;
