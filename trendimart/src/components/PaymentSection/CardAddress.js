import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Jacket,
  Rupees,
  Frame,
  Rup,
} from "../../styles/components/assets/images";
import { Routes, Route } from "react-router-dom";

import SmallDropdown from "../atomComponents/SmallDropdown";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { fetchCart } from "../../store/slices/cartSlice";
// import removeToCart from "../../store/slices/cartSlice";
import { removeFromWishlist } from "../../store/slices/cartSlice";
import singleItem from "../../store/slices/cardSlice";
import { Link } from "react-router-dom";

export default function IndeterminateCheckbox({ heading }) {
  const [quantity, setQuantity] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Event handler for the quantity select input change
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleSelectChange = (event) => {
    handleQuantityChange(event);
    handleChange(event);
  };

  const [checked, setChecked] = React.useState([true, false]);
  const [isVisible, setIsVisible] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
    </Box>
  );

  const { cartItems, loading, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const discount = 1.3; // 30%

  useEffect(() => {
    // dispatching function to store
    dispatch(fetchCart());
  }, [dispatch]);

  console.log("cartItems:", cartItems);

  if (loading) {
    return console.log("loading");
  }

  if (error) {
    return console.log("error ", error);
  }

  return (
    <>
      {/* <div className="detailed">
        <div className="flex form-label">
          <FormControlLabel
            label={`1/ ${cartItems.length} ITEMS SELECTED`}
            className="form-heading"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <div className="subheading  align-items">
            <span className="line align-items">
              <p className="pointer">REMOVE</p>
            </span>

            <span className="heading pointer">MOVE TO WISHLIST</span>
          </div>
        </div>

        {cartItems.map((product) => {
          return (
            <div className="content-payment justify-between">
              <div className="flex">
                <Link to={`/${product.id}`}>
                  <div className="content-img">
                    {children}
                    <img
                      src={product.image}
                      alt="summer-collection"
                      className="left-image"
                    />
                  </div>
                </Link>

                <div className="data ml-3">
                  <h4 className="brand-title">{product.title}</h4>
                  <h4 className="description mt-2">{product.brand}</h4>
                  <h4 className="info mt-2">{product.seller}</h4>

                  <div className="flex dropdown pt-2">
                    <SmallDropdown heading="Size"></SmallDropdown>
                    <SmallDropdown heading="Qty"></SmallDropdown>
                  </div>

                  <div className="number-wrapper flex pt-2">
                    <div className="number">
                      <img
                        src={Rupees}
                        alt="summer-collection"
                        className="left-image"
                      />
                      <span> {product.price * 100}</span>
                    </div>

                    <div className="number">
                      <img
                        src={Rup}
                        alt="summer-collection"
                        className="left-image"
                      />
                      <span className="text">
                        {product.price * 100 * discount}
                      </span>
                    </div>

                    <span className="benifit">(30% off)</span>
                  </div>

                  <div className="frame-wrapper align-items">
                    <img
                      src={Frame}
                      alt="summer-collection"
                      className="left-image"
                    />
                    <span>14days</span>
                    <span>return available</span>
                  </div>
                </div>
              </div>

              <div className="icon pointer">
                <CloseIcon></CloseIcon>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="detailed">
        <div className="flex form-label">
          <FormControlLabel
            label={`1/ ${cartItems.length} ITEMS SELECTED`}
            className="form-heading"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <div className="subheading  align-items">
            <span className="line align-items">
              <p className="pointer">REMOVE</p>
            </span>

            <span className="heading pointer">MOVE TO WISHLIST</span>
          </div>
        </div>

        {cartItems.map((product) => {
          return (
            <div className="content-payment justify-between">
              <div className="flex">
                <Link to={`/${product.id}`}>
                  <div className="content-img">
                    {children}
                    <img
                      src={product.image}
                      alt="summer-collection"
                      className="left-image"
                    />
                  </div>
                </Link>

                <div className="data ml-3">
                  <h4 className="brand-title">{product.title}</h4>
                  <h4 className="description mt-2">{product.brand}</h4>
                  <h4 className="info mt-2">{product.seller}</h4>
                  <div className="flex dropdown pt-2">
                    <SmallDropdown heading="Size"></SmallDropdown>

                    <Box sx={{ minWidth: 12 }} className="dropdown">
                      <FormControl
                        sx={{ m: 1, minWidth: 120 }}
                        size="small"
                        variant="filled"
                      >
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={age}
                          onChange={handleSelectChange}
                          displayEmpty
                        >
                          <MenuItem value="">Qty</MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div className="number-wrapper flex pt-2">
                    <div className="number">
                      <img
                        src={Rupees}
                        alt="summer-collection"
                        className="left-image"
                      />
                      {/* <span> {product.price * 100}    </span> */}
                      <span>{product.price * 100 * quantity}</span>
                    </div>

                    <div className="number">
                      <img
                        src={Rup}
                        alt="summer-collection"
                        className="left-image"
                      />
                      <span className="text">
                        {product.price * 100 * discount}
                      </span>
                    </div>

                    <span className="benifit">(30% off)</span>
                  </div>

                  <div className="frame-wrapper align-items">
                    <img
                      src={Frame}
                      alt="summer-collection"
                      className="left-image"
                    />
                    <span>14days</span>
                    <span>return available</span>
                  </div>
                </div>
              </div>

              <div className="icon pointer">
                {/* <CloseIcon onClick={removeFromWishlist} /> */}
                <CloseIcon
                  onClick={() => {
                    dispatch(removeFromWishlist(singleItem));
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
