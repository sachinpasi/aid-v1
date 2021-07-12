import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShowWidget,
  REMOVE_SHOW_WIDGET,
} from "../../../Redux/_features/_showBookingWidgetSlice";
import BookingWidget from "../../Common/BookingWidget";
const Banner = ({ Data }) => {
  console.log(Data);
  const { showWidget } = useSelector(selectShowWidget);
  console.log(showWidget);
  const [isBookButtonPressed, setisBookButtonPressed] = useState(false);

  const dispatch = useDispatch();

  const HandleHideWidget = () => {
    console.log("clickdd");
    dispatch(REMOVE_SHOW_WIDGET());
    setisBookButtonPressed(false);
  };

  useEffect(() => {
    setisBookButtonPressed(showWidget);
  }, [showWidget]);

  return (
    <section
      style={{
        background: `url(https://codeiator.com/aidassets/${Data?.banner})`,
        backgroundRepeat: "no-repeat",
        height: "540px",
      }}
      className=" w-full  bg-contain relative overflow-x-hidden bg-no-repeat "
    >
      <div className="w-80vw h-full mx-auto flex justify-between items-center ">
        {/* <img
          style={{
            width: "35%",
          }}
          className=""
          src="/assets/images/services/banner/text.png"
          alt=""
        /> */}
        <div className="w-full h-full mt-0 flex justify-end items-center  relative">
          <div className="w-full flex justify-end items-center h-auto relative">
            <div
              style={{
                transition: "all 0.2s ease",
              }}
              className={`absolute ${
                isBookButtonPressed
                  ? "right-0 opacity-100"
                  : "-right-full opacity-0"
              } `}
            >
              <div className="flex justify-end items-centerw-full -mr-8 ">
                <p
                  className="text-3xl cursor-pointer bg-white w-9 flex justify-center items-center rounded-full  "
                  onClick={HandleHideWidget}
                >
                  x
                </p>
              </div>

              <BookingWidget />
            </div>
          </div>
          <div
            className={`flex justify-end items-start absolute  h-full pt-10 ${
              isBookButtonPressed ? "hidden" : "visible"
            }`}
          >
            <button
              onClick={() => setisBookButtonPressed(true)}
              className="bg-darkblue py-2 px-10 text-2xl rounded-xl text-white border-2 border-green-200"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
