import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../../../API";

import ServicesItem from "./ServicesItem";

const OurServices = () => {
  const [Services, setServices] = useState([]);

  const FetchAllServices = async () => {
    const res = await axios.get(`${API}/parent-service/show`);
    if (res.status === 200) {
      setServices(res.data.data);
    }
  };

  useEffect(() => {
    FetchAllServices();
  }, []);
  return (
    <section className="w-full h-full">
      <div className="w-full lg:w-11/12 h-full mx-auto flex justify-center items-center py-4 flex-col">
        <h3 className="uppercase text-5xl py-4 mx-auto text-center font-black text-darkblue">
          Our SERVICES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-8">
          {Services?.slice(0, 6).map((item) => (
            <ServicesItem
              Image={`https://codeiator.com/aidassets/${item.thumbnail}`}
              Name={item.title}
              BgColor={item.color}
              To={`/services/${item.id}`}
              Points={item.highlights}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center my-4 h-12">
          <button className="bg-servicebutton text-xl py-2 px-8 text-gray-800 rounded-md font-semibold tracking-wider cursor-pointer">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
