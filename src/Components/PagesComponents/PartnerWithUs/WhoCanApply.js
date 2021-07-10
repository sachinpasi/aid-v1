import React from "react";

const WhoCanApply = ({ Hindi }) => {
  return (
    <section>
      <div className="w-80vw" style={{ margin: "3rem auto" }}>
        {Hindi ? (
          <div className="w-full flex justify-center items-center flex-col">
            <h1
              style={{
                fontFamily: "Uniform Bold",
                color: "#373435",
              }}
              className="text-5xl tracking-wide capitalize"
            >
              कौन आवेदन कर सकता है
            </h1>
            <h5
              style={{
                color: "#373435",
                fontSize: "25px",
              }}
              className=" capitalize py-4 text-center"
            >
              यदि आपके पास नीचे के किसी भी क्षेत्र में अनुभव है <br /> तो आप
              आवेदन कर सकते हैं और हमारी टीम आपके पास वापस आएगी
            </h5>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center flex-col">
            <h1
              style={{
                fontFamily: "Uniform Bold",
                color: "#373435",
              }}
              className="text-5xl tracking-wide capitalize"
            >
              Who Can Apply
            </h1>
            <h5
              style={{
                color: "#373435",
              }}
              className=" text-3xl capitalize py-4 text-center"
            >
              If you have experience in any of the below field You Can apply{" "}
              <br /> and our team will get back to you
            </h5>
          </div>
        )}

        {Hindi ? (
          <div
            style={{
              width: "80%",
            }}
            className="mx-auto my-8 flex justify-evenly flex-wrap"
          >
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              {" "}
              एसी सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              फ्रिज सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              वॉशिंग मशीन सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              माइक्रोवेव ओवन सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              एलईडी टीवी सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              एलईडी टीवी इंस्टालेशन
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              गीजर सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4 font-medium  my-2 "
            >
              आरओई सर्विस
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-xl px-4  font-medium  my-2 "
            >
              आईटी मरम्मत सर्विस
            </div>
          </div>
        ) : (
          <div
            style={{
              width: "80%",
            }}
            className="mx-auto my-8 flex justify-evenly flex-wrap"
          >
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2 "
            >
              AC Service
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              Refrigerator Repair
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              Washing Machine Repair
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              Microwave Oven Repair
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              Microwave Oven Repair
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              LED TV Repair
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              LED TV Installation
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              GEYSER Service
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
            >
              RO Service
            </div>
            <div
              style={{
                width: "28%",
                borderColor: "#ffa9a9",
              }}
              className=" h-10 border-4 flex justify-start items-center text-2xl px-4 font-medium  my-2"
              my-2
            >
              IT Repair Service
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhoCanApply;
