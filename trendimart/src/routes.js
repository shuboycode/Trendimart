import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import MainLayout from "./pages/MainLayout";
// import MyOrder from "./pages/MyOrder";
// import MyWishlist from "./pages/MyWishlist";
import ProductWithFilter from "./pages/ProductWithFilter";
import ProductOpen from "./pages/ProductOpen";
// import PaymentForm from "../src/pages/PaymentForm";
import Error from "./pages/Error";

import Payment from "./pages/Payment";
import ProductDetailsSection from "./pages/ProductOpen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Error></Error>} />
        <Route path="products" element={<Product />} />
        <Route path="categories" element={<Product />} />
        <Route path="categories/:slug" element={<Product />} />
        <Route path="categories/:slug/:id" element={<ProductDetailsSection />} />
        <Route path="ProductWithFilter" element={<ProductWithFilter />} />
        <Route path="PaymentPage" element={<Payment />} />
        <Route path="ProductOpen" element={<ProductOpen />}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
