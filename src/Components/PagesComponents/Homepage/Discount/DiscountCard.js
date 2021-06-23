import React from "react";

const DiscountCard = ({ Code, Percent, line, Bg, TagBg, BorderColor }) => {
  return (
    <div
      style={{
        background: Bg,
      }}
      className=" w-11/12 h-72 mx-auto md:w-72 md:h-72 lg:w-80 lg:h-80 my-4 flex flex-col"
    >
      <div
        style={{
          borderColor: BorderColor,
        }}
        className="border-2 border-dashed h-full m-3"
      >
        <div className="flex justify-center items-center mx-auto">
          <div
            style={{
              width: " 0px",
              height: "0px",
              borderBottom: "25px solid rgb(55, 52, 53)",
              borderLeft: "15px solid transparent",
              marginTop: "-28.5%",
            }}
          ></div>
          <div
            style={{
              background: TagBg,
              width: " 65%",
              height: "72px",
              marginTop: "-13%",
              borderRadius: "0px 0px 20px 20px",
            }}
          >
            <h2 className="text-2xl text-white font-medium py-0.2 text-center">
              PROMO CODE
            </h2>
            <h1 className="text-4xl text-white font-black text-center">
              {Code}
            </h1>
          </div>
          <div
            style={{
              width: " 0px",
              height: "0px",
              borderBottom: "25px solid rgb(55, 52, 53)",
              borderRight: "15px solid transparent",
              marginTop: "-28.5%",
            }}
          ></div>
        </div>
        <div className="h-4/5 text-center flex justify-center items-center flex-col mx-auto">
          <h5 className="text-4xl py-0.3 tracking-wide">FLAT</h5>
          <h3 className="text-5xl py-0.3">{Percent} OFF</h3>
          <p
            className="text-xl font-normal py-1 w-8/12
          "
          >
            {line}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
