import React from "react";
import { Link } from "react-router-dom";

import { MdFiberManualRecord } from "react-icons/md";

const ServicesLink = ({ Name, To }) => {
  return (
    <Link
      to={To}
      className="text-white text-lg py-1 uppercase flex justify-center items-center h-7"
    >
      <MdFiberManualRecord className="text-white text-xl py-0.5 px-0.5" />
      {Name}
    </Link>
  );
};

export default ServicesLink;
