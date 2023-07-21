import React from "react";

import Container from "@mui/material/Container";
import WomenCard from "../components/WomenCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";
import CardTwo from "../components/CardTwo";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/slices/productSlice";

import { fetchWishlist } from "../../src//store/slices/wishlistSlice";
import { Grid } from "@mui/material";

import { useParams } from "react-router";

const FooterWish = () => {
  return (
    <>
      {/* header sec start here */}

      <Container
        maxWidth="false"
        sx={{ maxWidth: "1820px" }}
        className="wishlist-wrapper"
      >
        {/* content-section start here */}

        <h2 className="heading">
          My <span className="heading text">Wishlist</span>
        </h2>

        <div className=" WishList-content flex">
          <WomenCard> </WomenCard>
        </div>
      </Container>
    </>
  );
};

export default FooterWish;
