import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainWrapper;
