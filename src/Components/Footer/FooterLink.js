import React from "react";

import { Link } from "react-router-dom";

const FooterLink = ({ Name, URL }) => {
  return (
    <Link
      to={URL}
      className="text-white font-light lg:font-normal text-xl py-0.5 px-0.2 uppercase"
    >
      {Name}
    </Link>
  );
};

export default FooterLink;
