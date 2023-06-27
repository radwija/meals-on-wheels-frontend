import React from "react";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { Navbar } from "./Navbar";
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <div className="min-h-screen pt-[65px]">
        {props.children}
      </div>
      <Footer />
    </div >
  );
};

export default Layout;
