import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "react-phone-number-input/style.css";

import { useState } from "react";
import Input, { getCountryCallingCode } from "react-phone-number-input/input";

import { Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Gateway from "../PaymentSection/Gateway";
import { loadStripe } from "@stripe/stripe-js";
import {Link} from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentGateway from "../../pages/PaymentGateway";

export default function BasicTextFields() {
  const stripePromise = loadStripe(
    "pk_test_51NYLknSDdQJOY36sGUCpDlA9hJcMDpxSIr1zec77Lfi9zSkQAIIUDMITryWhojASfCU4quM7ixqIKjGVF8dri3lk00Wazlk1Xj"
  );

  
  console.log("stripePromise",stripePromise);
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };
  const [value, setValue] = useState();
  return (
    <>
      <div className="form-box mt-15">
        {!formVisible && (
          <>
            <div className="">
              <h3 className="form-heading">Contact Details</h3>
              <Box
                component="form"
                className="input-box  pt-5"
                noValidate
                autoComplete="off"
              >
                <div className="width-100  text-wrapper flex">
                  <div className="width-50">
                    <label className="user-name">First Name</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className="text-box"
                    />
                  </div>
                  <div className="width-50">
                    <label className="user-name">Last Name</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className="text-box"
                    />
                  </div>
                </div>
              </Box>
              <Box
                component="form"
                className="input-box  pt-5"
                noValidate
                autoComplete="off"
              >
                <div>
                  <label className="user-name">Email</label>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="text-box"
                  />
                </div>
              </Box>

              <div className="pt-5">
                <label className="user-name">Phone Number</label>
                <div className="flex pt-5 label-box">
                  {/* <div> +{getCountryCallingCode("US")}</div> */}
                  <Button disabled className="form-button">
                    +{getCountryCallingCode("US")}
                  </Button>

                  <Input
                    international
                    country="US"
                    value={value}
                    onChange={setValue}
                    className="width-100 box"
                  />
                </div>
              </div>
            </div>

            <div className="">
              {/*2nd part  */}

              <h3 className="form-heading mt-8">Shipping Details</h3>
              <Box
                component="form"
                className="input-box  pt-5"
                noValidate
                autoComplete="off"
              >
                <div>
                  <label className="user-name">Flat/House no.</label>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="text-box"
                  />
                </div>
              </Box>

              <Box
                component="form"
                className="input-box  pt-5"
                noValidate
                autoComplete="off"
              >
                <div>
                  <label className="user-name">Address</label>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    className="text-box"
                  />
                </div>
              </Box>

              <Box
                component="form"
                className="input-box  pt-5"
                noValidate
                autoComplete="off"
              >
                <div className="width-100  text-wrapper flex">
                  <div className="width-50">
                    <label className="user-name">City</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className="text-box"
                    />
                  </div>
                  <div className="width-50">
                    <label className="user-name">State</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className="text-box"
                    />
                  </div>
                </div>
              </Box>

              <Box
                component="form"
                className="input-box  pt-5"
                noValidate
                autoComplete="off"
              >
                <div className="width-100  text-wrapper flex">
                  <div className="width-50">
                    <label className="user-name">Postal Code</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className="text-box"
                    />
                  </div>
                  <div className="width-50">
                    <label className="user-name">Famous Landmark</label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className="text-box"
                    />
                  </div>
                </div>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="My shipping and billing address are same"
                  className="mt-5" 
                />
              </FormGroup>
            </div>
          </>
        )}

        <div className="submit-button mt-7">
          {formVisible ? (
              <Elements stripe={stripePromise}>
                 <Link to="/PaymentGateway">
                <Gateway></Gateway>
                </Link>
              </Elements>
          
          ) : (
            <Button
              onClick={toggleFormVisibility}
              variant="contained"
              disableElevation="true"
              className=""
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
