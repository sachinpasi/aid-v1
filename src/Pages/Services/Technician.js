import React from "react";
import Banner from "../../Components/PagesComponents/Technicians/Banner";
import TechnicianProfile from "../../Components/PagesComponents/Technicians/TechnicianProfile";
import MainWrapper from "../../Components/Wrapper/MainWrapper";
import Features from "../../Components/PagesComponents/Technicians/Features";

const Technician = () => {
  return (
    <MainWrapper>
      <Banner />
      <Features />
      <TechnicianProfile />
    </MainWrapper>
  );
};

export default Technician;
