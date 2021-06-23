import React from "react";
import DiscountCard from "./DiscountCard";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Discount.css";

const Discount = () => {
  return (
    <section className="w-full h-auto">
      <div className="w-11/12 flex-col lg:w-11/12 h-full mx-auto flex justify-center items-center py-4">
        <div className=" flex-col flex justify-center items-center">
          <h1 className=" text-center text-5xl w-5/6 lg:w-full pr-1 uppercase text-darkblue font-black ">
            DISCOUNT COUPONS
          </h1>
          <h3 className="text-center w-5/6 text-2xl lg:text-3xl text-gray-700 font-medium py-4">
            Make Your Experience more enjoyable with these Special Discount
            Offers
          </h3>
        </div>
        <div className="hidden md:grid py-4  md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DiscountCard
            Code="LED 25"
            Percent="25%"
            line="on LED TV Repairs on Visiting Charges"
            Bg="rgb(159, 238, 245)"
            TagBg="rgb(30, 134, 143)"
            BorderColor="rgb(153, 255, 255)"
          />{" "}
          <DiscountCard
            Code="WMR 25"
            Percent="25%"
            line="on Washing Machine Repairs on Visiting Charges"
            Bg="rgb(255, 242, 173)"
            TagBg="rgb(178, 165, 65)"
            BorderColor="rgb(181, 199, 139)"
          />{" "}
          <DiscountCard
            Code="GR 25"
            Percent="25%"
            line="on GEYSER Repairs on Visiting Charges"
            Bg="rgb(228, 224, 252)"
            TagBg="rgb(97, 87, 189)"
            BorderColor="rgb(208, 164, 255)"
          />{" "}
          <DiscountCard
            Code="LED 25"
            Percent="25%"
            line="on Airconditioner Repairs  on Visiting Charges"
            Bg="rgb(247, 212, 198)"
            TagBg="rgb(191, 91, 48)"
            BorderColor="rgb(223, 159, 132)"
          />
        </div>
        <OwlCarousel
          items={1}
          loop
          nav={true}
          className=" w-11/12  md:hidden lg:hidden"
        >
          <DiscountCard
            Code="LED 25"
            Percent="25%"
            line="on LED TV Repairs on Visiting Charges"
            Bg="rgb(159, 238, 245)"
            TagBg="rgb(30, 134, 143)"
            BorderColor="rgb(153, 255, 255)"
          />{" "}
          <DiscountCard
            Code="WMR 25"
            Percent="25%"
            line="on Washing Machine Repairs on Visiting Charges"
            Bg="rgb(255, 242, 173)"
            TagBg="rgb(178, 165, 65)"
            BorderColor="rgb(181, 199, 139)"
          />{" "}
          <DiscountCard
            Code="GR 25"
            Percent="25%"
            line="on GEYSER Repairs on Visiting Charges"
            Bg="rgb(228, 224, 252)"
            TagBg="rgb(97, 87, 189)"
            BorderColor="rgb(208, 164, 255)"
          />{" "}
          <DiscountCard
            Code="LED 25"
            Percent="25%"
            line="on Airconditioner Repairs  on Visiting Charges"
            Bg="rgb(247, 212, 198)"
            TagBg="rgb(191, 91, 48)"
            BorderColor="rgb(223, 159, 132)"
          />
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Discount;
