import "./App.scss";
import * as React from "react";
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

function App() {
  const [] = React.useState(null);
  const [] = React.useState(null);

  return (
    <>
      {/* <HomePage /> */}

      {/* <ProductDetailsSection></ProductDetailsSection> */}

      {/* <ProductPageWithout></ProductPageWithout> */}

      {/* <ProductPageSec></ProductPageSec> */}

      {/* <FooterWish></FooterWish>    */}
      

      {/* <OrderPage></OrderPage> */}

       {/* <PaymentPage> </PaymentPage> */}

       <CardAddress></CardAddress>

    </>
  );
}

export default App;
