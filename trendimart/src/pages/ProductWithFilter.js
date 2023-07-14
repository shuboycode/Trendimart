import React from "react";
import Container from "@mui/material/Container";

import TuneIcon from "@mui/icons-material/Tune";

import WomenCard from "../components/WomenCard";
import DropdownMenu from "../components/atomComponents/DropdownMenu";

const ProductPageWithout = () => {
  return (
    <>
      {/* nav bar start here */}

      <Container
        maxWidth="false"
        sx={{ maxWidth: "1920px" }}
        className="filter-sec-wrapper"
      >
        <div className="content-wrapper">
          <div className="filter-subheading display-end">
            <div className="icon-wrapper align-items ">
              <span className="font-weight-700 ">Filters</span>

              <TuneIcon className="icon-tune"></TuneIcon>
            </div>

            <div className="right-content baseline ">
              <DropdownMenu className="drop-menu"></DropdownMenu>
            </div>
          </div>

          {/* content card start here */}

          <div>
            <div className="flex mt-9">
              <WomenCard></WomenCard>
            </div>

            <div className="flex mt-9">
              <WomenCard></WomenCard>
            </div>

            <div className="flex mt-9">
              <WomenCard></WomenCard>
            </div>

            <div className="flex mt-9">
              <WomenCard></WomenCard>
            </div>

            <div className="flex mt-9">
              <WomenCard></WomenCard>
            </div>

            <div className="flex mt-9">
              <WomenCard></WomenCard>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPageWithout;
