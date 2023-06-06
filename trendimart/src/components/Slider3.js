// import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderimg from "../styles/components/assets/images/sliderimg.svg";
import { Container } from "@mui/material";

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
    <img src={sliderimg} alt="women-dress" className="" />
  </div>
);

const Slider3 = ({apnaclass}) => {
  const baseChildren = (
    <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>
  );

  const tooglesGroupId = "Toggles";
  const valuesGroupId = "Values";

  const getConfigurableProps = () => ({
    showArrows: ("showArrows", true, tooglesGroupId),
    showStatus: ("showStatus", true, tooglesGroupId),
    // showIndicators : ('showIndicators', false, tooglesGroupId),
    infiniteLoop: ("infiniteLoop", true, tooglesGroupId),
    // showThumbs : ('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: ("useKeyboardArrows", true, tooglesGroupId),
    autoPlay: ("autoPlay", true, tooglesGroupId),
    stopOnHover: ("stopOnHover", true, tooglesGroupId),
    swipeable: ("swipeable", true, tooglesGroupId),
    dynamicHeight: ("dynamicHeight", true, tooglesGroupId),
    emulateTouch: ("emulateTouch", true, tooglesGroupId),
    autoFocus: ("autoFocus", false, tooglesGroupId),
    // thumbWidth: ('thumbWidth', 100, {}, valuesGroupId),
    // selectedItem: ('selectedItem', 0, {}, valuesGroupId),
    interval: ("interval", 2000, {}, valuesGroupId),
    // transitionTime: ('transitionTime', 500, {}, valuesGroupId),
    // swipeScrollTolerance: ('swipeScrollTolerance', 5, {}, valuesGroupId),
    ariaLabel: ("ariaLabel", undefined),
  });
  return (
    <Carousel
      infiniteLoop
      centerMode
      centerSlidePercentage="60"
      showThumbs={false}
      showIndicators={false}
     
      {...getConfigurableProps()}
      className={apnaclass}
    >
      {baseChildren.props.children}
    </Carousel>
  );
};

export default Slider3;
