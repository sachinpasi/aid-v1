import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../API";
import { BOOKSERVICE } from "../../Redux/_features/_serviceBookingSlice";
import { selectUser } from "../../Redux/_features/_userSlice";

const BookingWidget = ({ Top }) => {
  const [Services, setServices] = useState([]);
  const [LocalityList, setLocalityList] = useState([]);
  const [ChildServices, setChildServices] = useState(null);

  const [SelectedLocalityItem, setSelectedLocalityItem] = useState();
  const [SelectedParentService, setSelectedParentService] = useState();
  const [SelectedGrandChildServices, setSelectedGrandChildServices] =
    useState();
  const [SelectedChildService, setSelectedChildService] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const { id } = useParams();

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
        <option value="10:00 AM">10 AM</option>
        <option value="11:00 AM">11 AM</option>
        <option value="12:00 AM">12 AM</option>
        <option value="01:00 PM">01 PM</option>
        <option value="02:00 PM">02 PM</option>
        <option value="03:00 PM">03 PM</option>
        <option value="04:00 PM">04 PM</option>
        <option value="05:00 PM">05 PM</option>
      </select>
    </>
  ));

  const FetchAllServices = async () => {
    const res = await axios.get(`${API}/parent-service/show`);
    if (res.status === 200) {
      setServices(res.data.data);
    }
  };

  const FetchAllLocality = async () => {
    const res = await axios.get(`${API}/locality/list`);
    console.log(res.data);
    if (res.status === 200) {
      setLocalityList(res.data.data);
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

  const HandleWidgetSubmit = async (data) => {
    if (user.isLoggedIn) {
      const { date, mobileNo, name, time, address } = data;

      var newdate = date.replace(/-/g, "/");

      function toTimestamp(strDate) {
        var datum = Date.parse(strDate);
        return datum / 1000;
      }
      var dateTime = `${date} ${time}`;
      var timestamp = toTimestamp(dateTime);
      console.log(timestamp);

      const res = await axios.post(
        `${API}/order/checkout`,
        {
          name: name,
          mobile: mobileNo,
          parent_service_id: SelectedParentService,
          child_service_id: SelectedChildService,
          service_date: newdate,
          service_time: timestamp,
          address: address,
          locality_id: SelectedLocalityItem,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(res);
      if (res.status === 200) {
        window.setTimeout(function () {
          history.push("/profile/orders");
        }, 3000);

        return toast.success("Service Booked Successfully!");
      }

      dispatch(
        BOOKSERVICE({
          name: name,
          date: date,
          mobileNo: mobileNo,
          SelectedParentService: SelectedParentService,
          SelectedGrandChildService: SelectedGrandChildServices,
          SelectedChildService: SelectedChildService,
          SelectedLocalityItem: SelectedLocalityItem,
          Address: address,
          time: time,
        })
      );
    } else
      window.setTimeout(function () {
        history.push("/profile");
      }, 2000);
    return toast.error("Please Login First");
  };

  useEffect(() => {
    FetchAllServices();
    FetchAllLocality();
  }, []);

  useEffect(() => {
    HandleChidServices();
  }, [SelectedParentService]);

  return (
    <div className="w-80 md:w-4/5 lg:w-80 my-0 bg-light-yellow rounded-xl shadow-2xl ">
      <h5 className="text-3xl py-1 text font-medium text-center">
        Book Your Service
      </h5>
      <form
        onSubmit={handleSubmit(HandleWidgetSubmit)}
        className="w-full h-auto bg-darkblue rounded-xl py-2 px-3 "
      >
        <Input placeholder="Name" label="name" register={register} required />
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
        <div className="flex">
          <div className="w-11/12 mr-1">
            <Input type="Date" label="date" register={register} required />
          </div>
          <div className="w-11/12">
            <TimeSelect label="time" {...register("time")} />
          </div>
        </div>

        <select
          value={SelectedLocalityItem}
          onChange={(e) => {
            setSelectedLocalityItem(e.target.value);
          }}
          className="w-full bg-gray-100 h-8 rounded-sm text-xl my-0.5  px-2 uppercase "
        >
          <option selected disabled hidden>
            Locality
          </option>
          {LocalityList?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <Address
          placeholder="Address"
          register={register}
          label="address"
          required
        />
        {(errors.Checkbox ||
          errors.name ||
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
            {...register("Checkbox", { required: true })}
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
  );
};

export default BookingWidget;
