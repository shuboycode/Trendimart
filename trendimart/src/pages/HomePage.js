import React, { createContext, useContext } from "react";

import Container from "@mui/material/Container";
import { Carousel } from "react-responsive-carousel";
import bannerw from "../styles/components/assets/images/bannerw.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ImageCard from "../components/ImageCard";
import Deals from "../components/Deals";

import Slider3 from "../components/Slider3";
import BrandBanner from "../components/BrandBanner";
import CategoriesSection from "../components/CategoriesSection";

import SectionCoustmer from "../components/SectionCoustmer";
import BlogSection from "../components/BlogSection";
import TransactionSection from "../components/TransectionSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import { MyContext } from "../App";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchProductsData } from "../store/slices/productSlice";
import { useState } from "react";

const HomePage = () => {
  const [] = React.useState(null);
  const [] = React.useState(null);
  const { slug } = useParams();

  console.log("slug", slug);

  //fetching data
  const dispatch = useDispatch();

  // getting data from store
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatching function to store
    dispatch(fetchProductsData());
  }, [dispatch]);

  const category =
    slug === "all" ? data : data.filter((el) => el.category === slug);

  // consume data here.
  const sharedData = useContext(MyContext);
  console.log("sharedData:", sharedData);
  return (
    <>
      <section className="banner-wrapper">
        <Carousel
          autoPlay="true"
          interval={2000}
          infiniteLoop="true"
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={bannerw} alt="image1" />
          </div>
          <div>
            <img src={bannerw} alt="image2" />
          </div>
          <div>
            <img src={bannerw} alt="image3" />
          </div>
        </Carousel>
      </section>

      {/* slider sec start here */}

      <section className="slider-sec">
        <ImageCard title="Trending now"></ImageCard>
      </section>

      {/* deals of the day */}

      <Deals></Deals>

      {/* trending offer sec start here */}
      <Container
        className="slider-section"
        maxWidth="false"
        sx={{ maxWidth: "1920px", border: "" }}
      >
        <div>
          <span className="slider-heading">Trending Offers</span>
        </div>
        <Slider3 apnaclass={"section-slider-wrapper"}></Slider3>
      </Container>

      {/* brand banner section start here */}

      <BrandBanner></BrandBanner>

      {/* shop by categries section start here */}
      <Container
        className="categry-sec-wrapper"
        maxWidth="false"
        sx={{ maxWidth: "1920px", border: "" }}
      >
        <div>
          <span className="categry-sec-heading font-weight-700">
            Shop by Categories
          </span>
        </div>
        <CategoriesSection></CategoriesSection>
      </Container>

      {/* what customer says section start here */}

      <Container
        className="custmer-sec-wrapper"
        maxWidth="false"
        sx={{ maxWidth: "1920px", border: "" }}
      >
        <div>
          <span className="categry-sec-heading font-weight-700">
            What Our Customer Says
          </span>
        </div>
        <SectionCoustmer apnaclass="testimonial-slider"></SectionCoustmer>
      </Container>

      {/* feature blog sec start here */}
      <Container
        className="blogs-sec"
        maxWidth="false"
        sx={{ maxWidth: "1920px", border: "" }}
      >
        <div>
          <span className="Blogs-heading font-weight-700">Featured Blogs</span>
        </div>
        <BlogSection></BlogSection>
      </Container>

      {/* 3rd last section start here */}
      <Container
        className="finance-sec"
        maxWidth="false"
        sx={{ maxWidth: "1920px", border: "" }}
      >
        <TransactionSection></TransactionSection>
      </Container>

      {/* 2nd last section start here */}
      <Container
        className="personal-info-wrapper"
        maxWidth="false"
        sx={{ maxWidth: "1920px", border: "" }}
      >
        <AboutSection></AboutSection>
      </Container>
    </>
  );
};

export default HomePage;
