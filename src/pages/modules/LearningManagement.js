import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterOne from "../../components/FooterOne";
import NavBar from "../../components/NavBar";
import LearningManagementDetails from "../../components/modules/LearningManagementDetails";

const EmployeeProfile = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Learning Management"} />

      {/* Service Details Area */}
      <LearningManagementDetails />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default EmployeeProfile;
