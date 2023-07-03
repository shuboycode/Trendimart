import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPageSec from "./pages/ProductPageSec";
import MainLayout from "./pages/MainLayout";
import OrderPage from "../src/pages/OrderPage";
import FooterWish from "./pages/FooterWish";
import PaymentPageSection from "../src/pages/PaymentPageSection";
import ProductPageWithout from "../src/pages/ProductPageWithout";
import ProductDetailsSection from "../src/pages/ProductDetailsSection";
import PaymentForm from "../src/pages/PaymentForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPageSec />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="footer" element={<FooterWish />} />
        <Route path="payment" element={<PaymentPageSection />} />
        <Route path="filter" element={<ProductPageWithout />} />
        <Route path="detailed" element={<ProductDetailsSection />} />
        <Route path="form" element={<PaymentForm />}/>
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
