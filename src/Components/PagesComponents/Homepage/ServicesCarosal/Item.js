import React from "react";
import { Link } from "react-router-dom";
const Item = ({ ImageURL, Name, To }) => {
  return (
    <Link
      to={To}
      className="w-36 mt-3 mb-2 mx-auto flex justify-center items-center flex-col cursor-pointer"
    >
      <img className="w-16" src={ImageURL} alt="" />
      <p className="text-lg text-darkblue text-center capitalize leading-5">
        {Name}
      </p>
    </Link>
  );
};

export default Item;
