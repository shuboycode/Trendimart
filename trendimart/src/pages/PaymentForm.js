import React from "react";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import FormComponents from "../components/PaymentSection/FormComponents";
import CardAddress from "../components/PaymentSection/CardAddress";
import { Container } from "@mui/material";
import Gateway from "../components/PaymentSection/Gateway";

const PaymentForm = () => {
  return (
    <>
      <Header></Header>
      <Container maxWidth="false" sx={{ maxWidth: "1920px" }} className="">
        <div className="payment-wrapper justify-center">
          <div className="width-50">
            <CardAddress></CardAddress>
          </div>
          {/* <FormComponents></FormComponents> */}

          <Gateway></Gateway>
        </div>
      </Container>

      <div className="sec-bottom">
        <Container
          maxWidth="false"
          sx={{ maxWidth: "1920px" }}
          className="filter-sec-wrapper"
        >
          <FooterSection></FooterSection>
        </Container>
      </div>
    </>
  );
};

export default PaymentForm;
