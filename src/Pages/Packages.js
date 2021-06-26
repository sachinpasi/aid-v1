import React from "react";
import Banner from "../Components/PagesComponents/Packages/Banner";
import Form from "../Components/PagesComponents/Packages/Form";
import KeyFeatures from "../Components/PagesComponents/Packages/KeyFeatures";
import MaintenancePackages from "../Components/PagesComponents/Packages/MaintenancePackages";

import MainWrapper from "../Components/Wrapper/MainWrapper";
const Packages = () => {
  return (
    <MainWrapper>
      <Banner />
      <KeyFeatures />
      <MaintenancePackages />
      <Form />
    </MainWrapper>
  );
};

export default Packages;
