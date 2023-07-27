import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { CardElement } from "@stripe/react-stripe-js";
import { ElementsConsumer } from "@stripe/react-stripe-js";

import {
  visaPic,
  americanPic,
  payPic,
  atm,
  date,
  setting,
} from "../../styles/components/assets/images";

import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";

const Gateway = () => {
  const { cartItems, loading, error } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((sum, cart) => sum + cart.price, 0);
  const fee = 10;
  const discount = 1.3;
  const result = totalPrice * 100 * discount;
  const discountResult = totalPrice * 100 * 0.3;
  const totalAmount = result - discountResult + fee;
  const stripe = useStripe();
  const elements = useElements();
  const [errorCard, setErrorCard] = useState(null);
  const [loadingCard, setLoadingCard] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { stripe, elements } = this.props;
  //   if (!stripe || !elements) return;
  //   const card = elements.getElement(CardElement);
  //   console.log("card ",card )
  //   const result = await stripe.createToken(card);
  //   console.log("result ",result)

  //   if (result.error) {
  //     console.log("error", result.error.message);
  //   }
  //   else{
  //     console.log(result.token);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingCard(true);

    const cardElement = elements.getElement(CardElement);

    try {
      // Create a PaymentMethod from the card information
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      setLoadingCard(false);
    } catch (err) {
      setErrorCard("Error processing payment: " + err.message);
      setLoadingCard(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card details:</label>
          <CardElement />
        </div>
        <button type="submit" disabled={!stripe || loading}>
          {loading ? "Processing..." : "Pay"}
        </button>
        {error && <div>{error}</div>}
      </form>

      {/* <div className="card-payment">
        <div>
          <h4 className="heading">Payment Methods</h4>
          <FormControl className="width-100">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div className="subheading mt-9">
                <div>
                  <FormControlLabel
                    value="cod"
                    control={<Radio />}
                    label="Pay on Delivery"
                  />
                  <h5 className="type pl-10">Pay with cash on delivery</h5>
                </div>
              </div>
              <div className="justify-between">
                <div className="subheading mt-7">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Credit/Debit Cards"
                  />
                  <h5 className="text-end type pl-10">
                    Pay with your Credit / Debit Card
                  </h5>
                </div>

                <div className="small-icon">
                  <img src={visaPic} alt="image3" />
                  <img src={americanPic} alt="image3" />
                  <img src={payPic} alt="image3" />
                </div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="justify-between">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            ></RadioGroup>
          </FormControl>
        </div>

        <div className="pl-9 pr-9">
          <TextField
            className="width-100 mt-7"
            label="Card number"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={atm} alt="image3" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex mt-5 date-wrappper width-100 pl-9 pr-9">
          <div className="width-50">
            <TextField
              label="MM / YY"
              InputLabelProps={{ shrink: false }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={date} alt="image3" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="width-50">
            <TextField
              label="CVV"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <img src={setting} alt="image3" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>

        <div className="payment-button mt-5 justify-between">
          <Button
            variant="outlined"
            disableElevation="true"
            className="display-button"
          >
            {" "}
            Back
          </Button>
          <Button
            variant="contained"
            // disableElevation="true"
            // disable={!this.props.stripe}
            className="pay-button"
            onClick={handleSubmit}
          >
            {" "}
            Pay ${totalAmount}
          </Button>

          <button variant="contained" className="pay-button" onClick ={handleSubmit} disabled={!stripe || loading}>
            {loading ? "Processing..." : "Pay"}
          </button>
          {error && <div>{error}</div>}

         
        </div>
      </div> */}
    </>
  );
};

export default Gateway;
