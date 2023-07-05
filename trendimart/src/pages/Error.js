import React from "react";
import { removecolor } from "../styles/components/assets/images";
import { Container } from "@mui/system";

const ErrorPage = () => {
  return (
    <>
      <Container
        maxWidth="false"
        sx={{ maxWidth: "1920px" }}
        className="filter-sec-wrapper"
      >
        <div className="error-page flex-center">
          <div className="error-img">
            <img src={removecolor} alt="error" className="" />
          </div>
          <div className="error-content">
            <p>Be cool!</p>
            <p className="heading">It´s just 404 ... ;</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ErrorPage;
