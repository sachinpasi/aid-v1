import React from "react";

import TestimonialItem from "./TestimonialItem";

const Tesitimonials = () => {
  return (
    <>
      <section className="w-full h-full">
        <div class="w-full flex-col lg:w-11/12 h-full mx-auto flex justify-center items-center py-4">
          <div className="flex justify-evenly  lg:w-full">
            <h1 className="text-5xl uppercase font-bold w-auto text-darkblue">
              Our Testimonials
            </h1>
            <span
              className="hidden lg:visible"
              style={{
                width: "70%",
                borderBottom: "3px solid rgb(204, 204, 204",
              }}
            ></span>
          </div>

          <div className="flex flex-col my-4 lg:flex-row justify-evenly w-full items-center">
            <TestimonialItem
              Image="assets/images/homepage/testimonials/Prashant.png"
              Name="Prashant"
              Msg="Thanks Team Aid24x7.com for providing TV technician,
             delivered quality services at reasonable cost.
             Is was a very seamless experience and saved my energy,
              money and efforts for getting a reliable & quick service."
            />
            <TestimonialItem
              Image="assets/images/homepage/testimonials/Tanya.png"
              Name="Tanya"
              Msg="Thanks Team Aid24x7.com for providing TV technician,
             delivered quality services at reasonable cost.
             Is was a very seamless experience and saved my energy,
              money and efforts for getting a reliable & quick service."
            />
          </div>
        </div>
      </section>
      <section className=" lg:h-16 flex flex-col lg:flex-row py-4 lg:py-0 bg-darkblue mb-1 justify-center items-center ">
        <h5 className=" text-2xl lg:text-3xl py-1 lg:mr-4 text-white text-center">
          Get the latest news and special offers
        </h5>
        <div className="w-11/12 lg:w-2/4  h-auto lg:h-10 flex flex-col lg:flex-row justify-center items-center">
          <input
            style={{ width: "400px" }}
            className=" w-full h-9 px-1 my-4 lg:my-0 lg:h-full rounded bg-white lg:px-4 lg:mx-2 text-xl"
            type="email"
            placeholder="Enter Your Email Address"
          ></input>
          <button className="w-28 lg:w-24 h-10 lg:h-full bg-darkyellow text-darkblue font-extrabold text-xl rounded ">
            SUBMIT
          </button>
        </div>
      </section>
    </>
  );
};

export default Tesitimonials;
