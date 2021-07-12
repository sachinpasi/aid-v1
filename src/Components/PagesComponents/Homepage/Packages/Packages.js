import React from "react";

const Packages = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full flex-col lg:w-11/12 h-full mx-auto flex justify-center items-center py-20">
        <div className=" flex-col flex justify-center items-center">
          <h1 className=" text-center text-5xl w-5/6 lg:w-full pr-1 uppercase text-darkblue font-black ">
            Maintenance Packages
          </h1>
          <h3 className="text-center w-5/6 text-2xl lg:text-3xl text-gray-700 font-medium py-4">
            Choose One of our Maintenance Package, forget about call out fees
            and let us take care of all your household needs.
          </h3>
        </div>

        <div className="w-11/12 h-full grid grid-cols-1  lg:grid-cols-3 gap-10 mb-8">
          <Card
            Name="GREEN"
            Visit="999/20 VISITS"
            Points={[
              "Service delivery within 120 minutes",
              "Service call attendance on priorty",
              "Cover all Service & Repair Charges",
            ]}
          />
          <Card
            Name="GREEN+"
            Visit="2999/20 VISITS"
            Points={[
              "Service delivery within 120 minutes",
              "Service call attendance on priorty",
              "Cover all Service & Repair Charges",
            ]}
            ServiceCovered="AC,LED TV,Washing Machine,It,Electrical,Plumber,Gyser"
          />
          <Card
            Name="GREEN++"
            Visit="3999/12 VISITS"
            Points={[
              "Service delivery within 120 minutes",
              "Service call attendance on priorty",
              "Cover all Service & Repair Charges",
            ]}
            ServiceCovered="AC,LED TV,Washing Machine,It,Electrical,Plumber,Gyser"
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;

//

const Card = ({ Name, Visit, ServiceCovered, Points }) => (
  <div className=" w-full h-auto ">
    <div className="flex justify-end">
      <div
        style={{
          background: "#47c289",
        }}
        className="w-2/5 h-7 lg:h-9 rounded-t-4xl rounded-l-4xl "
      ></div>
    </div>
    <div
      style={{
        height: "360px",
      }}
      className="w-full flex "
    >
      <div className="w-6 h-full flex flex-col justify-end">
        <div
          style={{
            background: "#47c289",
          }}
          className="w-6 h-24 rounded-t-4xl "
        ></div>
      </div>
      <div
        style={{
          background: "#e1ffe3",
          borderRadius: " 32px 0 32px 0",
        }}
        className="w-full h-full flex flex-col justify-center items-center text-darkblue   "
      >
        <p className="text-3xl lg:text-5xl font-semibold">{Name}</p>
        <p className="text-2xl font-semibold">&#8377; {Visit}</p>
        <p
          style={{
            fontFamily: "Uniform Bold",
          }}
          className=" text-5xl lg:text-7xl font-black"
        >
          CALL NOW !
        </p>

        <p className=" text-base lg:text-xl w-11/12 text-center font-medium leading-5 ">
          {ServiceCovered ? (
            <>
              {" "}
              Service Covered : <br></br>{" "}
              <span
                style={{ fontSize: "18px", lineHeight: "10px" }}
                className=" text-center  font-thin w-full "
              >
                {ServiceCovered}
              </span>
            </>
          ) : (
            "Get Flat 20% Discount on all services upto Rs. 1000 / Order"
          )}{" "}
        </p>

        <ul
          style={{ listStyleType: "circle" }}
          className="bg-darkblue py-1 px-7 my-2 rounded-xl "
        >
          {Points?.map((item) => (
            <li className="text-white leading-5">{item}</li>
          ))}
        </ul>
        <div className="flex my-1 justify-between items-center w-10/12 lg:w-3/5">
          <button className="bg-white text-darkblue font-semibold text-lg tracking-wide px-5 rounded-lg border-4 border-darkblue w-24">
            DETAILS
          </button>
          <button className="bg-white text-darkblue font-semibold text-lg tracking-wide px-5 rounded-lg border-4 border-darkblue w-24">
            BUY
          </button>
        </div>
      </div>
      <div>
        <div
          style={{
            background: "#47c289",
          }}
          className=" w-7 lg:w-9 h-28 rounded-b-4xl "
        ></div>
      </div>
    </div>
    <div className="flex justify-start">
      <div
        style={{
          background: "#47c289",
        }}
        className="w-2/6 h-6 rounded-b-4xl rounded-r-4xl "
      ></div>
    </div>
  </div>
);
