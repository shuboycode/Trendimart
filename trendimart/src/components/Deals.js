import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import women1 from "../styles/components/assets/images/women1.svg";
import Container from "@mui/material/Container";
import wollen from "../styles/components/assets/images/wollen.svg";
import traditional from "../styles/components/assets/images/traditional.svg";
import lewis from "../styles/components/assets/images/lewis.svg";
import { Link } from "react-router-dom";

export default function ImgMediaCard() {
  return (
    <Container
      className="slider-wrapper-card data"
      maxWidth="false"
      sx={{ maxWidth: "1920px", border: "" }}
    >
      <div>
        <span className="slider-heading">Deals of the Day</span>
      </div>

      {/* first */}

      <div className="styling-card-wrapper">
        {/* card first */}

        <Link to="/categories/men">
          <Card className="wrapper-card1">
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              <img
                src={women1}
                alt="women-danim"
                className="card-image-deals"
              />

              <div className="card-content1">
                <img src={lewis} alt="logo" className="logo-brand1" />

                <div className="card-info1">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-style"
                  >
                    Best of Styles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-primary"
                  >
                    Under Rs.799
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 2nd card */}
        <Link to="/categories/women">
          <Card sx={{}} className="wrapper-card1">
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              <img
                src={wollen}
                alt="women-danim"
                className="card-image-deals"
              />

              <div className="card-content1">
                <img src={lewis} alt="logo" className="logo-brand1" />

                <div className="card-info1">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-style"
                  >
                    Best of Styles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-primary"
                  >
                    Under Rs.799
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 3rd card */}
        <Link to="/categories/women">
          <Card sx={{}} className="wrapper-card1">
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              <img
                src={traditional}
                alt="women-danim"
                className="card-image-deals"
              />

              <div className="card-content1">
                <img src={lewis} alt="logo" className="logo-brand1" />

                <div className="card-info1">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-style"
                  >
                    Best of Styles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-primary"
                  >
                    Under Rs.799
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 4th card */}
        <Link to="/categories/women">
          <Card sx={{}} className="wrapper-card1">
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              <img
                src={women1}
                alt="women-danim"
                className="card-image-deals"
              />

              <div className="card-content1">
                <img src={lewis} alt="logo" className="logo-brand1" />

                <div className="card-info1">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-style"
                  >
                    Best of Styles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-primary"
                  >
                    Under Rs.799
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 5th card */}
        <Link to="/categories/women">
          <Card sx={{}} className="wrapper-card1">
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              <img
                src={women1}
                alt="women-danim"
                className="card-image-deals"
              />

              <div className="card-content1">
                <img src={lewis} alt="logo" className="logo-brand1" />

                <div className="card-info1">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-style"
                  >
                    Best of Styles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-primary"
                  >
                    Under Rs.799
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 6th card */}
        <Link to="/categories/women">
          <Card sx={{}} className="wrapper-card1">
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              <img
                src={women1}
                alt="women-danim"
                className="card-image-deals"
              />

              <div className="card-content1">
                <img src={lewis} alt="logo" className="logo-brand1" />

                <div className="card-info1">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-style"
                  >
                    Best of Styles
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-primary"
                  >
                    Under Rs.799
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </Container>
  );
}
