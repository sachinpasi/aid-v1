import React from "react";
import { Link } from "react-router-dom";

const Navitem = ({
  Name,
  To,
  Icon,
  Color,
  MobHidden,
  DesktopHidden,
  Active,
}) => {
  return (
    <li
      className={`my-1.5 ${MobHidden ? `hidden lg:block` : ``}  ${
        DesktopHidden ? `lg:hidden` : ``
      }`}
    >
      <Link
        to={To}
        style={Color ? { color: Color } : { color: "white" }}
        className={`${
          Active ? `NavActive` : ``
        }   h-12 mobilenavitembg  w-full justify-start text-left  lg:text-center  text-2xl lg:text-xl  uppercase px-5 flex lg:justify-center items-center`}
      >
        {Icon && <Icon className="mr-2 mb-0.5  text-2xl" />}
        {Name}
      </Link>
    </li>
  );
};

export default Navitem;

export const AuthNavItem = ({
  Name,
  To,
  Icon,
  Color,
  MobHidden,
  DesktopHidden,
}) => {
  return (
    <li
      className={`my-1 ${MobHidden ? `hidden lg:block` : ``}  ${
        DesktopHidden ? `lg:hidden` : ``
      }`}
    >
      <Link
        to={To}
        style={{
          color: Color,
        }}
        className="h-12 mobileAuthItemBg  w-full justify-center text-left  lg:text-center  text-2xl lg:text-xl text-white uppercase px-5 flex lg:justify-center items-center"
      >
        {Icon && <Icon className="mr-2 mb-0.5  text-2xl" />}
        {Name}
      </Link>
    </li>
  );
};
