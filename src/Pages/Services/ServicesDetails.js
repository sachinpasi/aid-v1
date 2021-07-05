import React, { useEffect, useState } from "react";
import MainWrapper from "../../Components/Wrapper/MainWrapper";
import Banner from "../../Components/PagesComponents/Services/Banner";
import Steps from "../../Components/PagesComponents/Services/Steps";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../API";

const ServicesDetails = () => {
  const [Data, setData] = useState();
  const { id } = useParams();
  const HandleServices = async () => {
    if (id !== undefined) {
      const res = await axios.get(`${API}/parent-service/get/${id}`);
      if (res.status === 200) {
        setData(res.data.data);
      }
    }
  };

  useEffect(() => {
    HandleServices();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <MainWrapper>
      <Banner Data={Data} />
      <Steps Data={Data} />
    </MainWrapper>
  );
};

export default ServicesDetails;
