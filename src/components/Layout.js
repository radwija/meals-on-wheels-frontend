import React from "react";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
import { LandingPage } from "../pages/LandingPage";
const Layout = (props) => {
  return (
    <div>
      <Outlet />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
