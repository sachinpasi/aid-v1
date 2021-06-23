import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(assets/images/homepage/banner/bannerbg.png)",
        height: "auto",
      }}
      className="h-screen lg:h-auto   bg-cover bg-no-repeat"
    >
      <div className="w-11/12 h-full mx-auto flex justify-center items-center lg:justify-between ">
        <div></div>
        <div className="w-80 md:w-4/5 lg:w-80 my-5 bg-light-yellow rounded-xl shadow-2xl ">
          <h5 className="text-3xl py-2 text font-medium text-center">
            Book Your Service
          </h5>
          <form className="w-full h-auto bg-darkblue rounded-xl py-2 px-3 ">
            <div className="w-auto mx-auto py-1 flex justify-center items-center">
              <input
                className="w-full bg-gray-100 text-gray- h-9 rounded-sm text-xl  px-2 uppercase "
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-center items-center">
              <input
                className="w-full bg-gray-100 h-9 rounded-sm text-xl  px-2 uppercase "
                type="text"
                placeholder="+91"
              ></input>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-center items-center">
              <input
                className="w-full bg-gray-100 h-9 rounded-sm text-xl  px-2 uppercase "
                type="text"
                placeholder="Address"
              ></input>
            </div>{" "}
            <div className="w-auto mx-auto py-1 flex justify-center items-center">
              <select className="w-full bg-gray-100 h-9 rounded-sm text-xl  px-2 uppercase ">
                <option selected disabled hidden>
                  Service Type
                </option>
                <option value="">AC SERVICE</option>
                <option value="">Plumber</option>
                <option value="">Carpainter</option>
              </select>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-center items-center">
              <input
                className="w-full bg-gray-100 h-9 rounded-sm text-xl  px-2 uppercase "
                type="date"
                placeholder="Date"
              ></input>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-center items-center">
              <select className="w-full bg-gray-100 h-9 rounded-sm text-xl  px-2 uppercase ">
                <option selected disabled hidden>
                  Time
                </option>
                <option value="">10 AM</option>
                <option value="">11 AM</option>
                <option value="">12 AM</option>
              </select>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-start items-center">
              <input
                className="h-6 w-6 mr-4"
                type="checkbox"
                value="Agree"
              ></input>
              <p className="text-white text-base"> I Agree to Aid 24x7</p>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-start items-center">
              <button
                className="w-full bg-light-yellow h-9 rounded-md mx-1 text-2xl font-medium "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
