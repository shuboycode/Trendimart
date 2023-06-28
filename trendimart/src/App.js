import "./App.scss";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
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
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [] = React.useState(null);
  const [] = React.useState(null);

  return (
    <>
      {/* <Router>
        <div>
          <Switch>
            <Route exact path="/" component={<HomePage />} />
            <Route path="/about" component={<ProductPageSec />} />
          </Switch>
        </div>
      </Router> */}
      {/* <HomePage /> */}

      {/* <ProductDetailsSection></ProductDetailsSection> */}

      {/* <ProductPageWithout></ProductPageWithout> */}

      {/* <ProductPageSec></ProductPageSec> */}

      {/* <FooterWish></FooterWish>    */}

      {/* 
      <OrderPage></OrderPage>  */}

      <PaymentPageSection></PaymentPageSection>

      {/* <PlaceOrder></PlaceOrder> */}

      {/* <CardAddress> </CardAddress> */}

      {/* <SmallDropdown></SmallDropdown> */}

      {/* 
       <FormComponents></FormComponents> */}
    </>
  );
}

export default App;
