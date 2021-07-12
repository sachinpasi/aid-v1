import React, { useEffect, useState } from "react";
import axios from "axios";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ServicesCarowsel.css";
import Item from "./Item";
import { API } from "../../../../API";

const ServicesCarowsel = () => {
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
    <section className=" lg:h-28  bg-cover bg-no-repeat">
      <div className="hidden lg:flex w-11/12 lg:h-full mx-auto  justify-center items-center lg:justify-between ">
        {Services.length !== 0 && (
          <OwlCarousel items={8} loop nav={true}>
            {Services?.map((item, index) => (
              <Item
                key={index}
                To={`/services/${item?.id}`}
                ImageURL={`https://codeiator.com/aidassets/${item?.icon}`}
                Name={item?.title}
              />
            ))}
          </OwlCarousel>
        )}
      </div>

      <div className="lg:hidden w-11/12 lg:h-full mx-auto flex justify-center items-center lg:justify-between ">
        {Services.length !== 0 && (
          <OwlCarousel items={2} loop nav={true}>
            {Services?.map((item, index) => (
              <Item
                key={index}
                To={`/services/${item?.id}`}
                ImageURL={`https://codeiator.com/aidassets/${item?.icon}`}
                Name={item?.title}
              />
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
};

export default ServicesCarowsel;
