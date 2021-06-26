import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const PackagesCard = ({
  Color,
  Title,
  Visit,
  Li1,
  Li2,
  Li3,
  ServiceCoverd,
  Tagline,
}) => {
  return (
    <div
      style={{
        background: "#bd6390",
      }}
      className=" PackageCardHeightandWidth rounded-2xl my-4"
    >
      <img
        style={{
          paddingLeft: "19%",
          transform: "rotate(280deg)",
        }}
        className="w-16 absolute z-20 top-24"
        src=""
        alt=""
      />

      <div
        style={{
          backgroundColor: "#fcddec",
          height: "98%",
        }}
        className=" w-full  rounded-2xl overflow-hidden relative "
      >
        <div
          style={{
            width: "4%",
            borderLeft: "450px solid transparent",
            borderRight: "450px solid transparent",
            borderTop: `210px solid ${Color}`,

            left: "-83.5%",
          }}
          className=" absolute"
        ></div>
        <div className="absolute w-full pt-2 ">
          <h1 className="text-white text-center text-6xl tracking-wider font-bolder">
            {Title}
          </h1>
          <h5 className="text-center text-4xl text-white font-medium">
            &#8377;{Visit}
          </h5>
        </div>

        <div
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: "#bd6390",
          }}
          className="w-32 h-32 bg-white absolute top-44 left-2/4 right-2/4 rounded-full border-2  "
        >
          <div className="flex flex-col items-center justify-center h-full">
            <img src="" className="w-12" alt="" />
            <h5
              style={{ color: "#bd6390", lineHeight: "45px" }}
              className="uppercase text-5xl text-center  "
            >
              CALL NOW !
            </h5>
          </div>
        </div>

        <div className="absolute w-full h-full">
          <div className="w-full h-full flex flex-col justify-end items-center">
            <h4
              style={{
                color: "#4d4d4d",
                maxWidth: "290px",
              }}
              className="text-2xl text-center p-4 px-2 pb-3 leading-7  "
            >
              {ServiceCoverd ? (
                <>
                  {" "}
                  Service Covered : <br></br>{" "}
                  <span
                    style={{ fontSize: "18px", lineHeight: "10px" }}
                    className=" text-center w-auto font-thin "
                  >
                    {ServiceCoverd}
                  </span>
                </>
              ) : (
                "Get Flat 20% Discount on all services upto Rs. 1000 / Order"
              )}{" "}
            </h4>
            <ul className="flex flex-col justify-center items-center">
              <li
                style={{
                  color: "#606062",
                }}
                className="text-lg flex items-center font-light "
              >
                <FaRegHandPointRight
                  style={{ color: "bd6390" }}
                  className="mr-2"
                />
                {Li1}
              </li>{" "}
              <li
                style={{
                  color: " #606062",
                }}
                className="text-lg flex items-center font-light "
              >
                <FaRegHandPointRight
                  style={{ color: "bd6390" }}
                  className="mr-2"
                />
                {Li2}
              </li>{" "}
              <li
                style={{
                  color: " #606062",
                }}
                className="text-lg flex items-center font-light "
              >
                <FaRegHandPointRight
                  style={{ color: "bd6390" }}
                  className="mr-2"
                />
                {Li3}
              </li>
            </ul>
            <div
              style={{ color: "#bd6390" }}
              className="py-4 w-full flex justify-evenly "
            >
              <button className="flex justify-center items-center bg-white p-0.5  w-28  lg:w-32 h-9 text-2xl font-bold rounded-xl">
                DETAILS
              </button>
              <button
                style={{ background: "#bd6390" }}
                className="flex justify-center items-center text-white p-0.5   w-28  lg:w-32 h-9 text-2xl font-bold rounded-xl"
              >
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
