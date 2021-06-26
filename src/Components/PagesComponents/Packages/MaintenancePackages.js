import React from "react";
import PackagesCard from "./PackagesCard";

const MaintenancePackages = () => {
  return (
    <section className="w-full h-full">
      <div className="w-11/12 h-full mx-auto flex flex-col justify-center items-center py-12">
        <h1>Maintenance Packages</h1>
        <h3>
          Choose the service package that suits you the best as AID24x7 not only
          provides you flexibility but also ensures your convenience.
        </h3>

        <div
          style={{
            height: "570px",
          }}
          className="flex flex-col lg:flex-row justify-between items-center h-auto w-11/12 lg:w-5/6 lg:py-8"
        >
          <PackagesCard
            Color="#dc94b8"
            Title="GREEN"
            Visit="999 / 20 VISITS"
            Li1="Service delivery within 120 minutes"
            Li2="Service call attendance on priorty"
            Li3="Cover all Service & Repair Charges"
          />
          <PackagesCard
            Color="#cf7ca6"
            Title="GREEN+"
            Visit="2999 / 12 VISITS"
            ServiceCoverd="AC,LED TV,Washing Machine,It,Electrical,Plumber,Carpenter,Gyser "
            Li1="Service delivery within 120 minutes"
            Li2="Service call attendance on priorty"
            Li3="Cover all Service & Repair Charges"
          />
          <PackagesCard
            Color="#bd6390"
            Title="GREEN++"
            Visit="3999 / 15 VISITS"
            ServiceCoverd="AC,LED TV,Washing Machine,It,Electrical,Plumber,Carpenter,Gyser "
            Li1="Service delivery within 120 minutes"
            Li2="Service call attendance on priorty"
            Li3="Cover all Service & Repair Charges"
          />
        </div>
      </div>
    </section>
  );
};

export default MaintenancePackages;
