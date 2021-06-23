import React from "react";
import HowItWorksItem from "./HowItWorksItem";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-full flex-col lg:flex-row lg:w-11/12 h-full mx-auto flex justify-between items-start py-4">
        <div className=" w-full lg:w-2/4 h-full flex justify-center item-start mt-4">
          <div
            style={{}}
            className="flex-col lg:flex-row flex lg:mr-14  w-full"
          >
            <div className="flex flex-col justify-start items-start my-4 lg:my-0 w-full lg:w-2/4">
              <h1 className="text-5xl w-full text-center lg:text-left  pr-1 uppercase text-darkblue font-black ">
                Why Choose Us
              </h1>
              <img
                className="w-11/12 md:w-2/4 mx-auto lg:w-72 pt-4 lg:-ml-6 "
                src="assets/images/homepage/whychooseus/stamp.png"
                alt=""
              ></img>
            </div>
            <div className="w-11/12 mx-auto lg:mx-0 lg:w-2/4">
              <p className="text-xl text-gray-700 pb-4 ">
                Stop spending countless hours per task trying to find the right
                person for the job.
              </p>
              <h5 className="text-2xl py-4 font-semibold text-gray-800">
                The Time is Now!
              </h5>
              <p className="text-xl text-gray-700 pb-4">
                Stop wasting your time and energy looking for help or calling
                potential candidates who never answer.
              </p>
              <p className="text-xl text-gray-700 pb-4">
                Lets us save your time and energy finding the right help while
                giving you the ability to manage all your properties from one
                place.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "44%",
          }}
          className="grid md:grid-cols-2 lg:grid-cols-2 w-full lg:w-6/12  "
        >
          <WhyChooseUsItem
            Image="assets/images/homepage/whychooseus/experienced.png"
            Data="Our experienced team makes it easy to book professional home
          mainteance services online so you can free up your time and do what's
          important"
          />
          <WhyChooseUsItem
            Image="assets/images/homepage/whychooseus/relaible.png"
            Data="All you have to do is sign up for Aid 24x7 app on a computer or phone , and soon enough , our team willbe heading over to help you with yout requirements.

"
          />
          <WhyChooseUsItem
            Image="assets/images/homepage/whychooseus/flexible.png"
            Data="We not only provide trained service professionals but also ensure that you get the services as per the schedule most convenient to you.

"
          />
          <WhyChooseUsItem
            Image="assets/images/homepage/whychooseus/convinient.png"
            Data="The perfect gift for friends and family, Aid24x7 lets you make a convenient booking on the go. Choose from our pre-screened, trusted professionals who care about your home like you do."
          />{" "}
          <WhyChooseUsItem
            Image="assets/images/homepage/whychooseus/covid.png"
            Data="Be Fearless, as our Service professionals follow all the Covid guidelines as recommended by authorities, from regular temperature checks to Sanitizing before and after the service
"
          />
        </div>
      </div>
      <div className="w-full lg:w-11/12 h-full flex-col mx-auto flex justify-between items-start py-4">
        <h1 className="text-5xl mb-4 lg:mb-0 w-full text-center lg:text-left  text-darkblue font-black">
          How It Works
        </h1>
        <div className="mt-4 w-11/12 mx-auto  lg:w-full h-auto border-2 border-gray-300">
          <div
            style={{ marginTop: "-1.7rem" }}
            className=" sm:ml-0  flex justify-center items-center "
          >
            <h1 className="uppercase font-bold text-2xl lg:text-3xl text-darkblue tracking-normal lg:tracking-wide bg-white py-2 px-4 w-auto  ml-0 lg:ml-80 ">
              just follow 3 simple steps :
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-evenly items-start h-full py-6 px-4 ">
            <HowItWorksItem
              Width="25%"
              No="1"
              Title="Select Service"
              Data="You can select your desired service from service page or filling the form displayed on homepage."
            />
            <HowItWorksItem
              Width="25%"
              No="2"
              Title="Schedule your Selected Service"
              Data="Select your preferred date, time and address"
            />
            <HowItWorksItem
              Width="35%"
              No="3"
              Title="Get Confirmation within Seconds"
              Data="Relax! Your booking is confirmed. We will get in touch with you before our champ visit at your place to check your availability."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
