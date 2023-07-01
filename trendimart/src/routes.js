import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPageSec from "./pages/ProductPageSec";
import PlaceOrder from "./components/PaymentSection/PlaceOrder";
import MainLayout from "./pages/MainLayout";
// import Layout from "./pages/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPageSec />} />
        <Route path="placeorder" element={<PlaceOrder />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
