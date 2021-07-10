import React, { useState } from "react";
import Banner from "../Components/PagesComponents/PartnerWithUs/Banner";
import JoinNow from "../Components/PagesComponents/PartnerWithUs/JoinNow";
import WhoCanApply from "../Components/PagesComponents/PartnerWithUs/WhoCanApply";
import WhyWork from "../Components/PagesComponents/PartnerWithUs/WhyWork";
import MainWrapper from "../Components/Wrapper/MainWrapper";

const PartnerWithUs = () => {
  const [Hindi, setHindi] = useState(false);

  const LangHandler = () => {
    setHindi(!Hindi);
  };
  return (
    <MainWrapper>
      {Hindi ? (
        <button
          style={{
            backgroundColor: "#ffcc29",
            borderColor: "#fff212",
          }}
          className="w-32 h-10 absolute border-4 right-3 top-24 mt-4 rounded-lg"
          onClick={LangHandler}
        >
          Back To English{" "}
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "#ffcc29",
            borderColor: "#fff212",
          }}
          className="w-32 h-10 absolute border-4 right-3 top-24 mt-4 rounded-lg"
          onClick={LangHandler}
        >
          हिंदी में{" "}
        </button>
      )}
      <Banner Hindi={Hindi} />
      <JoinNow Hindi={Hindi} />
      <WhyWork Hindi={Hindi} />
      <WhoCanApply Hindi={Hindi} />
    </MainWrapper>
  );
};

export default PartnerWithUs;
