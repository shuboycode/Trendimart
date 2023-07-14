import React, { useEffect, useState } from "react";
import {
  DanimImage,
  DanimLadish,
  DanimColor,
} from "../../styles/components/assets/images";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { arrow } from "../../styles/components/assets/icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../store/slices/productSlice";
import { increment } from "../../store/slices/cardSlice";
import { Payment } from "@mui/icons-material";
import { Link, Route, Routes } from "react-router-dom";
import { addToCart, fetchCartProducts } from "../../store/slices/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";

const CarouselSection = () => {
  const CartItem = useSelector((state) => state.counter);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // rendering
  const [showPaymentPage, setShowPaymentPage] = useState(false);

  const [isShown, setIsShown] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const { data, loading, error } = useSelector((state) => state.products);

  let singleItem1 = data?.filter((el) => el.id === parseInt(id));
  console.log("single item:", singleItem1);
  let singleItem = singleItem1[0];

  const handleClick = async (event) => {
    setIsShown((current) => !current);
    console.log("id :", id);

    // if (cartdata.type === "api/postData/fulfilled") {
      await dispatch(fetchCartProducts({ id, singleItem }));
    // }
  };

  if (error) {
    // If an error occurred during API call, redirect to the 404 page
    return <link to="/*" />;
  }

  if (loading) {
    // If an error occurred during API call, redirect to the 404 page
    return (
      <div className="justify-center flex loader-wrapper">
        {" "}
        <CircularProgress className="loader"/>
       
      </div>
    );
  }

  return (
    <div className="product-wrapper flex">
      <div className="left-wrapper flex">
        <div className="render-image">
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <div className="hover-card">
                <img
                  src={DanimImage}
                  key={i}
                  alt="summer-collection"
                  className="left-image pointer"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="image-wrapper ml-5">
          <img
            src={DanimLadish}
            alt="summer-collection"
            className="product-img"
          />
        </div>
      </div>

      <div className="product-content-wrapper">
        <h3 className="content-heading font-weight-700">
          {/* Womens Denim Jacket (Blue) */}
          {singleItem?.title}
        </h3>
        <h4 className="brand-text mt-6 font-weight-400">
          {" "}
          {singleItem?.brand}
        </h4>
        <h4 className="author-name font-weight-400">
          Sold By : {singleItem?.seller}
        </h4>
        <Box
          className="rating-product mt-7"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            sx={{ color: "#272727" }}
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />}
          />
          <Box sx={{ ml: 2 }} className="rating-text text-color">
            {singleItem?.Rating}
          </Box>
          <Box sx={{ ml: 2 }} className="rating-text text-color">
            36 Reviews
          </Box>
        </Box>
        <div className="number-wrapper mt-7 mb-3">
          <span className="low-prize font-weight-700 mr-4">
            Rs. {singleItem?.price * 100}
          </span>
          <span className="high-prize text-light mr-4 text-decoration-line">
            Rs. {singleItem?.price * 100 * 1.3}
          </span>
          <span className="discount green mr-4">(30% off)</span>
        </div>
        <span className="size-selection font-weight-700  ">Select Size</span>
        <div className="chart-wrapper">
          <h5 className="text-blue"> Size Chart</h5>
          <img src={arrow} alt="summer-collection" className="left-image" />
        </div>
        <div className="size-chart-wrapper flex">
          <div className="size-symbol disable">XS </div>
          <div className="size-symbol">S </div>
          <div className="size-symbol">M </div>
          <div className="size-symbol">L </div>
          <div className="size-symbol"> XL </div>
        </div>

        <div className="color-selector">
          <span className="mb-5 font-weight-700">Select Color</span>

          <img
            src={DanimColor}
            alt="summer-collection"
            className="left-image"
          />
          <img
            src={DanimColor}
            alt="summer-collection"
            className="left-image"
          />
          <img
            src={DanimColor}
            alt="summer-collection"
            className="left-image"
          />
        </div>
        <div className="offer-content mt-5">
          <span className="offer font-weight-700 ">Best Offers</span>

          <div className="offter-type align-items mt-4">
            <h4 className="offer-discount">
              {" "}
              Special offer <span className="font-weight-400">get 25% off</span>
            </h4>
            <a href="#" className="term ml-4 text-light-blue">
              {" "}
              T&C
            </a>
          </div>

          <div className="offter-type align-items mt-4">
            <h4 className="offer-discount">
              Bank offer{" "}
              <span className="font-weight-400">
                get 30% off on Axis Bank Credit card
              </span>
            </h4>
            <a href="#" className="term ml-4 text-light-blue">
              {" "}
              T&C
            </a>
          </div>

          <div className="offter-type align-items mt-4">
            <h4 className="offer-discount">
              Wallet offer{" "}
              <span className="font-weight-400">
                {" "}
                get 40% cashback via Paytm wallet on first transaction
              </span>{" "}
            </h4>
            <a href="#" className="term ml-4 text-light-blue">
              {" "}
              T&C
            </a>
          </div>

          <div className="offter-type align-items mt-4">
            <h4 className="offer-discount">
              Special offer <span className="font-weight-400">get 25% off</span>
            </h4>
            <a href="#" className="term ml-4 text-light-blue">
              {" "}
              T&C
            </a>
          </div>

          <div className="cart-button mt-9 align-items">
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
              className="cart-button mr-4"
            >
              {isShown ? (
                <Link to="/Payment">
                  <Button
                    onClick={() => {
                      handleClick();
                      dispatch(increment());
                    }}
                    className="pay-button"
                  >
                    Go to cart
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => {
                    handleClick();
                    dispatch(increment());
                  }}
                  className="pay-button"
                >
                  Add to cart
                </Button>
              )}
            </ButtonGroup>
            

            <div onClick={toggleFavorite}>
              {isFavorite ? (
                <FavoriteIcon className="fav-icon" />
              ) : (
                <FavoriteBorderIcon className="border-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
