import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPageSec from "./pages/ProductPageSec";
import MainLayout from "./pages/MainLayout";
import ProductDetailsSection from "./pages/ProductDetailsSection";
// import Layout from "./pages/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<p>page not found</p>} />
        <Route path="products" element={<ProductPageSec />} />
        <Route path="categories" element={<ProductPageSec />} />
        <Route path="categories/:slug" element={<ProductPageSec />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
