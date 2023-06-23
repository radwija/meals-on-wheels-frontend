import React from "react";
import { Footer } from "./Footer";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
