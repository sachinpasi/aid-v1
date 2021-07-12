import React from "react";

const Features = () => {
  return (
    <section className="w-full h-full">
      <div className="w-80vw mx-auto">
        <div className="flex justify-between py-4">
          <ul className="w-1/3 list-disc px-4">
            <Item Data="All are background-checked." />
            <Item Data="All work as per Covid appropriate behaviour." />
            <Item Data="We'll email a picture of your technician before he arrives." />
            <Item Data="Your technician will be in a clean uniform and have an ID badge" />
          </ul>
          <div className="w-2/3 px-4">
            <Item Data="All technicians recevie 150+ hours of mandatory ongoing classroom tranning each year in our state-of-the-art training facility." />
            <Item Data="Your technician will leave his work area cleaner then he found it and will always respect your property ,including wearning shoes covers inside your home" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

const Item = ({ Data }) => <li className="text-xl py-1">{Data}</li>;
