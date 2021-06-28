import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API } from "../../../API";
import { selectUser } from "../../../Redux/_features/_userSlice";
import Sidebar from "./Sidebar";
const OrderDetailsComponent = () => {
  const [isLoading, setisLoading] = useState(false);
  const [OrderDetails, setOrderDetails] = useState();
  const [LocalityList, setLocalityList] = useState([]);
  const [ChildServices, setChildServices] = useState(null);

  const user = useSelector(selectUser);
  const { id } = useParams();

  const FetchOrderDetails = async () => {
    setisLoading(true);
    const res = await axios.get(`${API}/order/showById/${id}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res.data.data);
    if (res.status === 200) {
      setOrderDetails(res.data.data);
    }
    setisLoading(false);
  };

  const FetchAllLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    console.log(res.data);
    if (res.status === 200) {
      setLocalityList(res.data.data);
    }
  };

  const GetLocalityName = (locality_id) => {
    return LocalityList.map((item) => {
      if (item.id === locality_id) {
        return item.name;
      }
    });
  };

  useEffect(() => {
    FetchOrderDetails();
    FetchAllLocality();
  }, []);

  return (
    <section className="w-full h-screen">
      <div className="w-11/12 mx-auto h-full flex justify-between items-start">
        <Sidebar />
        <main className="w-full my-20 h-full flex justify-evenly items-start">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="w-2/4 h-auto p-4 border-2">
              <div className="flex items-center justify-between">
                <p>{OrderDetails?.my_order_id}</p>
                <p>Service Date:- {OrderDetails?.service_date}</p>
              </div>

              <p> Mobile No :- {OrderDetails?.mobile}</p>

              <p>Service Name :- {OrderDetails?.parent_service.title}</p>
              <p>Name:- {OrderDetails?.name}</p>

              <p>Locality :- {GetLocalityName(OrderDetails?.locality_id)} </p>

              <strong>
                Status :-{" "}
                {OrderDetails?.status === "p" ? "Pending" : "Completed"}
              </strong>
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default OrderDetailsComponent;
