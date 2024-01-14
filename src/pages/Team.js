import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBarTwo from "../components/NavbarTwo";
import TeamAreaGroup from "../components/TeamAreaGroup";
import TeamDetailsGroup from "../components/TeamDetailsGroup";


const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBarTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Meet Our Amazing Team"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Team;
