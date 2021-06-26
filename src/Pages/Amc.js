import React from "react";
import MainWrapper from "../Components/Wrapper/MainWrapper";
import Banner from "../Components/PagesComponents/Amc/Banner";
import Form from "../Components/PagesComponents/Amc/Form";
import WhyAmc from "../Components/PagesComponents/Amc/WhyAmc";

const Amc = () => {
  return (
    <MainWrapper>
      <Banner />
      <Form />
      <WhyAmc />
    </MainWrapper>
  );
};

export default Amc;
