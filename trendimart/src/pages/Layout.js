import React from "react";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Layout;
