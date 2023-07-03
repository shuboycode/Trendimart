import "./App.scss";
import React, { useState, useEffect } from "react";
// import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsSection from "./pages/ProductDetailsSection";
import ProductPageWithout from "./pages/ProductPageWithout";
import ProductPageSec from "./pages/ProductPageSec";
import FilterSlider from "./components/atomComponents/PlainSlider";
import FilterBox from "./components/atomComponents/FilterBox";
import PaymentPage from "./pages/PaymentPageSection";

import FooterWish from "./pages/FooterWish";
import OrderPage from "./pages/OrderPage";
import CardAddress from "./components/PaymentSection/CardAddress";
import FormComponents from "./components/PaymentSection/FormComponents";
import SmallDropdown from "./components/atomComponents/SmallDropdown";
import PaymentPageSection from "./pages/PaymentPageSection";
import PlaceOrder from "./components/PaymentSection/PlaceOrder";
import PaymentForm from "./pages/PaymentForm";
import Gateway from "./components/PaymentSection/Gateway";
import AppRoutes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "./store/slices/productSlice";
import axios from "axios";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from "axios";

function App() {
  // const URL = "https://kanhaiya.kuroit.in/trendimart/public/api/products";
  // const [data, setData] = React.useState([]);

  // const getProductData = () => {
  //   return axios.get(URL).then((response) => setData(response.data));
  // };
  // useEffect(() => {
  //   getProductData();
  // }, []);
  // console.log(data);
  // console.log('app component rendered');

  

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
