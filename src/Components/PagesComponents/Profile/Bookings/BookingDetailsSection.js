import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../../../API";
import { selectUser } from "../../../../Redux/_features/_userSlice";
import Sidebar from "../Sidebar";
import { Link, useParams, Redirect, useHistory } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
var Spinner = require("react-spinkit");
const BookingDetailsSection = () => {
  const [isLoading, setisLoading] = useState(false);
  const [OrderDetails, setOrderDetails] = useState();
  const [LocalityList, setLocalityList] = useState([]);
  const [ChildServices, setChildServices] = useState(null);

  const user = useSelector(selectUser);
  const { id } = useParams();
  const history = useHistory();

  const FetchOrderDetails = async () => {
    try {
      setisLoading(true);

      const res = await axios.get(`${API}/order/showById/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(res.data.data);
      if (res.status === 200) {
        setOrderDetails(res.data.data);
      }
      setisLoading(false);
    } catch (error) {
      if (error) {
        toast.error("Invalid Order Id!");
        history.push("/");
      }
    }
  };

  const FetchAllLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    console.log(res.data);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };

  const GetLocalityName = (locality_id) => {
    return LocalityList.map((OrderDetails) => {
      if (OrderDetails.id === locality_id) {
        return OrderDetails.name;
      }
    });
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
    FetchOrderDetails();
    FetchAllLocality();
  }, []);

  return (
    <section className="w-full h-full flex">
      <Sidebar />
      <main className="w-4/5 ml-6 relative">
        <div className="w-full py-8 ">
          <p className="text-5xl mx-4 text-darkblue font-semibold">Bookings</p>
          <div className="h-1 ml-20 w-24 border-b-4 border-solid border-yellow-600"></div>

          <div className="w-full h-full  ">
            <p className="text-2xl px-4 py-4">Booking Details</p>

            {isLoading ? (
              <div className="absolute top-0 bottom-0  w-full h-full flex justify-center items-center">
                <Spinner
                  fadein="none"
                  name="ball-pulse-sync"
                  color="goldenrod"
                />
              </div>
            ) : (
              <div
                style={{
                  border: "1px solid",
                }}
                className="w-full h-auto border-gray-300 rounded-md my-4 "
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
                      {getDate(OrderDetails?.created_at)}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <p className="text-base text-gray-600 uppercase tracking-wide">
                      #Order Id
                    </p>
                    <p className="text-xl text-gray-800 tracking-wide">
                      {OrderDetails?.my_order_id}
                    </p>
                  </div>
                </div>
                <div className=" rounded-t-md w-full px-4 flex justify-between items-center py-4">
                  <div>
                    <p className="text-2xl uppercase my-2 tracking-wide text-darkblue font-medium">
                      {OrderDetails?.parent_service.title}
                    </p>
                    <p>Service Date</p>
                    <p className="text-xl">
                      {getDate(OrderDetails?.service_date)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-base text-gray-600 uppercase tracking-wide mt-1">
                      Service Time
                    </p>
                    <p className="text-xl text-gray-800 tracking-wide mb-1">
                      {getTime(OrderDetails?.service_time)}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    background: "#D6E5FA",
                  }}
                  className="w-full flex justify-between items-center px-4"
                >
                  <div>
                    <p>{OrderDetails?.name}</p>
                    <p>{OrderDetails?.mobile}</p>
                    <p className="capitalize">
                      {GetLocalityName(OrderDetails?.locality_id)}{" "}
                    </p>
                    <p>{OrderDetails?.address}</p>
                  </div>

                  <strong>
                    Status :-{" "}
                    {OrderDetails?.status === "p" ? "Pending" : "Completed"}
                  </strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default BookingDetailsSection;
