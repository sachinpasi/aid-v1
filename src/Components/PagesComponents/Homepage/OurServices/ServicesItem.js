import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
const ServicesItem = ({ BgColor, Name, Image, To, Points }) => {
  return (
    <div className="relative lg:my-4">
      <div className="flex justify-center items-center">
        <h4 className="text-3xl text-center pb-4 font-normal">{Name}</h4>
      </div>
      <div
        style={{ width: "95%", background: BgColor }}
        className=" h-60 lg:h-64 flex justify-center items-center my-2 mx-auto"
      >
        <img
          loading="lazy"
          style={{
            width: "95%",
            height: "92%",
          }}
          className="object-cover shadow-md"
          src={Image}
          alt=""
        />
      </div>
      <ul className="relative py-2 w-auto  ml-6  list-disc text-lg  text-gray-600 ">
        {ReactHtmlParser(Points)}
      </ul>
      <div className="flex justify-center items-center absolute right-3 bottom-4 lg:bottom-2">
        <Link
          to={To ? `${To}` : `/`}
          className="bg-servicebutton text-xl font-semibold tracking-wider py-2 px-6 rounded-md text-gray-800 "
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServicesItem;
