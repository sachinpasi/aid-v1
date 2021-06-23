import React from "react";

const SelectServices = () => {
  return (
    <section className="lg:h-20 bg-cover bg-no-repeat bg-darkblue">
      <div className="w-4/5 py-7 lg:py-0 mx-auto h-full flex-col lg:flex-row flex justify-between items-center ">
        <div className=" w-full lg:w-4/6 flex-col lg:flex-row lg flex justify-between items-center">
          <div
            style={{ border: "1px solid " }}
            className="  w-full lg:w-3/4 h-10  flex justify-between items-center  border-white rounded-md bg-white rounded-l-md  "
          >
            <select
              className="appearance-none w-full h-full rounded-md text-xl px-2 bannerformtextcolor"
              name=""
              id=""
            >
              <option value="" disabled="" hidden="">
                Select Service
              </option>
              <option value="">Electration</option>
            </select>
            <div className="w-10 h-full flex justify-center items-center bg-gray-800 rounded-r-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-white text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128 192l128 128 128-128z"></path>
              </svg>
            </div>
          </div>

          <div
            style={{ border: "1px solid " }}
            className=" my-3 lg:my-0 lg:ml-5 w-full  lg:w-1/4 h-10 flex justify-between items-center  border-white rounded-md bg-white rounded-l-md  "
          >
            <input
              className="w-full h-full rounded-md text-xl px-2 bannerformtextcolor"
              type="text"
              placeholder="Location"
            ></input>
            <div className="w-10 h-full flex justify-center items-center bg-gray-800 rounded-r-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-white text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M128 192l128 128 128-128z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className=" w-2/3 lg:w-2/6 flex justify-center lg:justify-end items-center ">
          <button className="uppercase h-full rounded-md text-xl font-semibold py-2 px-8 bg-darkyellow ">
            get quotes
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectServices;
