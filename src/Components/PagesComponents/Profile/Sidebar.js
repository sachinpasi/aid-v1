import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaAddressCard } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdHistory, MdChatBubble } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

import { SIGNOUT } from "../../../Redux/_features/_userSlice";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const HandleSignOut = () => {
    dispatch(SIGNOUT());
  };
  return (
    <div
      style={{ background: "#194350" }}
      className="w-1/6  flex flex-col justify-between   px-4 py-24"
    >
      <div className="flex flex-col justify-center items-start">
        <SidebarItem
          To="profile/bookings"
          Active={location.pathname === "/profile/bookings" ? "true" : ""}
          Name="My Bookings"
          Icon={FiPackage}
        />
        <SidebarItem
          Name="Profile Information"
          Active={location.pathname === "/profile" ? "true" : ""}
          To="profile"
          Icon={FaUserCircle}
        />
        <SidebarItem Name="Account Setting" Icon={FiPackage} />
        <SidebarItem Name="Manage Address" Icon={FaAddressCard} />
        <SidebarItem Name="Payment History" Icon={MdHistory} />
        <SidebarItem Name="My Chats" Icon={MdChatBubble} />
        <div
          onClick={HandleSignOut}
          className="flex justify-start items-center px-4 py-2 cursor-pointer mt-40 "
        >
          <RiLogoutCircleRLine className="text-2xl flex justify-center items-center text-white mr-3  my-8" />
          <p className="text-xl text-white tracking-wide leading-5 ">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ Active, To, Name, Icon }) => (
  <Link
    to={`/${To}`}
    className={`my-1 flex justify-start items-center px-4 py-2 ${
      Active ? "bg-darkblue   rounded-md" : ""
    } `}
  >
    {Icon && (
      <Icon className="text-2xl flex justify-center items-center text-white mr-3      " />
    )}
    <p className="text-xl text-white tracking-wide leading-5 ">{Name}</p>
  </Link>
);
