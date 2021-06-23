import React from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialItem = ({ Msg, Name, Image }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full  lg:w-5/12 ">
      <div className="w-full lg:w-5/12 h-full m-4 relative overflow-hidden">
        <img
          className="w-3/6 h-3/6 mx-auto  lg:w-full lg:h-full rounded-full lg:rounded-none object-cover"
          src={Image}
          alt=""
        />
        <h2 className="testimonialName relative w-2/4 mx-auto lg:w-full mt-4 lg:mt-0 lg:absolute">
          {Name}
        </h2>
      </div>
      <div className="w-11/12 lg:w-7/12 italic leading-6 text-gray-500 text-lg ">
        <FaQuoteLeft className="text-gray-600 pr-2 text-4xl" />
        {Msg}
        <FaQuoteRight className="text-gray-600 pr-2 text-4xl" />
      </div>
    </div>
  );
};

export default TestimonialItem;
