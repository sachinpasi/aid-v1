import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="w-full h-full">
      <div className="w-80vw h-full mx-auto my-8">
        <div className="w-full flex flex-col justify-center items-start">
          <h5 className="w-4/5 text-left tracking-wide text-3xl leading-9 py-2 font-medium">
            Choose as per your requirement and get the benefit of Customized AMC
            plans by talking to our dedicated AMC Team:
          </h5>
          <p className="py-4 text-xl">
            Just fill the below AMC form and our dedicated AMC Team will get in
            touch with you within 24 working hours :
          </p>

          <form
            className="w-full lg:w-10/12 flex flex-col justify-between items-start my-1"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-baseline">
              <div className="w-1/5 h-auto flex justify-start items-center">
                <label>Your Name*</label>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full h-full min-h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", { required: true })}
                  ></input>
                  {errors.firstName && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full min-h-full h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", { required: true })}
                  ></input>
                  {errors.lastName && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-baseline">
              <div className="w-1/5 h-auto flex justify-start items-center">
                <label>Requirement *</label>
              </div>

              <div className="w-full h-auto flex justify-between items-center">
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <select
                    className="w-full h-full min-h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    {...register("package", {})}
                  >
                    <option className="w-full h-10" value="">
                      Household AMC
                    </option>
                    <option value=""> Corporate AMC </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-baseline">
              <div className="lg:w-1/5 h-auto flex justify-start items-center">
                <label>Your Address*</label>
              </div>

              <div className="w-full h-auto flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full h-full min-h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="House No"
                    {...register("HouseNo", { required: true })}
                  ></input>
                  {errors.HouseNo && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full min-h-full h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="City"
                    {...register("City", { required: true })}
                  ></input>
                  {errors.City && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full min-h-full h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="State"
                    {...register("State", { required: true })}
                  ></input>
                  {errors.State && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full min-h-full h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="Pincode"
                    {...register("Pincode", { required: true })}
                  ></input>
                  {errors.Pincode && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-baseline">
              <div className="w-1/5 h-auto flex justify-start items-center">
                <label>Contact*</label>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <input
                    className="w-full h-full min-h-full px-4 border-2 bg-gray-100  border-solid border-gray-200 "
                    type="text"
                    placeholder="+91"
                    {...register("PhoneMobile", { required: true })}
                  ></input>
                  {errors.PhoneMobile && (
                    <span className="ml-4 py-1 text-red-500">
                      * This field is required
                    </span>
                  )}
                </div>
                <div className="w-full lg:w-12/25 h-10 flex flex-col items-start justify-start my-3">
                  <button
                    className="w-full h-full min-h-full px-4 border-2  border-solid text-white bg-darkblue border-darkblue "
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="flex flex-col lg:flex-row justify-between lg:w-11/12 items-center my-8">
            <p className="lg:w-3/5 tracking-wider text-lg py-4  lg:border-r-2 border-darkblue ">
              Alternatively, you can give us a call to our dedicated specialists
              for any Package related enquiry:{" "}
            </p>
            <h3 className="lg:w-2/5 tracking-wider text-3xl lg:text-4xl py-1">
              <a className="text-black" href="tel:+9999-9999-99">
                Call : 9999-9999-99
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
