import React, { useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch } from "react-redux";

import { API } from "../../../API";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BOOKSERVICE } from "../../../Redux/_features/_serviceBookingSlice";

const Banner = () => {
  const [Services, setServices] = useState([]);
  const [ChildServices, setChildServices] = useState(null);
  const [SelectedParentService, setSelectedParentService] = useState();
  const [SelectedGrandChildServices, setSelectedGrandChildServices] =
    useState();
  const [SelectedChildService, setSelectedChildService] = useState();

  const [isSubmitButtonPressed, setisSubmitButtonPressed] = useState(false);
  const dispatch = useDispatch();

  const Input = ({ label, register, required, placeholder, type }) => (
    <input
      type={type ? type : "text"}
      placeholder={placeholder}
      className="w-full bg-gray-100 h-8 rounded-sm text-xl my-0.5  px-2 uppercase "
      {...register(label, { required })}
    />
  );

  const Address = ({ label, register, required, placeholder }) => (
    <textarea
      cols="1"
      style={{
        minHeight: "36px",
      }}
      placeholder={placeholder}
      className="w-full bg-gray-100  rounded-sm text-xl my-0.5 px-2 uppercase placeholder-black "
      {...register(label, { required })}
    />
  );

  const TimeSelect = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
      <select
        className="w-full bg-gray-100 h-8 rounded-sm text-xl my-0.5  px-2 uppercase "
        name={name}
        ref={ref}
        onChange={onChange}
      >
        <option selected disabled hidden>
          Time
        </option>
        <option value="11 AM">11 AM</option>
      </select>
    </>
  ));

  const FetchAllServices = async () => {
    const res = await axios.get(`${API}/parent-service/show`);
    if (res.status === 200) {
      setServices(res.data.data);
    }
  };

  const HandleChidServices = async () => {
    const res = await axios.get(
      `${API}/parent-service/get/${SelectedParentService}`
    );
    if (res.status === 200) {
      console.log(res.data.data);
      setChildServices(res.data.data);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const HandleWidgetSubmit = (data) => {
    const { date, mobileNo, name, time } = data;
    dispatch(
      BOOKSERVICE({
        name: name,
        date: date,
        mobileNo: mobileNo,
        SelectedParentService: SelectedParentService,
        SelectedGrandChildService: SelectedGrandChildServices,
        SelectedChildService: SelectedChildService,
        time: time,
      })
    );
  };

  useEffect(() => {
    FetchAllServices();
  }, []);

  useEffect(() => {
    HandleChidServices();
  }, [SelectedParentService]);
  return (
    <section className="h-screen lg:h-448px   bg-cover bg-no-repeat relative">
      <div className="w-full h-full">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
        >
          <div className="w-screen h-screen lg:h-448px">
            <img
              className="w-full  object-cover"
              src="assets/images/homepage/banner/bannerbg.png"
              alt=""
            />
          </div>
          <div className="w-screen h-screen lg:h-448px">
            <img
              className="w-full h-full object-cover"
              src="assets/images/homepage/banner/2.jpeg"
              alt=""
            />
          </div>
          <div className="w-screen h-screen lg:h-448px">
            <img
              className="w-full h-full object-cover"
              src="assets/images/homepage/banner/3.jpeg"
              alt=""
            />
          </div>
        </Carousel>
      </div>

      <div className="absolute z-30 lg:right-12 top-4 w-full  lg:w-auto h-full mx-auto flex justify-center items-center lg:justify-between ">
        <div></div>
        <div className="w-80 md:w-4/5 lg:w-80 my-0 bg-light-yellow rounded-xl shadow-2xl ">
          <h5 className="text-3xl py-1 text font-medium text-center">
            Book Your Service
          </h5>
          <form
            onSubmit={handleSubmit(HandleWidgetSubmit)}
            className="w-full h-auto bg-darkblue rounded-xl py-2 px-3 "
          >
            <Input
              placeholder="Name"
              label="name"
              register={register}
              required
            />
            <Input
              placeholder="+91"
              label="mobileNo"
              register={register}
              required
            />

            <select
              value={SelectedParentService}
              onChange={(e) => {
                setSelectedParentService(e.target.value);
              }}
              className="w-full bg-gray-100 h-8 rounded-sm text-xl my-0.5  px-2 uppercase "
            >
              <option selected disabled hidden>
                Service Type
              </option>
              {Services.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>

            {ChildServices && (
              <>
                {ChildServices.grand_child.length !== 0 && (
                  <select
                    value={SelectedGrandChildServices}
                    onChange={(e) => {
                      setSelectedGrandChildServices(e.target.value);
                    }}
                    className="w-full bg-gray-100 h-8 rounded-sm text-xl my-0.5  px-2 uppercase "
                  >
                    <option selected disabled hidden>
                      Please Select A Grand Child Service
                    </option>
                    {ChildServices?.grand_child.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                )}
              </>
            )}

            {ChildServices?.child && (
              <>
                {ChildServices.child.length !== 0 && (
                  <select
                    value={SelectedChildService}
                    onChange={(e) => {
                      setSelectedChildService(e.target.value);
                    }}
                    className="w-full bg-gray-100 h-8 rounded-sm text-xl my-0.5  px-2 uppercase "
                  >
                    <option selected disabled hidden>
                      Please Select A Child Service
                    </option>
                    {ChildServices?.child.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                )}
              </>
            )}

            <Input type="Date" label="date" register={register} required />
            <TimeSelect label="time" {...register("time")} />
            <Address
              placeholder="Address"
              register={register}
              label="address"
              required
            />
            {(errors.name ||
              errors.mobileNo ||
              errors.serviceType ||
              errors.date) && (
              <small className="text-red-500"> * All Feild is Required</small>
            )}
            <div className="w-auto mx-auto py-1 flex justify-start items-center">
              <input
                className="h-6 w-6 mr-4"
                type="checkbox"
                value="Agree"
              ></input>
              <p className="text-white text-base"> I Agree to Aid 24x7</p>
            </div>
            <div className="w-auto mx-auto py-1 flex justify-start items-center">
              <button
                className="w-full bg-light-yellow h-9 rounded-md mx-1 text-2xl font-medium "
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
