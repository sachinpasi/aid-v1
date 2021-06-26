import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHandshake,
} from "react-icons/fa";
import {
  AiOutlineDownload,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import NavSaprator from "./NavSaprator";
import SocialIcon from "./SocialIcon";
import Navitem, { AuthNavItem } from "./Navitem";
import { useState } from "react";

const Navbar = () => {
  const [IsNavOpen, setIsNavOpen] = useState(false);

  const HandleNavToggle = () => setIsNavOpen(!IsNavOpen);
  const location = useLocation();
  return (
    <nav className="w-full">
      <div className="hidden lg:flex w-4/5  justify-between items-center ml-auto">
        <div className="flex py-0.5">
          <SocialIcon To="/" Color="#4267B2" Icon={FaFacebook} />
          <SocialIcon To="/" Color="#1DA1F2" Icon={FaTwitter} />
          <SocialIcon To="/" Color="#e1306c" Icon={FaInstagram} />
          <SocialIcon To="/" Color="#FF0000" Icon={FaYoutube} />
        </div>

        <div className="flex justify-evenly items-center">
          <div className="flex justify-evenly items-center">
            <Link to="/" className="mx-3">
              <div className="flex justify-center items-center text-darkblue  ">
                <AiOutlineDownload className="text-3xl mx-1 " />
                <div className="uppercase text-2xl mx-1">DownlOAD App</div>
              </div>
            </Link>
            <Link to="/" className="mx-3">
              <div className="flex justify-center items-center text-darkblue  ">
                <div className="uppercase text-2xl mx-1">
                  CALL : 1800 150 150
                </div>
              </div>
            </Link>
          </div>
          <div className="loginwrapper">
            <div className="mainlogin">
              <Link
                style={{ marginTop: "3.1rem" }}
                className="absolute flex justify-center item-center"
                to="/"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white text-3xl pt-0.5 pr-2 "
                >
                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                </svg>
                <h5 className="uppercase text-white text-2xl">
                  {" "}
                  Log in / sign in{" "}
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="z-50 fixed top-0 bg-darkblue w-full h-16 flex justify-between items-center px-3 lg:hidden">
        <div onClick={HandleNavToggle}>
          {IsNavOpen ? (
            <AiOutlineClose className="text-4xl text-white" />
          ) : (
            <AiOutlineMenu className="text-4xl text-white" />
          )}
        </div>
        <div>
          <h1 className="text-3xl text-white">AID 24x7</h1>
        </div>
      </div>
      {/* OVERLAY--------------------------- */}
      <div
        onClick={HandleNavToggle}
        style={{
          transition: "left 300ms linear 0s",
        }}
        className={`${
          IsNavOpen ? ` opacity-100 visible` : `opacity-0 hidden`
        }  lg:opacity-100  fixed w-full h-full overlaybg lg:w-0 z-40  lg:bg-transparent lg:block`}
      ></div>

      <div
        style={{
          transition: "left 300ms linear 0s",
        }}
        className={` ${
          IsNavOpen ? `left-0` : `-left-full`
        }   fixed  lg:relative lg:left-0  h-screen mt-0 w-4/5  lg:h-11  lg:mt-1 flex lg:w-full z-40  justify-center items-center bg-nav`}
      >
        <div className="width95 mx-auto flex justify-between h-11 items-center">
          <div className="hidden lg:block w-60 h-40 bg-white">
            <img
              className="w-10/12 h-full object-contain px-2  mx-auto flex justify-center items-center"
              src="assets/images/logo.png"
              alt=""
            />
          </div>

          <ul
            onClick={HandleNavToggle}
            className=" w-10/12 mx-auto  flex-col  lg:flex lg:flex-row lg:w-full justify-center items-center"
          >
            <Navitem
              Active={location.pathname === "/" ? "true" : ""}
              Name="Home"
              To="/"
            />
            <NavSaprator />
            <Navitem
              Active={location.pathname === "/services" ? "true" : ""}
              Name="Services"
              To="/services"
            />
            <NavSaprator />
            <Navitem
              Active={location.pathname === "/services" ? "true" : ""}
              Name="Packages"
              To="/packages"
            />
            <NavSaprator />
            <Navitem
              Active={location.pathname === "/amc" ? "true" : ""}
              Name="AMC"
              To="/amc"
            />
            <NavSaprator />
            <Navitem MobHidden="true" Name="fEEDBACK" To="/" />
            <NavSaprator />
            <Navitem
              Active={location.pathname === "/contact" ? "true" : ""}
              Name="CONTACT"
              To="/contact"
            />
            <Navitem
              Active={location.pathname === "/account" ? "true" : ""}
              DesktopHidden="true"
              Name="MY ACCOUNT"
              To="/account"
            />
            <NavSaprator />
            <Navitem
              Active={location.pathname === "/cart" ? "true" : ""}
              Icon={AiOutlineShoppingCart}
              Name="CART ( 0 )"
              To="/cart"
            />
            <NavSaprator />
            <Navitem
              MobHidden="true"
              Icon={FaHandshake}
              Name="Partner with us"
              To="/"
              Color="#ffcc29"
            />{" "}
            <AuthNavItem to="/" Name="Login" DesktopHidden="true" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
