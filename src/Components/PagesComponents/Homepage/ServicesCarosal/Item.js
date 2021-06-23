import React from "react";

const Item = ({ ImageURL, Name }) => {
  return (
    <div className="w-36 mt-3 mx-auto flex justify-center items-center flex-col cursor-pointer">
      <img className="w-16" src={ImageURL} alt="" />
      <p className="text-lg text-darkblue text-center">{Name}</p>
    </div>
  );
};

export default Item;
