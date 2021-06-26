import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  return (
    <section className="my-16 bg-gray-100 w-full h-auto">
      <div className="flex justify-center items-center flex-col pt-8">
        <h2 className="text-5xl text-gray-700 text-center">GET IN TOUCH</h2>
        <p className="text-xl text-gray-500  text-center py-1">
          For any other query fill in the form below{" "}
        </p>
      </div>

      <div className="flex justify-between items-center w-3/5 mx-auto my-2">
        <Link
          className="w-8/25  flex justify-evenly items-center flex-col py-2 rounded-lg cursor-pointer"
          to="/"
        >
          <MdLocationOn
            style={{
              color: "rgb(87, 194, 252)",
            }}
            className="text-3xl h-8"
          />
          <p className="text-gray-500 font-thin text-xl py-4 text-center tracking-wider leading-5">
            Registered Office Sco No.6, <br /> Eldeco High Street, Sector-40,
            <br />
            Panipat- 132103
          </p>
        </Link>
        <Link
          className="w-8/25  flex justify-evenly items-center flex-col py-2 rounded-lg cursor-pointer"
          to="/"
        >
          <FaPhoneAlt
            style={{
              color: "rgb(244, 67, 54)",
            }}
            className="text-3xl h-8"
          />
          <p className="text-gray-500 font-thin text-xl py-4 text-center tracking-wider leading-5">
            +91-999-639-8965
          </p>
        </Link>
        <Link
          className="w-8/25  flex justify-evenly items-center flex-col py-2 rounded-lg cursor-pointer"
          to="/"
        >
          <MdEmail
            style={{
              color: "rgb(139, 195, 74)",
            }}
            className="text-3xl h-8"
          />
          <p className="text-gray-500 font-thin text-xl py-4 text-center tracking-wider leading-5">
            help@aid24x7.com
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Form;
