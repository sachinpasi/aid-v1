import React from "react";
import Banner from "../Components/PagesComponents/Contact/Banner";
import CardSection from "../Components/PagesComponents/Contact/CardSection";
import MainWrapper from "../Components/Wrapper/MainWrapper";
import Form from "../Components/PagesComponents/Contact/Form";

const Contact = () => {
  return (
    <MainWrapper>
      <Banner />
      <CardSection />
      <Form />
    </MainWrapper>
  );
};

export default Contact;
