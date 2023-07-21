import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import women1 from "../styles/components/assets/images/women1.svg";
import darkstar from "../styles/components/assets/icons/darkstar.svg";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import { fetchProductsData } from "../store/slices/productSlice";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const CardTwo = ({ prop, filterOn, key }) => {

  return (
    <Grid item xs={2} sm={4} md={filterOn ? 4 : 3} key={key}>
      <Link to={`${prop.id}`}>
        <div key={prop.id} className="card-wrapper">
          <Card sx={{ minWidth: 410 }} className="wrapper-card" elevation={0}>
            <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
              {/* <img src={women1} alt="women-danim" className="card-image" /> */}

              <div>
                <img
                  src={
                    prop.image
                      ? prop.image
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
                  {prop.title}
                </Typography>

                <div className="card-info flex">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="brand-name"
                  >
                    {/* Brand Name */}

                    {prop.brand}
                  </Typography>
                  <div className="right-content baseline pl-7">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="rating"
                      sx={{}}
                    >
                      {prop.rating}
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
                    Rs. {prop.price * 100}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="discount-secondary primary-font-family"
                    sx={{ margin: 0 }}
                  >
                    Rs. {prop.price * 100 * 1.3}
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
      </Link>
    </Grid>

    
  );
};

export default CardTwo;
