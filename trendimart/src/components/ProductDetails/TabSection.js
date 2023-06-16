import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Review } from "../../styles/components/assets/images";

const TabPanel = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`tabpanel-${index}`}
    aria-labelledby={`tab-${index}`}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

const MyTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab-wrapper">
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Product Details" id="tab-0" />
          <Tab label="Specification" id="tab-1" />
          <Tab label="Ratings & Reviews" id="tab-2" />
        </Tabs>
      </div>

      <hr sx="width:50%;text-align:left;margin-left:0" />

      {/* first tab */}
      <TabPanel value={value} index={0}>
        <div className="product-detail mt-7">
          <span className="heading font-weight-700">Product Details</span>
          <span className="content">
            Blue washed jacket, has a spread collar, 4 pockets, button closure,
            long sleeves, straight hem
          </span>
        </div>

        <div className="product-detail mt-7">
          <span className="heading font-weight-700">Size & Fit</span>
          <span className="content">
            The model (height 5'8") is wearing a size S
          </span>
        </div>

        <div className="product-detail mt-7">
          <span className="heading font-weight-700">Material & Care</span>
          <span className="content">
            100% cotton <br />
            Machine Wash
          </span>
        </div>
      </TabPanel>

      {/* sec tab */}
      <TabPanel value={value} index={1}>
        <h5 className="heading font-weight-700">Specifications</h5>
        <div className="cartegories-wrapper flex">
          <div className="specification-size">
            <h3 className="size">Sleeve Length</h3>
            <h4 className="product-type">Long Sleeves</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Print or Pattern Type</h3>
            <h4 className="product-type">Washed</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Length</h3>
            <h4 className="product-type">Regular</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Lining Fabric</h3>
            <h4 className="product-type">Unlined</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Hemline</h3>
            <h4 className="product-type">Straight</h4>
            <hr style={{ width: "100%" }} className="display" />
          </div>

          <div className="specification-type">
            <h3 className="size">Type</h3>
            <h4 className="product-type">Denim Jacket</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Collor</h3>
            <h4 className="product-type">Spread collor</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Closure</h3>
            <h4 className="product-type">Button</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Number of Pockets</h3>
            <h4 className="product-type">4</h4>
            <hr style={{ width: "100%" }} className="display" />

            <h3 className="size">Occasion</h3>
            <h4 className="product-type">Casual</h4>
            <hr style={{ width: "100%" }} className="display" />
          </div>
        </div>
      </TabPanel>

      {/* third tab */}
      <TabPanel value={value} index={2}>
        <div className="review-wrapper">
          <h4 className="heading font-weight-700">Ratings</h4>

          <div className="rating-wrapper">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ ml: 2 }} className="rating-text">
                4.4
              </Box>

              <Rating
                name="text-feedback"
                value={4}
                readOnly
                sx={{ color: "#272727" }}
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
          </div>
          <p className="verified-rating">40 Verified Buyers</p>

          <div className="rating-content">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                sx={{ color: "#F2C94C" }}
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }} className="rating-text">
                4.4
              </Box>
            </Box>

            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              tristique in tellus diam, metus sit. Quis venenatis, neque arcu
              accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean
              tristique felis.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. neque arcu accumsan sollicitudin{" "}
              <a href="#" className="">
                Read More
              </a>
            </p>

            <div className="review-images flex">
              <div className="">
                <img src={Review} alt="summer-collection" className="" />
              </div>

              <div className="">
                <img src={Review} alt="summer-collection" className="" />
              </div>

              <div className="text-img">
                <img src={Review} alt="summer-collection" className="" />
                <div className="centered">+3</div>
              </div>
            </div>

            <div className="text-wrapper flex">
              <div className="border-text">
                <span className="name">Anna Cloe</span>
              </div>

              <span className="date"> 28 September</span>
            </div>
          </div>

          <div className="rating-content">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                sx={{ color: "#F2C94C" }}
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }} className="rating-text">
                4.4
              </Box>
            </Box>

            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              tristique in tellus diam, metus sit. Quis venenatis, neque arcu
              accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean
              tristique felis.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. neque arcu accumsan sollicitudin{" "}
              <a href="#" className="">
                Read More
              </a>
            </p>

            <div className="review-images flex">
              <div className="">
                <img src={Review} alt="summer-collection" className="" />
              </div>

              <div className="">
                <img src={Review} alt="summer-collection" className="" />
              </div>
            </div>

            <div className="text-wrapper flex">
              <div className="border-text">
                <span className="name">Anna Cloe</span>
              </div>

              <span className="date"> 28 September</span>
            </div>
          </div>

          <div className="rating-content">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="text-feedback"
                value={4}
                readOnly
                sx={{ color: "#F2C94C" }}
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }} className="rating-text">
                4.4
              </Box>
            </Box>

            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              tristique in tellus diam, metus sit. Quis venenatis, neque arcu
              accumsan sollicitudin aliquet nunc. Enim, arcu non in aenean
              tristique felis.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. neque arcu accumsan sollicitudin{" "}
              <a href="#" className="">
                Read More
              </a>
            </p>

            <div className="review-images flex">
              <div className="">
                <img src={Review} alt="summer-collection" className="" />
              </div>

              <div className="">
                <img src={Review} alt="summer-collection" className="" />
              </div>
            </div>

            <div className="text-wrapper flex">
              <div className="border-text">
                <span className="name">Anna Cloe</span>
              </div>

              <span className="date"> 28 September</span>
            </div>
          </div>

          <a href="#" className="view-link">
            View all Reviews
          </a>
        </div>
      </TabPanel>
    </div>
  );
};

export default MyTabs;
