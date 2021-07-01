import React from "react";

const Banner = () => {
  return (
    <section
      style={{
        background: "url(/assets/images/services/banner/bannerbg.png)",
        backgroundRepeat: "no-repeat",
        height: "540px",
      }}
      className=" w-full  bg-contain "
    >
      <div className="w-80vw h-full mx-auto flex justify-between items-center">
        <img
          style={{
            width: "35%",
          }}
          className=""
          src="assets/images/services/banner/text.png"
          alt=""
        />
        <div className="flex justify-end items-start  h-full pt-10">
          <button className="bg-darkblue py-2 px-10 text-2xl rounded-xl text-white border-2 border-green-200">
            Book Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
