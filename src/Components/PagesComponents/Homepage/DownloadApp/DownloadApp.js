import React from "react";

const DownloadApp = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full flex-col lg:w-11/12 h-full mx-auto flex justify-center items-center py-4">
        <div className=" flex-col flex justify-center items-center limitedoffer ">
          <h5 className="text-3xl text-darkblue tracking-wider text-center">
            LIMITED PERIOD OFFER
          </h5>
        </div>
        <div className="py-4">
          <img
            src="assets/images/homepage/downloadapp/downloadapp.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
