import React from "react";
import Sidebar from "./Sidebar";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Redux/_features/_userSlice";

const Main = () => {
  const user = useSelector(selectUser);

  return (
    <main className="w-full h-screen flex">
      <Sidebar />
      <div className="w-4/5 ml-6 relative">
        <div className="my-8">
          <p className="text-3xl font-semibold">Edit Profile</p>
          <div className="w-2/4 flex flex-col justify-center items-start">
            <div className="flex justify-center items-center w-full">
              <div className="w-48 h-48 rounded-full bg-gray-400 flex justify-end items-end">
                <div className="w-8 h-8 rounded-full bg-darkblue flex justify-center items-center mb-4 mr-4 cursor-pointer">
                  <MdEdit
                    className="text-white text-xl
                   "
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full my-4">
              <div className="flex w-full justify-between my-2 ">
                <div className=" flex w-12/25 flex-col ">
                  <p className="text-lg">First Name</p>
                  <input
                    type="text"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                    defaultValue="user"
                  />
                </div>
                <div className=" flex w-12/25 flex-col ">
                  <p className="text-lg">Last Name</p>
                  <input
                    type="text"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between my-2 ">
                <div className=" flex w-full flex-col ">
                  <p className="text-lg">Email</p>
                  <input
                    type="email"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                    defaultValue="user@gmail.com"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between my-2 ">
                <div className=" flex w-full flex-col ">
                  <p className="text-lg">Contact Number</p>
                  <input
                    type="tel"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                    defaultValue={user.mobile}
                  />
                </div>
              </div>
              <div className="flex justify-end items-center w-full my-4">
                <button className="py-2 px-8 bg-darkblue text-white text-xl">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
