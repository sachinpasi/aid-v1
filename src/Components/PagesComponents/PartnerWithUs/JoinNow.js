import React from "react";

const JoinNow = ({ Hindi }) => {
  return (
    <section className="w-full h-full">
      <div className="w-80vw mx-auto">
        <div className="w-full h-60 rounded-xl bg-darkblue m-0 relative -mt-4">
          <div className="relative w-64 h-20 mx-auto">
            <div
              style={{
                width: "25px",
                height: "16px",
                backgroundColor: "#0f0f94",
                borderRadius: "50% 50% 0 0",
                position: "absolute",
                zIndex: "0",
                left: " -8px",
                top: "-16px",
              }}
            />
            <div
              style={{
                background: "linear-gradient(#793893, #af3092)",
                transform: "translate(-50%, -50%)",
                borderRadius: " 0 0 30px 30px",
              }}
              className="w-64 h-20 absolute top-6 left-2/4 right-2/4 z-50 flex justify-center items-center  "
            >
              {Hindi ? (
                <h2 className="text-white" style={{ fontSize: "25px" }}>
                  जुड़िये हमरे साथ
                </h2>
              ) : (
                <h2 className="text-white text-5xl">JOIN NOW</h2>
              )}
            </div>
            <div
              style={{
                width: "25px",
                height: "16px",
                backgroundColor: "#0f0f94",
                borderRadius: "50% 50% 0 0",
                position: "absolute",
                zIndex: "0",
                right: " -8px",
                top: "-16px",
              }}
            />
          </div>
          <div className="w-11/12 mx-auto my-4 flex justify-between items-center">
            <div className="w-5/6 h-12 flex justify-between">
              <input
                style={{
                  background: "#A7C4D2",
                  color: "#3f3e40",
                }}
                className=" w-max h-full border-2 border-solid border-white rounded-lg px-4 text-2xl "
                type="text"
                placeholder={Hindi ? `नाम` : `Name`}
              />
              <input
                style={{
                  background: "#A7C4D2",
                  color: "#3f3e40",
                }}
                className="w-max h-full border-2 border-solid border-white rounded-lg px-4 text-2xl "
                type="text"
                placeholder={Hindi ? `फ़ोन नंबर ` : `Your Phone Number`}
              />
              <input
                style={{
                  background: "#A7C4D2",
                  color: "#3f3e40",
                }}
                className="w-max h-full border-2 border-solid border-white rounded-lg px-4 text-2xl "
                type="text"
                placeholder={Hindi ? `ईमेल` : `Email`}
              />
              <input
                style={{
                  background: "#A7C4D2",
                  color: "#3f3e40",
                }}
                className="w-max h-full border-2 border-solid border-white rounded-lg px-4 text-2xl "
                type="text"
                placeholder={Hindi ? `आप क्या करते हो ?` : `What Do You Do ?`}
              />
            </div>
            <div
              style={{
                width: "13%",
              }}
              className="h-12 mx-auto"
            >
              {Hindi ? (
                <button
                  style={{
                    backgroundColor: "#ffcc29",
                    fontFamily: "Uniform Bold",
                    color: "#3f3e40",
                  }}
                  className="w-full h-full mx-auto border-2 rounded-lg "
                >
                  प्रस्तुत
                </button>
              ) : (
                <button
                  style={{
                    backgroundColor: "#ffcc29",
                    fontFamily: "Uniform Bold",
                    color: "#3f3e40",
                  }}
                  className="w-full h-full mx-auto border-2 rounded-lg "
                >
                  SUBMIT
                </button>
              )}
            </div>
          </div>
          {Hindi ? (
            <p className="text-center text-white text-xl py-8">
              कृपया सभी विवरण प्रदान करें
            </p>
          ) : (
            <p className="text-center text-white text-xl py-8">
              Please Provide All Details
            </p>
          )}
        </div>
        <div className="w-full my-12 flex justify-evenly items-center">
          <div className="w-2/4 flex justify-evenly items-center">
            <div className="w-2/5 h-full">
              <img
                className="w-full h-full object-contain"
                src="assets/images/partner/money.png"
                alt=""
              />
            </div>{" "}
            <div className="w-full">
              {Hindi ? (
                <h2
                  style={{
                    color: "#4a66aa",
                    fontFamily: "Uniform Bold",
                  }}
                  className="text-4xl uppercase text-left m-0 w-full ml-8"
                >
                  सबसे अच्छा <br />
                  मंच बेहतर कमाई <br />
                  के लिए{" "}
                </h2>
              ) : (
                <h2
                  style={{
                    color: "#4a66aa",
                    fontFamily: "Uniform Bold",
                  }}
                  className="text-5xl uppercase text-left m-0 w-full"
                >
                  BEST PLATEFORM FOR <br /> BETTER EARNING
                </h2>
              )}
            </div>
          </div>
          <div className="w-2/4 flex justify-evenly items-center">
            <div className="w-2/5 h-full">
              <img src="assets/images/partner/men.png" alt="" />
            </div>
            <div>
              {Hindi ? (
                <h3
                  style={{
                    color: "#5a386f",
                    fontFamily: "Uniform Bold",
                  }}
                  className="text-4xl w-full uppercase"
                >
                  अधिक सम्मान
                </h3>
              ) : (
                <h3
                  style={{
                    color: "#5a386f",
                    fontFamily: "Uniform Bold",
                  }}
                  className="text-5xl w-full uppercase"
                >
                  More <br /> RESPECT
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
