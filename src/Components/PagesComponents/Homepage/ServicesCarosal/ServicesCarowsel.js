import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./ServicesCarowsel.css";
import Item from "./Item";

const ServicesCarowsel = () => {
  return (
    <section className=" lg:h-28  bg-cover bg-no-repeat">
      <div className="hidden lg:flex w-11/12 lg:h-full mx-auto  justify-center items-center lg:justify-between ">
        <OwlCarousel items={8} loop nav={true}>
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/01.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/02.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/03.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/04.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/05.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/06.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/07.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/08.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/09.png"
            Name="Refridgerator Repair"
          />
        </OwlCarousel>
      </div>

      <div className="lg:hidden w-11/12 lg:h-full mx-auto flex justify-center items-center lg:justify-between ">
        <OwlCarousel items={2} loop nav={true}>
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/01.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/02.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/03.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/04.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/05.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/06.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/07.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/08.png"
            Name="Refridgerator Repair"
          />
          <Item
            ImageURL="assets/images/homepage/servicescarowsal/09.png"
            Name="Refridgerator Repair"
          />
        </OwlCarousel>
      </div>
    </section>
  );
};

export default ServicesCarowsel;
