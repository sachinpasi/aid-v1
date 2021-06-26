import React from "react";

const KeyFeatureItem = ({ Name }) => {
  return (
    <div
      style={{
        background: "url(assets/images/packages/bgcircle.png)",
      }}
      className=" w-32 h-32  lg:w-52 lg:h-52 bg-cover bg-center mx-4  my-4 bg-no-repeat flex justify-center items-center"
    >
      <h5 className="text-pink uppercase text-center  font-semibold tracking-wider feature-text">
        {Name}
      </h5>
    </div>
  );
};

export default KeyFeatureItem;
