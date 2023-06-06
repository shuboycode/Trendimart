import React from "react";
import { Carousel } from "react-responsive-carousel";
// import sliderimg from "../styles/components/assets/images/sliderimg.svg";
import { Container } from "@mui/material";
import EllipseWomen from "../styles/components/assets/images/EllipseWomen.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
    {/* <img src={EllipseWomen} alt="women-dress" className=""/> */}
    <Card className="customer-card">
      <CardContent className="img-wrapper-banner" sx={{ padding: 0 }}>
        <div className="card-content">
          <img src={EllipseWomen} alt="women-dress" className="" />
          <div className="card-info">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={4.4}
                readOnly
                sx={{color:"#272727"}}
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>4.4</Box>
            </Box>
            <p>
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

  //   const tooglesGroupId = "Toggles";
  //   const valuesGroupId = "Values";

  //   const getConfigurableProps = () => ({
  //     showArrows: ("showArrows", true, tooglesGroupId),
  //     showStatus: ("showStatus", true, tooglesGroupId),
  //     // showIndicators : ('showIndicators', false, tooglesGroupId),
  //     infiniteLoop: ("infiniteLoop", true, tooglesGroupId),
  //     // showThumbs : ('showThumbs', true, tooglesGroupId),
  //     useKeyboardArrows: ("useKeyboardArrows", true, tooglesGroupId),
  //     autoPlay: ("autoPlay", true, tooglesGroupId),
  //     stopOnHover: ("stopOnHover", true, tooglesGroupId),
  //     swipeable: ("swipeable", true, tooglesGroupId),
  //     dynamicHeight: ("dynamicHeight", true, tooglesGroupId),
  //     emulateTouch: ("emulateTouch", true, tooglesGroupId),
  //     autoFocus: ("autoFocus", false, tooglesGroupId),
  //     // thumbWidth: ('thumbWidth', 100, {}, valuesGroupId),
  //     // selectedItem: ('selectedItem', 0, {}, valuesGroupId),
  //     interval: ("interval", 2000, {}, valuesGroupId),
  //     // transitionTime: ('transitionTime', 500, {}, valuesGroupId),
  //     // swipeScrollTolerance: ('swipeScrollTolerance', 5, {}, valuesGroupId),
  //     ariaLabel: ("ariaLabel", undefined),
  //   });
  return (
    <Carousel
      infiniteLoop
      centerMode
      centerSlidePercentage="60"
      showThumbs={false}
      showIndicators={false}
      //   {...getConfigurableProps()}
      className={apnaclass}
    >
      {baseChildren.props.children}
    </Carousel>
  );
};

export default SectionCoustmer;
