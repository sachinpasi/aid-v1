import React from "react";
import KeyFeatureItem from "./KeyFeatureItem";

const KeyFeatures = () => {
  return (
    <section className="w-full h-full">
      <div className="w-11/12 h-full mx-auto flex flex-col justify-center items-center py-12">
        <h2>
          Choose the service package that suits you the best as AID24x7 not only
          provides you flexibility but also ensures your convenience.
        </h2>
        <div className="w-full lg:w-11/12 grid grid-cols-2 lg:grid-cols-5  lg:py-4  place-items-center items-center ">
          <KeyFeatureItem Name="COST EFFECTIVE" />
          <KeyFeatureItem Name="Hoslistic" />
          <KeyFeatureItem Name="Premium Backend service" />
          <KeyFeatureItem Name="quick response" />
          <KeyFeatureItem Name="priority service" />
          <KeyFeatureItem Name="hassle free" />
          <KeyFeatureItem Name="no need to remember your next service date" />
          <KeyFeatureItem Name="advanced palnning" />
          <KeyFeatureItem Name="gives you rate advantages" />
          <KeyFeatureItem Name="genuine parts" />
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
