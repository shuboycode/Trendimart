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
      <Container maxWidth="false" sx={{ maxWidth: "1920px" }} className="">
        <div className="payment-wrapper justify-center">
          <div className="width-50">
            <CardAddress></CardAddress>
          </div>
        

          <Gateway></Gateway>
        </div>
      </Container>
    </>
  );
};

export default PaymentForm;
