import React from "react";
import Header from "../components/Header";
import { Container } from "@mui/material";
import { ItemOne } from "../styles/components/assets/images";
import { Button } from "@mui/material";
import FooterSection from "../components/FooterSection";

const OrderPage = () => {
  return (
    <>
      {/* content-wrapper*/}

      <div className="order-wrapper">
        <Container maxWidth="false" sx={{ maxWidth: "1220px" }} className="p-0">
          <div className="heading-order-sec mt-17">
            <h3 className="main font-weight-700 mb-8">
              My <span className="sub-heading">Orders</span>{" "}
              <span className="item-text">(2 Items)</span>
            </h3>
          </div>
        </Container>
        <Container
          maxWidth="false"
          sx={{ maxWidth: "1220px" }}
          className="order-sec"
        >
          {/* <div className="order-card flex"> */}
          <div className="card flex  mb-22">
            <div>
              <img src={ItemOne} alt="image3" />
            </div>

            <div className="order-card flex ml-10">
              <div className="order-detail">
                <h4 className="heading font-weight-700">Womens Black Tshirt</h4>
                <h5 className="sub-heading mt-3 mb-3">Brand Name</h5>
                <span className="">$100</span>

                <div className="order-loaction mt-3">
                  <span>Order Placed on :</span>
                  <span className="text"> 3 October 2020</span>
                </div>

                <div className="order-loaction mt-2">
                  <span>Ship To:</span>
                  <span className="text"> Anna Kathy</span>
                </div>

                <div className="button-wrapper mt-7">
                  <Button variant="outlined" size="small" className="small">
                    Add to cart
                  </Button>
                  <Button variant="text" className="medium">
                    Cancel
                  </Button>
                </div>
              </div>

              <div className="order-id">
                <div className="order-no flex">
                  <p className="heading">Order Number :</p>
                  <p className="transaction-id">#124-5660-9008</p>
                </div>
                <span>View Order Details</span>
              </div>
            </div>
          </div>

          <div className="card flex mt-8  mb-22">
            <div>
              <img src={ItemOne} alt="image3" />
            </div>

            <div className="order-card flex ml-10">
              <div className="order-detail">
                <h4 className="heading font-weight-700">Womens Black Tshirt</h4>
                <h5 className="sub-heading mt-3">Brand Name</h5>
                <span className="mt-3">$100</span>

                <div className="order-loaction mt-3">
                  <span>Order Placed on :</span>
                  <span className="text"> 3 October 2020</span>
                </div>

                <div className="order-loaction mt-2">
                  <span>Ship To:</span>
                  <span className="text"> Anna Kathy</span>
                </div>

                <div className="button-wrapper mt-7">
                  <Button variant="outlined" size="small" className="small">
                    Add to cart
                  </Button>
                  <Button variant="text" className="medium">
                    Cancel
                  </Button>
                </div>
              </div>

              <div className="order-id">
                <div className="order-no flex">
                  <p className="heading">Order Number :</p>
                  <p className="transaction-id">#124-5660-9008</p>
                </div>
                <span>View Order Details</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

     
    </>
  );
};

export default OrderPage;
