import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import darkstar from "../styles/components/assets/icons/darkstar.svg";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";
import { fetchProductsData } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ImgMediaCard({ title }) {
  const dispatch = useDispatch();
  const discount = 1.3; // 30%

  // getting data from store
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatching function to store
    dispatch(fetchProductsData());
  }, [dispatch]);

  // console.log(data);

  if (loading) {
    return console.log("loading");
  }

  if (error) {
    return console.log("error ", error);
  }

  return (
    <Container
      className="slider-wrapper-card"
      maxWidth="false"
      sx={{ maxWidth: "1920px", border: "" }}
    >
      <div>
        <span className="slider-heading">{title}</span>
      </div>
      {/* first */}
      <div className="styling-card-wrapper">
        {data.map((product) => {
          return (
            <Card
              sx={{ minWidth: 410 }}
              className="wrapper-card"
              key={product.id}
            >
              <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
                <div>
                  <img
                    src={
                      product.image
                        ? product.image
                        : "https://fixthephoto.com/images/content/mannequin-clothing-photography.jpg"
                    }
                    alt="women-danim"
                    className="card-image"
                  />
                </div>

                <div className="card-content">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="heading"
                  >
                    {product.title}
                  </Typography>

                  <div className="card-info">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="brand-name"
                    >
                      {product.brand}
                    </Typography>
                    <div className="right-content">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="rating"
                        sx={{}}
                      >
                        {product.rating}
                      </Typography>
                      <img
                        src={darkstar}
                        alt="women-danim"
                        className="icon-brand"
                      />
                    </div>
                  </div>
                  <CardActions className="discount" sx={{ padding: 0 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="discount-primary"
                    >
                      Rs. {product.price * 100}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="discount-secondary primary-font-family"
                      sx={{ margin: 0 }}
                    >
                      Rs. {product.price * 100 * discount}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="discount-tartionary"
                    >
                      (30% off)
                    </Typography>
                  </CardActions>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
