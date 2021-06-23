import React from "react";

const WhyChooseUsItem = ({ Data, Image }) => {
  return (
    <div className=" w-11/12 lg:w-72  flex justify-between items-center  h-36 border-b-2 border-gray-300 mx-2">
      <div
        style={{ width: "44%", height: "88%" }}
        className="flex justify-center items-center"
      >
        <img
          className=" w-11/12 h-3/4 mx-auto lg:w-full lg:h-full object-contain"
          src={Image}
          alt=""
        ></img>
      </div>
      <div style={{ width: "55%", textAlign: "justify" }}>
        <p className="-mt-1 text-sm font-normal leading-4 text-gray-500 ml-2">
          {Data}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsItem;
