import React from "react";
import {
  Jacket,
  Rupees,
  Frame,
  Rup,
  Rupe,
} from "../../styles/components/assets/images";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";

const PlaceOrder = () => {
  return (
    <>
      <div className="detail-wrapper">
        <h2 className="heading font-weight-700">PRICE DETAILS (1Item)</h2>
        <div>
          <div className="amount justify-between pt-4">
            <span className="">Total MRP</span>
            <div>
              <img
                src={Rupees}
                alt="summer-collection"
                className="left-image"
              />
              <span className="number">6,899</span>
            </div>
          </div>

          <div className="amount justify-between pt-2">
            <span>Discount on MRP</span>
            <div>
              <img src={Rupe} alt="summer-collection" className="left-image" />
              <span className="number light">5,520</span>
            </div>
          </div>

          <div className="amount justify-between pt-2">
            <span>
              Convenience Fee <span>Know More</span>
            </span>
            <div>
              <img
                src={Rupees}
                alt="summer-collection"
                className="left-image"
              />
              <span className="number">10</span>
            </div>
          </div>
        </div>

        <div className="text">
          <div className="amount justify-between pt-10 pb-7">
            <span className="bold-text">Total Amount</span>
            <div>
              <img
                src={Rupees}
                alt="summer-collection"
                className="left-image"
              />
              <span className="number">1,087</span>
            </div>
          </div>

          <Button
            variant="contained"
            disableElevation="true"
            className="width-100"
          >
            {" "}
            PLACE ORDER
          </Button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
