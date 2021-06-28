import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../../API";
import { selectUser } from "../../../Redux/_features/_userSlice";
import Sidebar from "./Sidebar";

const Orders = () => {
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

  useEffect(() => {
    FetchAllUpcomingOrders();
    FetchAllPreviousOrders();
  }, []);
  return (
    <section className="w-full h-auto ">
      <div className="w-11/12 mx-auto h-full flex justify-between items-start">
        <Sidebar />
        <main className="w-full my-20 h-full flex justify-evenly items-start">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="w-2/5 h-full flex flex-col items-center justify-center">
                <h2 className="w-full text-center">Upcoming Orders </h2>

                {AllUpcomingOrders.map((item) => (
                  <Link
                    to={`/profile/orders/${item.id}`}
                    className="border-2 w-full h-auto my-1 p-4"
                    key={item.id}
                  >
                    <div className="flex justify-between items-center">
                      <p>
                        Order Id :-
                        {item.my_order_id}
                      </p>

                      <div>
                        <p>{item.service_date}</p>
                        {/* <p>{item.service_time}</p> */}
                      </div>
                    </div>
                    <p>Service Name :- {item.parent_service.title}</p>
                  </Link>
                ))}
              </div>
              <div className="w-2/5 flex flex-col items-start justify-center">
                <h2 className="w-full text-center">Previous Orders</h2>
                {AllPreviousOrders.length === 0 ? (
                  <p className="w-full text-center">No Previous Orders</p>
                ) : (
                  <>
                    {AllPreviousOrders.map((item) => (
                      <div className="border-2 w-full h-auto my-1 p-4">
                        <div className="flex justify-between items-center">
                          <p>
                            Order Id :-
                            {item.my_order_id}
                          </p>

                          <div>
                            <p>{item.service_date}</p>
                            {/* <p>{item.service_time}</p> */}
                          </div>
                        </div>
                        <p>Service Name :- {item.parent_service.title}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default Orders;
