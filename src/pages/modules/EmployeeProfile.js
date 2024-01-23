import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterOne from "../../components/FooterOne";
import NavBar from "../../components/NavBar";
import EmployeeProfile from "../../components/modules/EmployeeProfile";

const EmployeeProfile = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Employee Profile"} />

      {/* Service Details Area */}
      <EmployeeProfile />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default EmployeeProfile;
