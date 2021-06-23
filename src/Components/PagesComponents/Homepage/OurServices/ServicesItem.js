import React from "react";

const ServicesItem = ({ BgColor, Name, Image }) => {
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
          style={{
            width: "95%",
            height: "92%",
          }}
          className="object-cover shadow-md"
          src={Image}
          alt=""
        />
      </div>
      <ul className="relative py-2 w-auto  ml-6  list-disc">
        <li className="text-lg  text-gray-600">AC Repair &amp; AC Service</li>
        <li className="text-lg  text-gray-600 ">
          AC Installation &amp; Gas-filling
        </li>
        <li className="text-lg w-7/12 lg:w-full  text-gray-700 font-semibold tracking-wide">
          Up to 90-Days Aid24x7 Repair Warranty
        </li>
      </ul>
      <div className="flex justify-center items-center absolute right-3 bottom-4 lg:bottom-2">
        <button className="bg-servicebutton text-xl font-semibold tracking-wider py-2 px-6 rounded-md text-gray-800 ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServicesItem;
