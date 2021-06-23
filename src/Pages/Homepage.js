import React from "react";

import Banner from "../Components/PagesComponents/Homepage/Banner";
import MainWrapper from "../Components/Wrapper/MainWrapper";
import ServicesCarowsel from "../Components/PagesComponents/Homepage/ServicesCarosal/ServicesCarowsel";
import SelectServices from "../Components/PagesComponents/Homepage/SelectServices";
import OurServices from "../Components/PagesComponents/Homepage/OurServices/OurServices";
import WhyChooseUs from "../Components/PagesComponents/Homepage/WhyChooseUs/WhyChooseUs";
import Packages from "../Components/PagesComponents/Homepage/Packages/Packages";
import Discount from "../Components/PagesComponents/Homepage/Discount/Discount";
import DownloadApp from "../Components/PagesComponents/Homepage/DownloadApp/DownloadApp";
import Tesitimonials from "../Components/PagesComponents/Homepage/Testimonials/Tesitimonials";

const Homepage = () => {
  return (
    <MainWrapper>
      <Banner />
      <ServicesCarowsel />
      <SelectServices />
      <OurServices />
      <WhyChooseUs />
      <Packages />
      <Discount />
      <DownloadApp />
      <Tesitimonials />
    </MainWrapper>
  );
};

export default Homepage;
