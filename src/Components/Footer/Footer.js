import React from "react";
import { FaHandshake, FaBlog, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import FooterLink from "./FooterLink";
import SocialIcon from "../Navbar/SocialIcon";
import ServicesLink from "./ServicesLink";
import { useState } from "react";

const Footer = () => {
  const [ShowAllServices, setShowAllServices] = useState(false);
  const HandleToggle = () => setShowAllServices(!ShowAllServices);
  return (
    <footer
      style={{
        background: "url(assets/images/footer/bg.jpg) rgb(8, 48, 79)",
        backgroundBlendMode: "multiply",
        backgroundPosition: "0% 0%",
        backgroundSize: "cover",
      }}
      className="w-full  "
    >
      <div className="w-11/12 h-auto lg:h-64 mx-auto flex-col lg:flex-row flex justify-between items-start relative text-white pb-2">
        <div className="w-full lg:w-1/6 my-8 lg:mt-4 flex justify-center items-center">
          <div className="flex w-3/4 lg:w-auto justify-center items-center flex-col h-full ">
            <img
              className="w-52 lg:w-11/12 h-28 object-contain py-2 px-4 bg-white border-4 border-yellow-400"
              src="assets/images/Logo.png"
              alt=""
            ></img>
            <div
              style={{
                background: "url(assets/images/footer/messagebox.png)",
              }}
              className="hidden absolute bottom-10 w-48 lg:flex justify-center items-center flex-col bg-contain h-16 bg-no-repeat"
            >
              <h2
                style={{
                  marginTop: "-20px",
                }}
                className="text-lg text-center text-darkblue font-semibold py-1"
              >
                Home Maintenanece
              </h2>
              <h1
                style={{
                  marginTop: "-10px",
                }}
                className="text-xl text-darkyellow text-center font-semibold"
              >
                Easy Hai..!!
              </h1>
            </div>
          </div>
        </div>

        <div
          style={{ height: "95%" }}
          className="w-11/12 lg:w-36  flex flex-col justify-between items-start "
        >
          <h2 className="text-white w-full font-semibold text-xl lg:text-2xl uppercase py-4 text-left">
            About Us
          </h2>
          <div className="flex justify-center items-center flex-col h-full">
            <p className="text-lg text-white font-thin text-left py-1 leading-5  ">
              We Are Aid 24x7 We Provide Quality Service On Demand and Customer
              Satisfaction Is Our Moto !!!
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto  h-full flex justify-between">
          <div className="w-56 h-auto flex flex-col justify-between items-start ">
            <h2 className="w-full text-left text-white text-xl lg:text-2xl font-semibold uppercase py-4">
              information link
            </h2>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <FooterLink Name="ABOUT" URL="/about" />
                <FooterLink Name="Contact us" URL="/contact" />
                <FooterLink Name="Packages" URL="/packages" />
                <FooterLink Name="Carrer" URL="/carrer" />
              </div>

              <div className="py-8 lg:py-0  flex justify-between">
                <a
                  className="flex justify-center items-center py-2 px-3 w-36 lg:w-40 bg-darkyellow text-darkblue font-semibold text-base lg:text-xl whitespace-nowrap rounded-md"
                  href="/"
                >
                  <FaHandshake className="text-darkblue text-2xl pr-1" />
                  Partner with Us
                </a>
              </div>
            </div>
          </div>

          <div className="w-52 h-auto flex flex-col justify-between items-start ">
            <h2 className="text-left text-white font-semibold text-xl lg:text-2xl uppercase py-4 ">
              SERVICE LINK
            </h2>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col">
                <FooterLink Name="Feedback" URL="/" />
                <FooterLink Name="Track Ticket" URL="/" />
                <FooterLink Name="Privacy Policy" URL="/" />
                <FooterLink Name="Terms of services" URL="/" />
              </div>

              <div className="py-8 lg:py-0  flex justify-between">
                <a
                  className="flex justify-center items-center py-2 px-4 w-36 lg:w-40 bg-darkyellow text-darkblue font-semibold text-base lg:text-xl rounded-md"
                  href="/"
                >
                  <FaBlog className="text-darkblue text-2xl pr-1" />
                  Blogs
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start h-full">
          <h2 className="text-white w-full font-semibold text-xl lg:text-2xl uppercase py-4 text-left">
            DOWNLOAD MOBILE APP
          </h2>

          <div className="flex justify-between h-auto">
            <Link className="text-white text-xl py-0.5 px-1 uppercase" to="/">
              <img
                className="w-32"
                src="assets/images/footer/appstore.png"
                alt=""
              ></img>
            </Link>{" "}
            <Link className="text-white text-xl py-0.5 px-1 uppercase" to="/">
              <img
                className="w-32"
                src="assets/images/footer/playstore.png"
                alt=""
              ></img>
            </Link>
          </div>
          <h2 className=" py-4 lg:py-2 text-white font-semibold text-xl lg:text-2xl uppercase">
            Follow us
          </h2>
          <div className="w-4/5 flex justify-between items-center">
            <SocialIcon To="/" Color="#4267B2" Icon={FaFacebook} />
            <SocialIcon To="/" Color="#1DA1F2" Icon={FaTwitter} />
            <SocialIcon To="/" Color="#e1306c" Icon={FaInstagram} />
            <SocialIcon To="/" Color="#FF0000" Icon={FaYoutube} />
          </div>
          <div className="pt-6 pl-1">
            <a
              className="text-2xl uppercase text-white flex items-center "
              href="tel:1800 150 150"
            >
              <FaPhoneAlt className="text-2xl border-2 border-green-500 rounded-full w-9 h-9 p-1 text-green-500 mr-4 -mt-1" />
              1800 150 150
            </a>
          </div>
        </div>
      </div>
      <span className="w-screen border-b-2 border-gray-300"></span>
      <div className="hidden  w-11/12 h-auto lg:h-48 mx-auto lg:flex flex-col lg:flex-row justify-between items-start relative text-white pb-2">
        <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
          <ServicesLink Name="Ac Service" To="/" />
          <ServicesLink Name="Refrigerator Repair" To="/" />
          <ServicesLink Name="Washing Machine Repair" To="/" />
          <ServicesLink Name="Microwave owen repair" To="/" />
        </div>
        <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
          <ServicesLink Name="LED TV Repair" To="/" />
          <ServicesLink Name="LED TV Installation" To="/" />
          <ServicesLink Name="Geyser Service" To="/" />
          <ServicesLink Name="RO Service" To="/" />
        </div>
        <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
          <ServicesLink Name="IT Repair Service" To="/" />
          <ServicesLink Name="Refrigerator Repair" To="/" />
          <ServicesLink Name="Refrigerator Repair" To="/" />
          <ServicesLink Name="Washing Machine Repair" To="/" />
        </div>
        <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
          <ServicesLink Name="Ac Service" To="/" />
          <ServicesLink Name="Refrigerator Repair" To="/" />
          <ServicesLink Name="Washing Machine Repair" To="/" />
          <ServicesLink Name="Microwave owen repair" To="/" />
        </div>
      </div>

      <div className="visible lg:hidden w-11/12 h-auto lg:h-48 mx-auto flex flex-col lg:flex-row justify-between items-start relative text-white pb-2">
        {ShowAllServices ? (
          ""
        ) : (
          <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
            <ServicesLink Name="Ac Service" To="/" />
            <ServicesLink Name="Refrigerator Repair" To="/" />
            <ServicesLink Name="Washing Machine Repair" To="/" />
            <ServicesLink Name="Microwave owen repair" To="/" />
          </div>
        )}

        <div className="w-full" onClick={HandleToggle}>
          {ShowAllServices ? (
            <h2 className=" flex items-center justify-center py-4 lg:py-2 w-full text-center text-white font-semibold text-xl lg:text-2xl uppercase">
              SHOW LESS <AiFillUpCircle className="ml-4 -mt-1" />
            </h2>
          ) : (
            <h2 className=" flex items-center justify-center py-4 lg:py-2 w-full text-center text-white font-semibold text-xl lg:text-2xl uppercase">
              SHOW ALL SERVICES
              <AiFillDownCircle className="ml-4 -mt-1" />
            </h2>
          )}
          {ShowAllServices && (
            <>
              <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
                <ServicesLink Name="Ac Service" To="/" />
                <ServicesLink Name="Refrigerator Repair" To="/" />
                <ServicesLink Name="Washing Machine Repair" To="/" />
                <ServicesLink Name="Microwave owen repair" To="/" />
              </div>
              <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
                <ServicesLink Name="LED TV Repair" To="/" />
                <ServicesLink Name="LED TV Installation" To="/" />
                <ServicesLink Name="Geyser Service" To="/" />
                <ServicesLink Name="RO Service" To="/" />
              </div>
              <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
                <ServicesLink Name="IT Repair Service" To="/" />
                <ServicesLink Name="Refrigerator Repair" To="/" />
                <ServicesLink Name="Refrigerator Repair" To="/" />
                <ServicesLink Name="Washing Machine Repair" To="/" />
              </div>
              <div className="my-4 border-t-2 border-white w-full lg:w-1/4 flex flex-col items-start py-4 mb-0 lg:mb-4 lg:py-8 px-4">
                <ServicesLink Name="Ac Service" To="/" />
                <ServicesLink Name="Refrigerator Repair" To="/" />
                <ServicesLink Name="Washing Machine Repair" To="/" />
                <ServicesLink Name="Microwave owen repair" To="/" />
              </div>
            </>
          )}
        </div>
      </div>
      <hr className="h-0.3 bg-white" />
      <div className="w-full flex justify-center items-center py-4 ">
        <p
          style={{
            fontFamily: "Uniform Light",
          }}
          className="text-center text-white"
        >
          Copyright © 2021, All Rights Reserved AID 24x7
        </p>
      </div>
    </footer>
  );
};

export default Footer;
