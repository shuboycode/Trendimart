import "./App.scss";
import React, { useState, useEffect } from "react";
// import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsSection from "./pages/ProductOpen";
import ProductPageWithout from "./pages/ProductWithFilter";
import ProductPageSec from "./pages/Product";
import FilterSlider from "./components/atomComponents/PlainSlider";
import FilterBox from "./components/atomComponents/FilterBox";

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
