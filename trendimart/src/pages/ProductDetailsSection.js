import React from "react";
import ProductDetails from "../components/ProductDetails/CarouselSection";
import Container from "@mui/material/Container";
import TabSection from "../components/ProductDetails/TabSection";
import ImageCard from "../components/ImageCard";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";

const ProductDetailsSection = () => {
  return (
    <>
      {/* // carousel section start here 2nd  */}

      <Header></Header>
      <Container maxWidth="false" sx={{ maxWidth: "1920px" }}>
        {/* header section start here */}
        {/* <Header></Header> */}

        {/* sec section */}
        <ProductDetails></ProductDetails>

        {/* 3rd section tab  tab */}
        <TabSection></TabSection>

        {/* 4th section image card */}
        <ImageCard title="Product details"></ImageCard>

        {/* 5th section image card */}
        <ImageCard title="Customer Also Like"></ImageCard>
      </Container>

      {/* footer sec start here */}
      <div className="sec-bottom">
        <Container
          maxWidth="false"
          sx={{ maxWidth: "1920px" }}
          className="filter-sec-wrapper"
        >
          <FooterSection></FooterSection>
        </Container>
      </div>
    </>
  );
};

export default ProductDetailsSection;
