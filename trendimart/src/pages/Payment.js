import React from "react";
import Button from "@mui/material/Button";
import CardAddress from "../components/PaymentSection/CardAddress";
import Container from "@mui/material/Container";
import PlaceOrder from "../components/PaymentSection/PlaceOrder";
import { Link } from "react-router-dom";

const PaymentPageSection = () => {
  return (
    <>
      <Container
        maxWidth="false"
        sx={{ maxWidth: "1920px" }}
        className="filter-sec-wrapper"
      >
        <div className="justify-center flex">
          <div className="address-wrapper flex">
            <div className="">
              <div className="address flex">
                <div>
                  <span>
                    Deliver to:{" "}
                    <span className="dark">Shubham kumar , 140308</span>
                  </span>

                  <p className="pt-1">
                    Nehar singh building, near ratan college, sohana Mohali
                    140308, Sohana, Mohali
                  </p>
                </div>

                <Button
                  variant="outlined"
                  disableElevation="true"
                  className="address-button pay-button"
                >
                  {" "}
                  CHANGE ADDRESS
                </Button>
              </div>

              <div className="">
                <CardAddress></CardAddress>
              </div>
            </div>

            <div className="price">
              <PlaceOrder></PlaceOrder>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaymentPageSection;
