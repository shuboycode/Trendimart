import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import women1 from "../styles/components/assets/images/women1.svg";
import darkstar from "../styles/components/assets/icons/darkstar.svg";
import Container from "@mui/material/Container";
import mandanim from "../styles/components/assets/images/mandanim.svg";
import womendan2 from "../styles/components/assets/images/womendan2.svg";
import women4 from "../styles/components/assets/images/women4.svg";
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
                {/* <img src={product.image} alt="women-danim" className="card-image" /> */}

                <div>
                  {/* {product.image ? (
                    <img
                      src={product.image}
                      alt="women-danim"
                      className="card-image"
                    />
                  ) : (
                    <img
                      src={
                        "https://fixthephoto.com/images/content/mannequin-clothing-photography.jpg"
                      }
                      alt="women-danim"
                      className="card-image"
                    />
                  )} */}
                   <img
                      src={product.image ? product.image : "https://fixthephoto.com/images/content/mannequin-clothing-photography.jpg"}
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

        {/* 2nd card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={mandanim} alt="man-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary primary-font-family"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 3rd card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={womendan2} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary primary-font-family"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 4th card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women4} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary primary-font-family"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 5th card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women1} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary primary-font-family"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 6th card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women1} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 7th card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women1} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 8th card */}
        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women1} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 9th card */}

        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women1} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}

        {/* 10th card */}

        {/* <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={women1} alt="women-danim" className="card-image" />

            <div className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Womens Denim Jacket
              </Typography>

              <div className="card-info">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="rating"
                    sx={{}}
                  >
                    4.4
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
                  Rs. 700
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="discount-secondary"
                  sx={{ margin: 0 }}
                >
                  Rs. 1000
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
        </Card> */}
      </div>
    </Container>
  );
}
