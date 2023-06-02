import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import den1 from "../styles/components/assets/icons/den1.svg";
import darkstar from "../styles/components/assets/icons/darkstar.svg";
import Container from "@mui/material/Container";
import mandanim from "../styles/components/assets/icons/mandanim.svg";
import womendan2 from "../styles/components/assets/icons/womendan2.svg";
import wollen from "../styles/components/assets/icons/wollen.svg";
import traditional from "../styles/components/assets/icons/traditional.svg";
import lewis from "../styles/components/assets/icons/lewis.svg";

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
        <Card sx={{  }} className="wrapper-card1">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={den1} alt="women-danim" className="card-image-deals" />

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

      
       

        {/* 2nd card */}
        <Card sx={{ }} className="wrapper-card1">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={wollen} alt="women-danim" className="card-image-deals" />

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

        {/* 3rd card */}
        <Card sx={{  }} className="wrapper-card1">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={traditional} alt="women-danim" className="card-image-deals" />

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

        {/* 4th card */}
        <Card sx={{  }} className="wrapper-card1">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={den1} alt="women-danim" className="card-image-deals" />

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
        {/* 5th card */}
        <Card sx={{  }} className="wrapper-card1">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={den1} alt="women-danim" className="card-image-deals" />

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

        {/* 6th card */}
        <Card sx={{ }} className="wrapper-card1">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
            <img src={den1} alt="women-danim" className="card-image-deals" />

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

       
      </div>
    </Container>
  );
}
