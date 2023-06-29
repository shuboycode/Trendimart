import React from "react";
import Header from "../components/Header";
import FilterBox from "../components/atomComponents/FilterBox";
import { Container } from "@mui/material";
import DropdownMenu from "../components/atomComponents/DropdownMenu";
import TuneIcon from "@mui/icons-material/Tune";
import CardTwo from "../components/CardTwo";
import FooterSection from "../components/FooterSection";


const ProductPageSec = () => {
  return (
    <>
      <Header></Header>

      {/* content section start here */}

      <div className="page-content-wrapper  justify-center mt-14">
        <div className="filter-content">
          <FilterBox></FilterBox>
        </div>

        <div className="main-content flex">
          <Container
            maxWidth="false"
            sx={{ maxWidth: "1920px" }}
            className="filter-sec-wrapper"
          >
            <div>
              <div className="content-wrapper text">
                <div className="filter-subheading display-end">
                  <div className="icon-wrapper align-items ">
                    <span className="font-weight-700 ">Filters</span>

                    <TuneIcon className="icon-tune" fontSize="30px"></TuneIcon>
                  </div>

                  <div className="right-contentbaseline">
                    <DropdownMenu className="drop-menu"></DropdownMenu>
                  </div>
                </div>
              </div>


             
                
            
               
                <div>
              <div className="flex mt-9">
                <CardTwo></CardTwo>
              </div>

              <div className="flex mt-11">
                <CardTwo></CardTwo>
              </div>

              <div className="flex mt-11">
                <CardTwo></CardTwo>
              </div>

              <div className="flex mt-11">
                <CardTwo></CardTwo>
              </div>

              <div className="flex mt-11">
                <CardTwo></CardTwo>
              </div>

              <div className="flex mt-11">
                <CardTwo></CardTwo>
              </div>
              </div>


            </div>
          </Container>
        </div>
      </div>

      {/* footer sec start here */}
      <div className="sec-bottom">
        <Container
          maxWidth="false"
          sx={{ maxWidth: "1920px" }}
          className="filter-sec-wrapper"
        >
          <FooterSection></FooterSection>
        </Container>
      </div>
      
    </>
  );
};

export default ProductPageSec;
