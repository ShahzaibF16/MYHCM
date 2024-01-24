import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FooterOne from "../../components/FooterOne";
import NavBar from "../../components/NavBar";
import LeaveManagementDetails from "../../components/modules/LeaveManagementDetails";

const EmployeeProfile = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Leave Absence Management"} />

      {/* Service Details Area */}
      <LeaveManagementDetails />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default EmployeeProfile;
