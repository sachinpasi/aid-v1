import React from "react";

const Banner = ({ Hindi }) => {
  return (
    <section
      style={{
        height: "65vh",
        background: "url(assets/images/partner/bannerbg.png)  ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "1rem",
      }}
      className="w-full "
    >
      <div className="w-80vw  h-full mx-auto flex flex-start items-center">
        {Hindi ? (
          <div>
            <h5
              style={{
                fontFamily: "Uniform Bold",
              }}
              className="text-4xl leading-5 "
            >
              अगर आपके पास
            </h5>
            <h2
              style={{
                fontFamily: "Uniform Bold",
                color: "#c83369",
                fontSize: "50px",
                lineHeight: "120px",
              }}
            >
              कौसल है
            </h2>
            <h5
              className="text-4xl leading-5 "
              style={{
                fontFamily: "Uniform Bold",
                lineHeight: "45px",
              }}
            >
              तो हमारे पास
            </h5>
            <h3
              style={{
                fontFamily: "Uniform Bold",
                color: "#c83369",
                fontSize: "75px",
                lineHeight: "120px",
              }}
            >
              आपके लिए
            </h3>
            <h5
              className="text-4xl leading-5 "
              style={{
                fontFamily: "Uniform Bold",
                lineHeight: "45px",
              }}
            >
              काम है
            </h5>
          </div>
        ) : (
          <div>
            <h5
              style={{
                fontFamily: "Uniform Bold",
              }}
              className="text-4xl leading-5 "
            >
              IF YOU HAVE
            </h5>
            <h2
              style={{
                fontFamily: "Uniform Bold",
                color: "#c83369",
              }}
              className="text-9xl   "
            >
              SKILLS
            </h2>
            <h5
              style={{
                fontFamily: "Uniform Bold",
              }}
              className="text-4xl leading-5  "
            >
              WE HAVE
            </h5>
            <h3
              style={{
                fontFamily: "Uniform Bold",
                color: "#086bb3",
              }}
              className="text-9xl text-left p-0 "
            >
              WORK
            </h3>
            <h5
              style={{
                fontFamily: "Uniform Bold",
              }}
              className="text-4xl leading-5  "
            >
              FOR YOU
            </h5>
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
