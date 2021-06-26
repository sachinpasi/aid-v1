import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const CardSection = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-80vw h-full mx-auto">
        <div className="w-3/4 h-auto my-8 -mt-1 mx-auto grid grid-cols-2 gap-4">
          <Card
            Name="CUSTOMER RELATED QUERY"
            Image="assets/images/contact/1.svg"
          />
          <Card Name="BUSINESS QUERY" Image="assets/images/contact/2.svg" />{" "}
          <Card
            Name="SUGGESTION GENERAL ENQUIRY"
            Image="assets/images/contact/3.svg"
          />{" "}
          <Card Name="TECH SUPPORT" Image="assets/images/contact/4.svg" />
        </div>
      </div>
    </section>
  );
};

export default CardSection;

const Card = ({ Name, Image }) => (
  <div className=" h-auto bg-white py-4  my-2 shadow-lg flex flex-col items-center justify-between">
    <img
      className="w-24 h-24 object-cover my-2 bg-gray-200 p-0.5 rounded-full"
      src={Image}
      alt=""
    ></img>
    <h2 className="text-3xl text-gray-700 text-center py-2">{Name}</h2>
    <div className="w-5/6 my-2 mx-auto flex justify-center items-center">
      <FaPhoneAlt className="text-4xl bg-green-400 text-white p-2 rounded-full cursor-pointer  mx-2" />
      <FaWhatsapp className="text-4xl bg-green-600 text-white p-2 rounded-full cursor-pointer  mx-2" />
    </div>
  </div>
);
