import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

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
import Button from "@mui/material/Button";

const Gateway = () => {
  return (
    <>
      <div className="card-payment">
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
            disableElevation="true"
            className="pay-button"
          >
            {" "}
            Pay $164.23
          </Button>
        </div>
      </div>
    </>
  );
};

export default Gateway;
