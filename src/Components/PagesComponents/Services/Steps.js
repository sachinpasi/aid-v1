import React from "react";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Steps = () => {
  return (
    <section className="w-full h-full">
      <div className="w-80vw mx-auto h-full ">
        <div className="w-11/12 mx-auto my-8  ">
          <ImQuotesLeft className="text-4xl w-9 " />
          <p className="text-2xl text-justify w-11/12 mx-auto">
            Get your service through Aid24x7 and feel the difference as we have
            specialized team of verified professionals who not only ensure
            optimum service of your appliances and also provide genuine parts
            and fixed pricing, all our services are curated keeping our
            customers in mind. We also follow fixed pricing with price list
            shared on our website and app. So, if you are looking for a service
            or a repair you can now book a professional within minutes from your
            home.
          </p>
          <ImQuotesRight className="text-4xl float-right" />
        </div>

        <div className="flex justify-center items-start flex-col py-8 mx-auto w-full">
          <p className="text-3xl font-semibold text-darkblue">
            BOOK YOUR AC SERVICES IN 4 EASY STEPS :
          </p>
          <div className="flex justify-between items-center flex-wrap w-full my-4">
            <div className="flex justify-start items-center w-2/4 my-8">
              <div>
                <div className="w-12 h-12 flex justify-center items-center bg-blue-400 rounded-md mr-4 ">
                  <p className="text-3xl font-semibold 8">1</p>
                </div>
              </div>
              <div className="border-b-2 h-12 flex justify-center items-center">
                <p className="uppercase font-medium text-2xl tracking-wide px-8 ">
                  Choose Type Of ac
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center w-2/4 my-8">
              <div>
                <div className="w-12 h-12 flex justify-center items-center bg-green-400 rounded-md mr-4 ">
                  <p className="text-3xl font-semibold 8">2</p>
                </div>
              </div>
              <div className="border-b-2 h-12 flex justify-center items-center tracking-wide px-8">
                <p className="uppercase font-medium text-2xl ">
                  Select the service you need
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center w-2/4 my-8">
              <div>
                <div className="w-12 h-12 flex justify-center items-center bg-yellow-400 rounded-md mr-4 ">
                  <p className="text-3xl font-semibold 8">3</p>
                </div>
              </div>
              <div className="border-b-2 h-12 flex justify-center items-center tracking-wide px-8">
                <p className="uppercase font-medium text-2xl ">
                  select your time slot
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center w-2/4 my-8">
              <div>
                <div className="w-12 h-12 flex justify-center items-center bg-red-400 rounded-md mr-4 ">
                  <p className="text-3xl font-semibold 8">4</p>
                </div>
              </div>
              <div className="border-b-2 h-12 flex justify-center items-center tracking-wide px-8">
                <p className="uppercase font-medium text-2xl ">
                  get confirmation in seconds
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full my-4">
            <button className="px-8 py-2 bg-darkblue rounded-lg text-white text-2xl">
              Book Your AC Service
            </button>
          </div>
        </div>

        <div className="w-full border-b-2">
          <p className="text-3xl font-medium text-center">Other AC Services</p>
          <div className="flex justify-between items-center my-4">
            <div className="flex justify-between items-center w-3/12 border-r-2  mr-2 ">
              <div className="w-20  h-20 ">
                <img
                  className="w-full h-full object-cover"
                  src="assets/images/services/04.png"
                  alt=""
                />
              </div>
              <div className="w-8/12">
                <p className="text-2xl">AC Servicing</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-3/12 border-r-2  mx-2 ">
              <div className="w-20  h-20 ">
                <img
                  className="w-full h-full object-cover"
                  src="assets/images/services/05.png"
                  alt=""
                />
              </div>
              <div className="w-8/12">
                <p className="text-2xl">AC Installation/Removal</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-3/12 border-r-2  mx-2 ">
              <div className="w-20  h-20 ">
                <img
                  className="w-full h-full object-cover"
                  src="assets/images/services/06.png"
                  alt=""
                />
              </div>
              <div className="w-8/12">
                <p className="text-2xl">Complete Gas Changing</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-3/12 border-r-2  ml-2 ">
              <div className="w-20  h-20 ">
                <img
                  className="w-full h-full object-cover"
                  src="assets/images/services/07.png"
                  alt=""
                />
              </div>
              <div className="w-8/12">
                <p className="text-2xl">AC Cooling Coil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-b-2 my-4 pb-4">
          <p className="text-3xl font-medium text-center">
            Other Appliances Services
          </p>
          <div className="w-full flex justify-between items-center flex-wrap">
            <OtherAppliance
              Icon="assets/images/services/other/13.png"
              Name="Refrigerator Service"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/14.png"
              Name="Washing Machine Service"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/15.png"
              Name="Washing Machine Repair"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/16.png"
              Name="LED TV Service"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/17.png"
              Name="LED TV Repair"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/18.png"
              Name="IT Repair"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/19.png"
              Name="Water Purifier Service"
            />{" "}
            <OtherAppliance
              Icon="assets/images/services/other/20.png"
              Name="RO Service"
            />
          </div>
        </div>

        <div className="w-full flex justify-evenly items-center my-8">
          <div className="w-auto">
            <img
              className="w-full h-full object-contain"
              src="assets/images/services/common/08.png"
              alt=""
            />
          </div>
          <div className="w-auto mx-4">
            <img
              className="w-full h-full object-contain"
              src="assets/images/services/common/09.png"
              alt=""
            />
          </div>
          <div className="w-auto mx-4">
            <img
              className="w-full h-full object-contain"
              src="assets/images/services/common/10.png"
              alt=""
            />
          </div>
          <div className="w-auto mx-4">
            <img
              className="w-full h-full object-contain"
              src="assets/images/services/common/11.png"
              alt=""
            />
          </div>
          <div className="w-auto mx-4">
            <img
              className="w-full h-full object-contain"
              src="assets/images/services/common/12.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

const OtherAppliance = ({ Name, Icon }) => (
  <div className="w-1/4 flex justify-start items-center my-4">
    <div className="w-1/5 h-16">
      <img className="w-full h-full object-contain" src={Icon} alt="" />
    </div>

    <div className="ml-5 flex justify-center items-center">
      <p className="text-2xl font-medium text-gray-800">{Name}</p>
    </div>
  </div>
);
