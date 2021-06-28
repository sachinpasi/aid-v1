import React from "react";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <section className="w-full h-screen ">
      <div className="w-11/12 mx-auto h-full flex justify-between items-center">
        <Sidebar />
        <main></main>
      </div>
    </section>
  );
};

export default Main;
