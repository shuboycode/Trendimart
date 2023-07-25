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
import { fetchWishlist } from "../store/slices/wishlistSlice";
import Grid from "@mui/material/Grid";

import { Box } from "@mui/material";

const WomenCard = ({ prop, filterOn, key }) => {
  const { wishlistItems, loading, error } = useSelector(
    (state) => state.wishlist
  );
  console.log("data wishlist:", wishlistItems);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchWishlist());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container spacing={5}> */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="grid-card"
          >
            
            {wishlistItems?.map((item) => {
              return (
                <Card
                  sx={{ minWidth: 410 }}
                  className="wrapper-card mr-8 mt-8"
                  elevation={0}
                >
                  <CardContent
                    className="img-wrapper-banner"
                    sx={{ padding: 0 }}
                  >
                    <img
                      src={item.image}
                      alt="women-danim"
                      className="card-image"
                    />

                    <div className="card-content">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="heading"
                      >
                        {item.title}
                      </Typography>

                      <div className="card-info flex">
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="brand-name"
                        >
                          {item.brand}
                        </Typography>
                        <div className="right-content baseline pl-7">
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="rating"
                            sx={{}}
                          >
                            {item.rating}
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
                          Rs.{item.price * 100}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="discount-secondary primary-font-family"
                          sx={{ margin: 0 }}
                        >
                          Rs. {item.price * 100 * 1.3}
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
          </Grid>
        {/* </Grid> */}
      </Box>
    </>
  );
};

export default WomenCard;
