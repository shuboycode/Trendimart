import React from "react";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Outlet } from "react-router";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <div className="sec-bottom">
        <Container
          className="personal-info-wrapper"
          maxWidth="false"
          sx={{ maxWidth: "1920px", border: "" }}
        >
          <FooterSection></FooterSection>
        </Container>
      </div>
    </>
  );
};

export default MainLayout;
