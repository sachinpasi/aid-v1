import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ Icon, Color, To }) => {
  return (
    <Link
      to={To}
      style={{ borderColor: Color }}
      className=" cursor-pointer flex justify-center items-center rounded-full border-2 p-1 mx-1  hover:scale-110 "
    >
      <div style={{ color: Color }}>
        <Icon className="text-2xl  " />
      </div>
    </Link>
  );
};

export default SocialIcon;
