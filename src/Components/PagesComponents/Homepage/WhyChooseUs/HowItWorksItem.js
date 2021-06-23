import React from "react";

const HowItWorksItem = ({ No, Width, Title, Data }) => {
  return (
    <div
      style={{ width: Width }}
      className="w-full my-4 lg:my-0 h-full flex justify-evenly items-start"
    >
      <div
        style={{
          borderBottom: "4rem solid rgb(254,178,47)",
          borderRight: "25px solid transparent",
          height: " 0px",
          width: " 4.5rem",
          marginRight: " 15px",
          position: " relative",
        }}
      >
        <div
          style={{
            marginRight: "1rem",
            borderBottom: " 4rem solid #052138",
            borderRight: "25px solid transparent",
            width: "4rem",
            height: "4rem",
            position: "absolute",
          }}
        >
          <h1 className="flex justify-center items-center w-12 h-16 text-white absolute text-5xl">
            {No}
          </h1>
        </div>
      </div>

      <div
        style={{
          width: "70%",
        }}
        className=""
      >
        <h2 className="text-2xl font-semibold pb-1">{Title}</h2>
        <h5 className="text-xl text-gray-600">{Data}</h5>
      </div>
    </div>
  );
};

export default HowItWorksItem;
