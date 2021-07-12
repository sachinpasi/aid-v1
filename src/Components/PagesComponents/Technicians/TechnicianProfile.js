import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { API } from "../../../API";

const TechnicianProfile = () => {
  const [TechnicianData, setTechnicianData] = useState();
  const { id } = useParams();

  const FetchData = async () => {
    const res = await axios.get(`${API}/service-boy/list/${id}`);
    console.log(res.data.data[0]);
    setTechnicianData(res.data.data[0]);
  };

  useEffect(() => {
    FetchData();
  }, [id]);

  return (
    <section className="w-full">
      <div className="w-80vw mx-auto h-full">
        <div className="py-4 border-t-2 border-b-2">
          <p className="text-5xl text-darkblue font-medium">
            Technician Profile :
          </p>
          <p className="text-xl">
            1,253 AC Services and Repair Professional in Painipat
          </p>
        </div>
        <div className=" flex justify-between items-start my-8 w-full h-full">
          <div className="flex justify-center items-center">
            <div className="w-40 h-40 bg-gray-500 rounded-full "></div>
            <div className=" ml-8">
              <p className="text-3xl text-gray-900 font-medium">
                {TechnicianData?.name}
              </p>
              <p className="text-xl text-gray-600">
                Ravi Bagh, Shakurpur, New Delhi, India
              </p>
              <p className="flex items-center text-xl text-green-500">
                {" "}
                <FaStar className="text-xl mr-2 text-green-500 " />{" "}
                {TechnicianData?.avg_rating}
              </p>
              <p className="flex items-center text-xl text-gray-600">
                Hired 221 times on Aid24x7.com
              </p>
            </div>
          </div>
          <div className="w-96  ">
            <div className="w-full h-full bg-darkblue p-8 flex flex-col justify-center items-center rounded-md ">
              <p className="text-white text-3xl text-left w-full">
                NEED AN AC EXPERT FOR :
              </p>
              <input className="w-full h-11 rounded my-2" type="text" />
              <input className="w-full h-11 rounded my-2" type="text" />
              <input className="w-full h-11 rounded my-2" type="text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicianProfile;
