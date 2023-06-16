import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import women1 from "../styles/components/assets/images/women1.svg";
import darkstar from "../styles/components/assets/icons/darkstar.svg";

const WomenCard = () => {
  const cardElements = [];
  for (let i = 0; i < 4; i++) {
    cardElements.push(
      <div key={i} className="card-wrapper">
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

              <div className="card-info flex">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="brand-name"
                >
                  Brand Name
                </Typography>
                <div className="right-content align-items pl-7">
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
        </Card>
      </div>
    );
  }


  return <>{cardElements}</>;
};

export default WomenCard;
