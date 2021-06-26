import React from "react";

const WhyAmc = () => {
  return (
    <section className="w-full h-full">
      <div className="w-80vw mx-auto">
        <div className="w-full my-4 flex flex-col justify-center items-start">
          <h2 className="text-3xl text-left text-darkblue py-1  tracking-wider">
            WHY AMC IS MOST BENEFICIAL FOR YOU ?
          </h2>
          <p>
            AMC not only ensures peace of mind but also allows you to focus on
            your life goals:{" "}
          </p>
        </div>

        <div className="flex w-full h-full flex-col justify-evenly items-center my-8">
          <WhyItem
            Image="assets/images/amc/04.png"
            Title="Peace of Mind"
            Data="The annual investment gives our client a tension-free experience"
          />
          <WhyItem
            Title="Customized Plans"
            Image="assets/images/amc/05.png"
            Data="Either choose the best plan or create a customized Protection for your appliances that can ensure a completely hassle-free experience."
          />
          <WhyItem
            Title="Genuine Parts"
            Image="assets/images/amc/06.png"
            Data="You are assured of genuine spare parts"
          />
          <WhyItem
            Title="Best Customer Service"
            Image="assets/images/amc/07.png"
            Data="You can simply give us a call or email us and get in touch with our office or technician"
          />
          <WhyItem
            Title="Risk Cover"
            Image="assets/images/amc/08.png"
            Data="This contract covers repair and replacement of expensive components, thus reducing risk. Preventive Checks: All the packages under this contract offer periodic maintenance checks which help in identifying problems early, preventing costly downtimes."
          />
        </div>

        <div className="flex justify-center items-start flex-col my-8 w-full">
          <h2 className="text-4xl text-darkblue py-1 tracking-wide text-left">
            AID24x7 DIFFERENCE
          </h2>
          <p className="text-lg py-4 text-left w-full leading-5">
            We have engaged ourselves in providing the highest quality services
            in maintaining and repairing appliances and other household services
            to our clients. This is only possible with our skilled professionals
            who utilize the latest technology for all appliances. The service
            provided is currently high in demand for its time management
            capability and reliability. We provide the best deal at the most
            reasonable rate.{" "}
          </p>
        </div>

        <div className="flex justify-center items-start flex-col my-8 w-full">
          <h2 className="text-4xl text-darkblue py-1 tracking-wide text-left">
            WE HAVE AMC BOTH FOR :
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-11/12 my-4">
            <div className="w-full flex flex-col lg:flex-row items-center my-4 lg:my-0 lg:h-52">
              <div className="w-3/4 lg:w-2/5 h-full">
                <img
                  className="w-full h-full object-cover"
                  src="assets/images/amc/09.png"
                  alt=""
                ></img>
              </div>
              <div className=" lg:pl-12 text-peatch flex flex-col justify-center items-center">
                <h3 className="text-3xl font-normal text-center tracking-wider py-0 text-peatch">
                  HOUSEHOLDS
                </h3>
                <h2 className="text-4xl font-black text-center tracking-wider text-peatch">
                  AMC
                </h2>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center my-4 lg:my-0 lg:h-52">
              <div className="w-3/4 lg:w-2/5 h-full">
                <img
                  className="w-full h-full object-cover"
                  src="assets/images/amc/10.png"
                  alt=""
                ></img>
              </div>
              <div className=" lg:pl-12 text-lightVoilet flex flex-col justify-center items-center">
                <h3 className="text-3xl font-normal text-center tracking-wider py-0 text-lightVoilet">
                  CORPORATE
                </h3>
                <h2 className="text-4xl font-black text-center tracking-wider text-lightVoilet">
                  AMC
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmc;

const WhyItem = ({ Image, Title, Data }) => {
  return (
    <div className="w-full lg:h-24 flex flex-col lg:flex-row justify-start lg:items-center border-b-2">
      <div className="w-28 h-full flex flex-col lg:flex-row justify-center items-center">
        <img className="w-full h-16 object-contain" src={Image} alt=""></img>
      </div>
      <div className="lg:w-3/4  h-full text-center flex flex-col lg:flex-row items-center lg:ml-10">
        <h3 className="text-2xl tracking-wider py-0 w-full lg:w-80 text-left font-semibold text-darkblue">
          {Title}
        </h3>
        <p className="tracking-wider text-base leading-5 py-1 w-full lg:w-4/5 text-left">
          {Data}
        </p>
      </div>
    </div>
  );
};
