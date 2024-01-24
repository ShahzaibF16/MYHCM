import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterOne from "../../components/FooterOne";
import NavBar from "../../components/NavBar";
import SelfEmployeeDetails from "../../components/modules/SelfEmployeeDetails";

const EmployeeProfile = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Employee Self Service (ESS)"} />

      {/* Service Details Area */}
      <SelfEmployeeDetails />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default EmployeeProfile;
