import React from "react";
import { Link } from "react-router-dom";
const DownloadApp = () => {
  return (
    <section className="w-full h-auto">
      <div className=" flex-col w-11/12 h-full mx-auto flex justify-center items-center py-8">
        <div className=" flex-col flex justify-center items-center limitedoffer ">
          <h5 className="text-3xl text-darkblue tracking-wider text-center">
            LIMITED PERIOD OFFER
          </h5>
        </div>
        <div
          style={{
            background: "url(assets/images/homepage/downloadapp/bg.jpeg)",
            height: "616px",
          }}
          className="py-4 bg-contain bg-no-repeat w-full flex justify-center items-center "
        >
          <div className="flex lg:w-3/5 ml-auto  flex-col justify-center items-start">
            <h2 className="text-7xl text-left py-8">Download the App</h2>

            <p className="text-3xl tracking-wider text-darkblue leading-7 py-4 ">
              And enjoy a <strong>10% Discount</strong> on Your Favorite
              <br /> Home Maintenace Services!
            </p>

            <p className="text-2xl tracking-wide text-darkblue leading-6 py-4 ">
              Choose and book from 100+ servuces at an <br /> extremely low cost
              and track them on <br /> the go with Aid24x7 App
            </p>

            <form className="flex flex-col justify-center items-start lg:w-3/4">
              <p className="text-3xl tracking-wide text-darkblue leading-7 py-4 ">
                Send a link via SMS to install the app
              </p>
              <div className="flex justify-between w-full">
                <input
                  style={{
                    border: "2px solid #000",
                  }}
                  className="w-9/12 bg-gray-200 h-14  rounded-md px-4 text-xl"
                  type="tel"
                  placeholder="+91"
                  name=""
                  id=""
                />
                <button
                  className="w-1/4 bg-darkblue ml-4 text-white text-2xl rounded-md "
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </form>

            <div className="flex justify-start items-center my-4">
              <Link className="object-contain w-1/4" to="/">
                <img src="assets/images/homepage/downloadapp/1.jpeg" alt="" />
              </Link>
              <Link className="object-contain w-1/4" to="/">
                <img src="assets/images/homepage/downloadapp/2.jpeg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
