import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Redux/_features/_userSlice";
import axios from "axios";
import { API } from "../../../API";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Main = () => {
  const user = useSelector(selectUser);
  const [UserData, setUserData] = useState();
  const [UpdatingData, setUpdatingData] = useState({});
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Mobile, setMobile] = useState();
  const [Otp, setOtp] = useState();
  const [IsOtpSent, setIsOtpSent] = useState(false);

  const FetchUserData = async () => {
    const res = await axios.get(`${API}/profile/show`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res.data);
    if (res.status === 200) {
      setUserData(res.data.data);
    }
  };

  const HandleUpdatingData = () => {
    if (UserData?.name !== Name) {
      setUpdatingData({
        name: Name,
      });
    }
    if (UserData?.email !== Email) {
      setUpdatingData({
        email: Email,
      });
    }
    if (UserData?.mobile !== Mobile && Mobile.length === 10) {
      setUpdatingData({
        mobile: Mobile,
      });
    }
    if (UserData?.name !== Name && UserData?.email !== Email) {
      setUpdatingData({
        name: Name,
        email: Email,
      });
    }
    if (
      UserData?.name !== Name &&
      UserData?.email !== Email &&
      UserData?.mobile &&
      Mobile.length === 10
    ) {
      setUpdatingData({
        name: Name,
        email: Email,
        mobile: Mobile,
      });
    }
  };

  console.log(UpdatingData);
  const UpdateUserData = async () => {
    const res = await axios.post(`${API}/profile/edit`, UpdatingData, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    console.log(res.data.data);
    if (res.status === 200) {
      if (!res.data.data.otp) {
        toast.success("Profile Updated Sucessfully");
      }
    }

    if (res.data.data.otp) {
      setIsOtpSent(true);
    }
  };

  const VerfiyOtp = async () => {
    const res = await axios.post(
      `${API}/profile/update-verify`,
      {
        mobile: Mobile,
        otp: Otp,
      },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    console.log(res.data);
    if (res.status === 200) {
      toast.success("Mobile Number Changed Sucessfully");

      window.location.reload();
    }
  };

  useEffect(() => {
    FetchUserData();
  }, []);

  useEffect(() => {
    if (UserData?.name === null) {
      setName("Not Updated");
    } else {
      setName(UserData?.name);
    }
    if (UserData?.email === null) {
      setEmail("Not Updated");
    } else {
      setEmail(UserData?.email);
    }
    setMobile(UserData?.mobile);
  }, [UserData]);

  useEffect(() => {
    HandleUpdatingData();
  }, [Name, Email, Mobile]);

  return (
    <main className="w-full h-screen flex">
      <Sidebar />
      <div className="w-4/5 ml-6 relative">
        <div className="my-8">
          <p className="text-3xl font-semibold">Edit Profile</p>
          <div className="w-2/4 flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-48 h-48 rounded-full bg-gray-400 flex justify-end items-end">
                <div className="w-8 h-8 rounded-full bg-darkblue flex justify-center items-center mb-4 mr-4 cursor-pointer">
                  <MdEdit
                    className="text-white text-xl
                   "
                  />
                </div>
              </div>
              <p className="text-lg my-2">Profile Picture</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full my-4">
              <div className="flex w-full justify-between my-2 ">
                <div className=" flex w-full flex-col ">
                  <p className="text-lg"> Name</p>
                  <input
                    type="text"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* <div className=" flex w-12/25 flex-col ">
                  <p className="text-lg">Last Name</p>
                  <input
                    type="text"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                  />
                </div> */}
              </div>
              <div className="flex w-full justify-between my-2 ">
                <div className=" flex w-full flex-col ">
                  <p className="text-lg">Email</p>
                  <input
                    type="email"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between my-2 ">
                <div className=" flex w-full flex-col ">
                  <p className="text-lg">Contact Number</p>
                  <input
                    type="tel"
                    className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                    value={Mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                {IsOtpSent && (
                  <div className=" flex w-full flex-col ml-4 ">
                    <p className="text-lg">Otp</p>
                    <input
                      type="text"
                      className="w-full h-11 border-2 border-solid border-gray-300 my-2 px-4"
                      value={Otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end items-center w-full my-4">
                {IsOtpSent ? (
                  <button
                    onClick={VerfiyOtp}
                    className="py-2 px-8 bg-darkblue text-white text-xl"
                  >
                    Verify Otp
                  </button>
                ) : (
                  <button
                    onClick={UpdateUserData}
                    className="py-2 px-8 bg-darkblue text-white text-xl"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
