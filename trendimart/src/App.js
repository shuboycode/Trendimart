import "./App.scss";
import * as React from "react";
import HomePage from "./pages/HomePage";
import ProductDetailsSection from "./pages/ProductDetailsSection";
import ProductPageWithout from "./pages/ProductPageWithout";

import FooterWish from "./pages/FooterWish";

function App() {
  const [] = React.useState(null);
  const [] = React.useState(null);

  return (
    <>
      {/* <HomePage /> */}

      {/* <ProductDetailsSection></ProductDetailsSection> */}

      {/* product page without filter */}

      <ProductPageWithout></ProductPageWithout>

      {/* <FooterWish></FooterWish> */}
    </>
  );
}
export default App;
