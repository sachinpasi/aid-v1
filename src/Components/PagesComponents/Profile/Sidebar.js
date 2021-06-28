import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SIGNOUT } from "../../../Redux/_features/_userSlice";
const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const HandleSignOut = () => {
    dispatch(SIGNOUT());
  };

  return (
    <section className="w-60 h-full">
      <div className="flex flex-col justify-start items-center w-full h-3/4 mt-20">
        <div className="w-full h-auto border-2 border-gray-500 flex px-4 items-center py-2">
          <img className="w-1/5" src="/assets/images/profile/user.svg" alt="" />
          <div className="flex justify-center items-center pl-4">
            <p className="text-2xl">Hello</p>
            <p className=" pl-1 text-2xl "> user</p>
          </div>
        </div>

        <div className="w-full mt-4 h-auto border-2 border-gray-500 flex flex-col  items-center ">
          <NavItem
            Active={location.pathname === "/profile/orders" ? "true" : ""}
            Name="My Orders"
            To="orders"
          />
          <NavItem Name="Account settings" To="" />
          <NavItem Name="Profile Information" To="orders" />
          <NavItem Name="PAN Card informtaion" To="orders" />
          <NavItem Name="Payment" To="orders" />
          <NavItem Name="Gift Cards" To="orders" />
          <NavItem Name="Saved UPI" To="orders" />
          <NavItem Name="Saved Cards" To="orders" />
          <NavItem Name="My Chats" To="orders" />
          <div
            onClick={HandleSignOut}
            className="w-full px-4   h-10 flex justify-start items-center cursor-pointer"
          >
            <p className="text-xl">Log Out</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

const NavItem = ({ Name, To, Active }) => (
  <Link
    to={`/profile/${To}`}
    className={`${
      Active && "bg-darkblue text-white"
    }  w-full px-4  h-10 flex justify-start items-center`}
  >
    <p className="text-xl">{Name}</p>
  </Link>
);
