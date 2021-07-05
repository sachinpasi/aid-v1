import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../../../API";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import moment from "moment";
var Spinner = require("react-spinkit");

const BookingSection = () => {
  const [isLoading, setisLoading] = useState(false);
  const [AllUpcomingOrders, setAllUpcomingOrders] = useState([]);
  const [AllPreviousOrders, setAllPreviousOrders] = useState([]);
  const user = useSelector(selectUser);

  const FetchAllUpcomingOrders = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/order/show?type=u`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.status === 200) {
      setAllUpcomingOrders(res.data.data.data);
    }
    setisLoading(false);
  };

  const FetchAllPreviousOrders = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/order/show?type=p`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.status === 200) {
      setAllPreviousOrders(res.data.data.data);
    }
    setisLoading(false);
  };

  const getDate = (Date) => {
    let date;
    date = moment(Date).format("MMMM D, YYYY");
    return date;
  };

  const getTime = (Time) => {
    var time = Time * 1000;
    var readableTime = new Date(time).toLocaleTimeString();
    return readableTime;
  };

  useEffect(() => {
    FetchAllUpcomingOrders();
    FetchAllPreviousOrders();
  }, []);

  return (
    <section className="w-full flex">
      <Sidebar />
      <main className="w-4/5   ml-6 relative">
        <div className="w-full py-8 ">
          <p className="text-5xl mx-4 text-darkblue font-semibold">Bookings</p>
          <div className="h-1 ml-20 w-24 border-b-4 border-solid border-yellow-600"></div>

          <div className="w-full h-full flex ">
            <div className="w-2/4">
              <p className="mx-4 mt-8 text-2xl text-center uppercase">
                Upcoming Bookings
              </p>
              {isLoading ? (
                <div className="absolute top-0 bottom-0  w-full h-full flex justify-center items-center">
                  <Spinner
                    fadein="none"
                    name="ball-pulse-sync"
                    color="goldenrod"
                  />
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center my-2">
                  {AllUpcomingOrders.length === 0 ? (
                    <p>Currently You Don't Have Any Bookings</p>
                  ) : (
                    <>
                      {AllUpcomingOrders.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            border: "1px solid",
                          }}
                          className="w-full h-44 border-gray-300 rounded-md my-4 "
                        >
                          <div
                            style={{
                              background: "#D6E5FA",
                            }}
                            className=" h-16 rounded-t-md w-full px-4 flex justify-between items-center"
                          >
                            <div className="flex flex-col justify-center items-start">
                              <p className="text-base text-gray-600 uppercase tracking-wide">
                                Booking Placed
                              </p>
                              <p className="text-xl text-gray-800 tracking-wide">
                                {getDate(item.created_at)}
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-end">
                              <p className="text-base text-gray-600 uppercase tracking-wide">
                                #Order Id
                              </p>
                              <p className="text-xl text-gray-800 tracking-wide">
                                {item.my_order_id}
                              </p>
                            </div>
                          </div>
                          <div className=" rounded-t-md w-full px-4 flex justify-between items-center">
                            <div>
                              <p className="text-2xl uppercase my-2 tracking-wide text-darkblue font-medium">
                                {item?.parent_service.title}
                              </p>
                              <p>Service Date</p>
                              <p className="text-xl">
                                {getDate(item.service_date)}
                              </p>
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="text-base text-gray-600 uppercase tracking-wide mt-1">
                                Service Time
                              </p>
                              <p className="text-xl text-gray-800 tracking-wide mb-1">
                                {getTime(item.service_time)}
                              </p>
                              <Link
                                className="px-5 py-1 bg-darkblue text-base text-white"
                                to={`/profile/booking/${item.id}`}
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="w-2/4">
              <p className="mx-4 mt-8 text-2xl text-center uppercase">
                Previous Bookings
              </p>

              {isLoading ? (
                <div className="w-full h-full flex justify-center items-center"></div>
              ) : (
                <div className="w-full flex flex-col justify-center items-center my-2">
                  {AllPreviousOrders.length === 0 ? (
                    <p>You Don't Have Any Previous Bookings</p>
                  ) : (
                    <>
                      {AllPreviousOrders.map((item) => (
                        <div
                          style={{
                            border: "1px solid",
                          }}
                          className="w-full h-44 border-gray-300 rounded-md my-4 "
                        >
                          {console.log(item)}

                          <div
                            style={{
                              background: "#D6E5FA",
                            }}
                            className=" h-16 rounded-t-md w-full px-4 flex justify-between items-center"
                          >
                            <div className="flex flex-col justify-center items-start">
                              <p className="text-base text-gray-600 uppercase tracking-wide">
                                Booking Placed
                              </p>
                              <p className="text-xl text-gray-800 tracking-wide">
                                {getDate(item.created_at)}
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-end">
                              <p className="text-base text-gray-600 uppercase tracking-wide">
                                #Order Id
                              </p>
                              <p className="text-xl text-gray-800 tracking-wide">
                                {item.my_order_id}
                              </p>
                            </div>
                          </div>
                          <div className=" rounded-t-md w-full px-8 flex justify-between items-center">
                            <div>
                              <p className="text-3xl uppercase my-2 tracking-wide text-darkblue font-medium">
                                {item?.parent_service.title}
                              </p>
                              <p>Service Date</p>
                              <p className="text-xl">
                                {getDate(item.service_date)}
                              </p>
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="text-base text-gray-600 uppercase tracking-wide mt-1">
                                Service Time
                              </p>
                              <p className="text-xl text-gray-800 tracking-wide mb-1">
                                {getTime(item.service_time)}
                              </p>
                              <Link
                                className="px-5 py-1 bg-darkblue text-base text-white"
                                to={`/profile/booking/${item.id}`}
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BookingSection;
