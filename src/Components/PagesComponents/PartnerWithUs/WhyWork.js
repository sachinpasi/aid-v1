import React from "react";
import "./shadow.css";
const WhyWork = ({ Hindi }) => {
  return (
    <section className="w-full h-full">
      <div className="w-80vw mx-auto">
        <div className="flex w-full  mx-auto justify-evenly">
          <div
            style={{
              width: "38%",
            }}
            className="h-full flex justify-center items-center"
          >
            <h1
              style={{
                fontSize: "400px",
                fontFamily: "Arial",
                fontWeight: "800",
                color: "#de9340",
                lineHeight: "400px",
              }}
            >
              ?
            </h1>
            {Hindi ? (
              <div
                style={{
                  color: "#062238",
                  fontFamily: "Uniform Bold",
                }}
                className="mt-16 "
              >
                <h2 className="text-6xl font-extrabold w-full -ml-2">हमारे </h2>
                <h2
                  className="text-6xl font-extrabold w-full "
                  style={{ marginLeft: "-1rem" }}
                >
                  साथ{" "}
                </h2>
                <h2
                  className="text-6xl font-extrabold w-full "
                  style={{ marginLeft: "-4rem" }}
                >
                  काम{" "}
                </h2>
                <h2
                  className="text-6xl font-extrabold w-full whitespace-nowrap my-2 "
                  style={{ marginLeft: "-4rem" }}
                >
                  क्यों करें
                </h2>
              </div>
            ) : (
              <div
                style={{
                  color: "#062238",
                  fontFamily: "Uniform Bold",
                }}
                className="mt-16 "
              >
                <h2 className="text-6xl font-extrabold w-full -ml-2">WHY</h2>
                <h2
                  className="text-6xl font-extrabold w-full "
                  style={{ marginLeft: "-0.7rem" }}
                >
                  WORK
                </h2>
                <h2
                  className="text-6xl font-extrabold w-full "
                  style={{ marginLeft: "-3rem" }}
                >
                  WITH
                </h2>
                <h2
                  className="text-6xl font-extrabold w-full whitespace-nowrap "
                  style={{ marginLeft: "-5rem" }}
                >
                  AID 24x7
                </h2>
              </div>
            )}
          </div>
          {Hindi ? (
            <div className="w-3/4 h-full flex flex-col justify-center items-center mt-20">
              <div
                style={{
                  backgroundColor: "#f6afce",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 ml-40 "
              >
                <div className="left" />
                एक कैरियर शुरू करें, सिर्फ एक नौकरी नहीं
                <div className="right" />
              </div>
              <div
                style={{
                  backgroundColor: "#91d8f7",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 -ml-40 "
              >
                <div className="left" />
                आपका ज्ञान, कौशल और अनुभव मूल्यवान है
                <div className="right" />
              </div>
              <div
                style={{
                  backgroundColor: "#c8c5e2",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 -ml-12 "
              >
                <div className="left" />
                स्वतंत्र रूप से काम करें
                <div className="right" />
              </div>
              <div
                style={{
                  backgroundColor: "#a7c4d2",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 -ml-40 "
              >
                <div className="left" />
                उच्च मानकों और नैतिकता वाले ब्रांड के लिए काम करें
                <div className="right" />
              </div>
            </div>
          ) : (
            <div className="w-3/4 h-full flex flex-col justify-center items-center mt-20">
              <div
                style={{
                  backgroundColor: "#f6afce",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 ml-40 "
              >
                <div className="left" />
                Start A Carrer, Not Just A Job
                <div className="right" />
              </div>
              <div
                style={{
                  backgroundColor: "#91d8f7",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 -ml-40 "
              >
                <div className="left" />
                Your knowledge, skills, and experience are valued
                <div className="right" />
              </div>
              <div
                style={{
                  backgroundColor: "#c8c5e2",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 -ml-12 "
              >
                <div className="left" />
                Work independently, but not by yourself
                <div className="right" />
              </div>
              <div
                style={{
                  backgroundColor: "#a7c4d2",
                  color: "#373435",
                }}
                className="w-3/4 h-12 flex justify-center items-center text-2xl relative my-4 -ml-40 "
              >
                <div className="left" />
                Work for a brand with high standards and ethics
                <div className="right" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
