import React from "react";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { Navbar } from "./Navbar";
const Layout = ({ children, isUpdated }) => {
  return (
    <div>
      <Navbar isProfileUpdated={isUpdated} />
      {/* <Outlet /> */}
      <div className="min-h-screen pt-[112px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
