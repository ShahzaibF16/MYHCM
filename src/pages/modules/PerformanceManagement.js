import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterOne from "../../components/FooterOne";
import NavBar from "../../components/NavBar";
import PerformanceManagementDetails from "../../components/modules/PerformanceManagementDetails";

const EmployeeProfile = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Performance Management"} />

      {/* Service Details Area */}
      <PerformanceManagementDetails />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default EmployeeProfile;
