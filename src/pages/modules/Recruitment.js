import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterOne from "../../components/FooterOne";
import NavBar from "../../components/NavBar";
import RecruitmentDetails from "../../components/modules/RecruitmentDetails";

const EmployeeProfile = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Recruitment"} />

      {/* Service Details Area */}
      <RecruitmentDetails />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default EmployeeProfile;
