import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { API } from "../../../API";
import { LOGIN } from "../../../Redux/_features/_userSlice";
import { selectUser } from "../../../Redux/_features/_userSlice";

const Main = () => {
  const [MobileNo, setMobileNo] = useState("");
  const [isOtpSent, setisOtpSent] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onMobileNoSubmit = async (data) => {
    console.log(data);
    setMobileNo(data.mobile);
    const res = await axios.post(`${API}/user/sign-in`, {
      ...data,
    });
    console.log(res.data);
    setisOtpSent(true);
  };

  const onOtpSubmit = async (data) => {
    const { otp } = data;
    const res = await axios.post(`${API}/user/otp-verify`, {
      mobile: MobileNo,
      otp,
    });
    console.log(res);
    if (res.status === 200) {
      dispatch(
        LOGIN({
          isLoggedIn: true,
          name: res.data.data.name,
          email: res.data.data.email,
          mobile: res.data.data.mobile,
          token: res.data.data.api_token,
        })
      );
      history.push("/");
    }
  };

  if (user.isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <section
      style={{
        height: "90vh",
      }}
      className="w-full "
    >
      <div className="w-full h-full flex items-center">
        <div
          style={{
            background: "#BCABCC",
          }}
          className="w-2/4 h-full  flex flex-col justify-center items-center"
        >
          <img className="w-11/12" src="assets/images/login/login.svg" alt="" />
        </div>
        <div className="w-2/4 h-full flex flex-col justify-center items-center">
          <div className="w-3/4 h-3/4 my-auto mx-auto flex flex-col  items-start">
            <h3 className="text-5xl font-black text-black tracking-wide">
              Login
            </h3>
            <p className="text-xl text-gray-500">
              Welcome! Please Login to your account
            </p>

            <form
              onSubmit={handleSubmit(onMobileNoSubmit)}
              className="w-3/4 h-auto pt-12"
            >
              <div className="w-full flex flex-col justify-center items-start">
                <label className="text-xl text-gray-500 mx-2 py-2 ">
                  Phone Number
                </label>
                <input
                  style={{
                    border: "1px solid #bbb",
                  }}
                  disabled={isOtpSent}
                  className="w-full h-11 px-4 rounded-md text-gray-700 placeholder-gray-500 outline-none "
                  type="text"
                  placeholder="+91"
                  {...register("mobile", { required: true })}
                />
                {errors.mobile && (
                  <span className="ml-4 py-1 text-red-500">
                    * This field is required
                  </span>
                )}
                {!isOtpSent && (
                  <button
                    className="w-full my-4 py-2 rounded-md bg-darkblue text-white text-2xl"
                    type="submit"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>

            {isOtpSent && (
              <form
                onSubmit={handleSubmit(onOtpSubmit)}
                className="w-3/4 h-full py-2 "
              >
                <div className="w-full flex flex-col justify-center items-start">
                  <label className="text-xl text-gray-500 mx-2 py-2 ">
                    Otp
                  </label>
                  <input
                    style={{
                      border: "1px solid #bbb",
                    }}
                    className="w-full h-11 px-4 rounded-md text-gray-700 placeholder-gray-500 outline-none "
                    type="text"
                    placeholder="Please Enter The Otp Sent To Your Mobile No"
                    {...register("otp", { required: true })}
                  />
                  {errors.otp && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                  <button
                    className="w-full my-4 py-2 rounded-md bg-darkblue text-white text-2xl"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
