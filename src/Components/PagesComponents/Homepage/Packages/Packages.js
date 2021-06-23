import React from "react";

const Packages = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full flex-col lg:w-11/12 h-full mx-auto flex justify-center items-center py-4">
        <div className=" flex-col flex justify-center items-center">
          <h1 className=" text-center text-5xl w-5/6 lg:w-full pr-1 uppercase text-darkblue font-black ">
            Maintenance Packages
          </h1>
          <h3 className="text-center w-5/6 text-2xl lg:text-3xl text-gray-700 font-medium py-4">
            Choose One of our Maintenance Package, forget about call out fees
            and let us take care of all your household needs.
          </h3>
        </div>
        <div className="py-4">
          <img src="assets/images/homepage/packages/maintainace.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Packages;
