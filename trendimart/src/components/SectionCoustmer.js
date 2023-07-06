import React from "react";
import { Carousel } from "react-responsive-carousel";
import EllipseWomen from "../styles/components/assets/images/EllipseWomen.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const createCarouselItemImage = (index, options = {}) => (
  <div key={index} className="pt-4 pb-4 pl-5 pr-5">
   
    <Card className="customer-card">
      <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
        <div className="card-content">
          <img src={EllipseWomen} alt="women-dress" className="" />
          <div className="card-info">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={4.4}
                readOnly
                sx={{ color: "#272727" }}
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }} className="rating-text">
                4.4
              </Box>
            </Box>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel
              morbi cursus sed sodales molestie proin dictum gravida. Porttitor
              maecenas tincidunt ipsum semper malesuada. In sapien feugiat
              laoreet convallis eu sed. Sapien et montes, duis tempor euismod
              augue cras eu eget. Risus suspendisse mauris ullamcorper
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
const SectionCoustmer = ({ apnaclass }) => {
  const baseChildren = (
    <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>
  );

  return (
    <Carousel
      infiniteLoop
      centerMode
      centerSlidePercentage="52"
      showThumbs={false}
      showIndicators={false}
      showArrows={true}
      //   {...getConfigurableProps()}
      className={apnaclass}
    >
      {baseChildren.props.children}
    </Carousel>
  );
};

export default SectionCoustmer;
