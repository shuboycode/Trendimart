import React from "react";
import Button from "@mui/material/Button";
import CardAddress from "../components/PaymentSection/CardAddress";
import Container from "@mui/material/Container";
import PlaceOrder from "../components/PaymentSection/PlaceOrder";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { ButtonGroup } from "@mui/material";

const PaymentPageSection = () => {
  return (
    <>
      <Header></Header>
      <Container
        maxWidth="false"
        sx={{ maxWidth: "1920px" }}
        className="filter-sec-wrapper"
      >
        <div className="justify-center">
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

                {/* <ButtonGroup
                  disableElevation
                  variant="outlined"
                  aria-label="Disabled elevation buttons"
                  className="cart-button mr-4"
                >
                  <Button>CHANGE ADDRESS</Button>
                </ButtonGroup> */}
                <Button
                  variant="contained"
                  disableElevation="true"
                   className="address-button"
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

export default PaymentPageSection;
