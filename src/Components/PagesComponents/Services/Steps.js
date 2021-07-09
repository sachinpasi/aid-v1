import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../../API";
import { SHOW_WIDGET } from "../../../Redux/_features/_showBookingWidgetSlice";

const Steps = ({ Data }) => {
  const [Services, setServices] = useState([]);

  const dispatch = useDispatch();

  const FetchAllServices = async () => {
    const res = await axios.get(`${API}/parent-service/show`);
    if (res.status === 200) {
      setServices(res.data.data);
    }
  };

  const HandleBookService = () => {
    dispatch(
      SHOW_WIDGET({
        showWidget: true,
      })
    );
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    FetchAllServices();
  }, []);
  return (
    <section className="w-full h-full">
      <div className="w-80vw mx-auto h-full ">
        <p className="text-center text-5xl uppercase font-semibold my-4 ">
          {Data?.title}
        </p>
        <div className="w-11/12 mx-auto my-8  ">
          <ImQuotesLeft className="text-4xl w-9 " />
          {console.log(Data)}
          <p className="text-2xl text-justify w-11/12 mx-auto">
            {Data?.description}
          </p>
          <ImQuotesRight className="text-4xl float-right" />
        </div>

        <div className="flex justify-between items-start py-8 w-full ">
          <div className="flex justify-center items-start flex-col py-8 mx-auto w-full">
            <p className="text-3xl font-semibold text-darkblue uppercase">
              BOOK YOUR {Data?.title} IN 4 EASY STEPS :
            </p>
            <div className="flex justify-startitems-start flex-wrap w-full my-4">
              <div className="flex justify-start items-center w-46percent my-4">
                <div>
                  <div className="w-12 h-12 flex justify-center items-center bg-blue-400 rounded-md mr-4 ">
                    <p className="text-3xl font-semibold 8">1</p>
                  </div>
                </div>
                <div className="border-b-2 h-12 flex justify-center items-center">
                  <p className="uppercase font-medium text-2xl tracking-wide px-8 ">
                    Choose Type Of Service
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center w-46percent  my-4">
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
              <div className="flex justify-start items-center w-46percent  my-4">
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
              <div className="flex justify-start items-center w-46percent my-4">
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
            <div className="flex justify-start items-center w-full my-4">
              <button
                onClick={HandleBookService}
                className="px-8 py-2 bg-darkblue rounded-lg text-white text-2xl uppercase"
              >
                Book Your {Data?.title}
              </button>
            </div>

            <div className="flex justify-start items-center flex-wrap">
              <div className=" my-4 flex flex-col justify-center items-center">
                <img
                  className="w-2/4 object-contain"
                  src="/assets/images/services/bottom/1.png"
                  alt=""
                />
                <p className="text-2xl w-52 my-4 text-center  bg-darkblue text-white px-6 py-1 rounded-md border-2 border-gray-400">
                  TECHNICIANS
                </p>
              </div>
              <div className=" my-4 flex flex-col justify-center items-center">
                <img
                  className="w-2/4 object-contain"
                  src="/assets/images/services/bottom/2.png"
                  alt=""
                />
                <p className="text-2xl w-52 my-4 text-center  bg-darkblue text-white px-6 py-1 rounded-md border-2 border-gray-400">
                  REVIEWS
                </p>
              </div>
              <div className=" my-4 flex flex-col justify-center items-center">
                <img
                  className="w-2/4 object-contain"
                  src="/assets/images/services/bottom/3.png"
                  alt=""
                />
                <p className="text-2xl w-52 my-4 text-center  bg-darkblue text-white px-6 py-1 rounded-md border-2 border-gray-400">
                  BLOGS
                </p>
              </div>
              <div className=" my-4 flex flex-col justify-center items-center">
                <img
                  className="w-2/4 object-contain"
                  src="/assets/images/services/bottom/4.png"
                  alt=""
                />
                <p className="text-2xl my-4 w-52 text-center  bg-darkblue text-white px-6 py-1 rounded-md border-2 border-gray-400">
                  DISCOUNT COUPONS
                </p>
              </div>
              <div className=" my-4 flex flex-col justify-center items-center">
                <img
                  className="w-2/4 object-contain"
                  src="/assets/images/services/bottom/5.png"
                  alt=""
                />
                <p className="text-2xl my-4 w-52 text-center  bg-darkblue text-white px-6 py-1 rounded-md border-2 border-gray-400">
                  PACKAGE DEAL
                </p>
              </div>
            </div>
          </div>

          <div className="w-5/12">
            <div className=" border-b-2 border-2 px-2 ">
              <p className="text-2xl font-medium text-left border-b-2 py-2 uppercase">
                Other {Data?.title}
              </p>
              {console.log(Data)}
              <div className="flex justify-between items-center flex-col my-4 mb-0">
                {Data?.child.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center w-full  border-b-2 py-3"
                  >
                    <div className="w-20  h-16 ">
                      <img
                        className="w-full h-full object-cover"
                        src={`https://codeiator.com/aidassets/${item?.icon_path}`}
                        alt=""
                      />
                    </div>
                    <div className="w-8/12">
                      <p className="text-xl">{item?.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 my-4 px-2 ">
              <p className="text-2xl font-medium text-center border-b-2 py-2 uppercase">
                Other Appliances Services
              </p>
              <div className="w-full flex justify-start items-center flex-col">
                {Services?.map((item, index) => (
                  <OtherAppliance
                    key={index}
                    Icon={`https://codeiator.com/aidassets/${item?.icon_path}`}
                    Name={item.title}
                    To={`/services/${item.id}`}
                  />
                ))}{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start py-8">
          {/* <div className="w-full flex  justify-start items-center flex-wrap my-8">
            <div className="w-1/4 my-8">
              <img
                className="w-full h-full object-contain"
                src="/assets/images/services/common/08.png"
                alt=""
              />
            </div>
            <div className="w-1/4 mx-4 my-8">
              <img
                className="w-full h-full object-contain"
                src="/assets/images/services/common/09.png"
                alt=""
              />
            </div>
            <div className="w-1/4 mx-4 my-8">
              <img
                className="w-full h-full object-contain"
                src="/assets/images/services/common/10.png"
                alt=""
              />
            </div>
            <div className="w-1/4 mx-4 my-8">
              <img
                className="w-full h-full object-contain"
                src="/assets/images/services/common/11.png"
                alt=""
              />
            </div>
            <div className="w-1/4 mx-4 my-8">
              <img
                className="w-full h-full object-contain"
                src="/assets/images/services/common/12.png"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Steps;

const OtherAppliance = ({ Name, Icon, To }) => (
  <Link
    to={To}
    className="w-full flex justify-start items-center  border-b-2 py-2 px-4"
  >
    <div
      style={{
        width: "10%",
      }}
      className=" h-16"
    >
      <img className="w-full h-full object-contain" src={Icon} alt="" />
    </div>

    <div className="ml-5 flex justify-center items-center">
      <p className="text-xl font-medium text-gray-800">{Name}</p>
    </div>
  </Link>
);
