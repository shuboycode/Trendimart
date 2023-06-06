import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import women1 from "../styles/components/assets/images/women1.svg";
import darkstar from "../styles/components/assets/icons/darkstar.svg";
import Container from "@mui/material/Container";
import mandanim from "../styles/components/assets/images/mandanim.svg";
import womendan2 from "../styles/components/assets/images/womendan2.svg";
import women4 from "../styles/components/assets/images/women4.svg";

export default function ImgMediaCard() {
  return (
    //   <div>
    //  <span className="slider-heading">Trending Now</span>

    <Container
      className="slider-wrapper-card"
      maxWidth="false"
      sx={{ maxWidth: "1920px", border: "" }}
    >
      <div>
        <span className="slider-heading">Trending Now</span></div>
        {/* first */}
        <div className="styling-card-wrapper"> 
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>

       
       
        



        {/* 2nd card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>

       
        {/* 3rd card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>

       

        {/* 4th card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
          <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
          <img src={ women4} alt="women-danim" className="card-image" />

          
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
          
        </Card>


        {/* 5th card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>

      

        {/* 6th card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>


        {/* 7th card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>


        {/* 8th card */}
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>


        {/* 9th card */}
      
        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>

        {/* 10th card */}

        <Card sx={{ minWidth: 410 }} className="wrapper-card">
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
          
        </Card>

        </div>
    </Container>
  );
}
