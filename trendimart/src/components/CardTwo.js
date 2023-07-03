import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import women1 from "../styles/components/assets/images/women1.svg";
import darkstar from "../styles/components/assets/icons/darkstar.svg";
import { Paper } from "@mui/material";

const CardTwo = ({ prop }) => {
  // const cardElements = [];
  // for (let i = 0; i < 3; i++) {
  // cardElements.push(
  return (
    <div key={prop.id} className="card-wrapper">
      <Card sx={{ minWidth: 410 }} className="wrapper-card" elevation={0}>
        <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
          <img src={women1} alt="women-danim" className="card-image" />

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
                <img src={darkstar} alt="women-danim" className="icon-brand" />
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
  );
  //   );
  // }
  // return <>{cardElements}</>;
};

export default CardTwo;
