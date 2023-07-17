import React from "react";
import { Rupees, Rupe } from "../../styles/components/assets/images";
import { Button } from "@mui/material";
import { fetchCart } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PlaceOrder = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const discount = 1.3;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatching function to store
    dispatch(fetchCart());
  }, [dispatch]);

  console.log(data);

  if (loading) {
    return console.log("loading");
  }

  if (error) {
    return console.log("error ", error);
  }

  const totalPrice = data.reduce((sum, cart) => sum + cart.price, 0);
  const fee = 10;
  const result = totalPrice * 100 * discount;
  const discountResult = totalPrice * 100 * 0.3;
  const totalAmount = result - discountResult + fee;

  return (
    <>
      <div className="detail-wrapper">
        <h2 className="heading font-weight-700">PRICE DETAILS (1Item)</h2>
        <div>
          <div className="amount justify-between flex pt-4">
            <span className="">Total MRP</span>

            <div>
              <img
                src={Rupees}
                alt="summer-collection"
                className="left-image"
              />
              <span className="number">{result}</span>
            </div>
          </div>

          <div className="amount justify-between flex pt-2">
            <span>Discount on MRP</span>
            <div>
              <img src={Rupe} alt="summer-collection" className="left-image" />
              <span className="number light">{discountResult}</span>
            </div>
          </div>

          <div className="amount justify-between flex pt-2">
            <span>
              Convenience Fee <span>Know More</span>
            </span>
            <div>
              <img
                src={Rupees}
                alt="summer-collection"
                className="left-image"
              />
              <span className="number">{fee} </span>
            </div>
          </div>
        </div>

        <div className="text">
          <div className="amount justify-between flex pt-10 pb-7">
            <span className="bold-text">Total Amount</span>
            <div>
              <img
                src={Rupees}
                alt="summer-collection"
                className="left-image"
              />
              <span className="number">{totalAmount}</span>
            </div>
          </div>

          <Button
            variant="contained"
            disableElevation="true"
            className="width-100 pay-button"
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
