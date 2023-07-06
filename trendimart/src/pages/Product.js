import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/slices/productSlice";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import FilterBox from "../components/atomComponents/FilterBox";
import DropdownMenu from "../components/atomComponents/DropdownMenu";
import TuneIcon from "@mui/icons-material/Tune";
import CardTwo from "../components/CardTwo";
import FooterSection from "../components/FooterSection";
import { Link } from "react-router-dom";

const ProductPageSec = () => {
  const [showFilterBox, setShowFilterBox] = useState(false);
  const { slug } = useParams();

  console.log("slug", slug);

  //fetching data
  const dispatch = useDispatch();

  // getting data from store
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    // dispatching function to store
    dispatch(fetchProductsData());
  }, [dispatch]);

  console.log(data.filter((el) => el.category === slug));
  console.log(data);

  const category = data.filter((el) => el.category === slug);

  // function toggleFilterBox() {
  //   setShowFilterBox(!showFilterBox);
  // }

  function handleClick() {
    // toggleFilterBox();
    setShowFilterBox(!showFilterBox);
  }

  return (
    <>
      {/* content section start here */}

      <div className="page-content-wrapper  justify-center mt-14">
        {/* <div className="filter-content">
          <FilterBox></FilterBox>
        </div> */}

        <div className="main-content flex">
          <Container
            maxWidth="false"
            sx={{ maxWidth: "1920px" }}
            className="filter-sec-wrapper"
          >
            <div className="flex wrapper">
              <div className="filter-content">
                {showFilterBox && <FilterBox></FilterBox>}
              </div>

              <div className="width-100">
                <div className="content-wrapper text">
                  <div className="filter-subheading display-end">
                    <div
                      className="icon-wrapper align-items"
                      onClick={handleClick}
                    >
                      <span className="font-weight-700 ">Filters</span>

                      <TuneIcon
                        className="icon-tune"
                        fontSize="30px"
                      ></TuneIcon>
                    </div>

                    <div className="right-contentbaseline">
                      <DropdownMenu className="drop-menu"></DropdownMenu>
                    </div>
                  </div>
                </div>

                <div>
                  {/* <div className="flex mt-9">
                  {category.map((item) => {
                    console.log("item", item);
                    return <CardTwo prop={item}></CardTwo>;
                  })}
                </div> */}

                  <div className="flex mt-9">
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        // spacing={12}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        {category.map((item) => {
                          console.log("item", item);
                          return (
                            <Link to={`products`}>
                            <CardTwo
                              prop={item}
                              filterOn={showFilterBox}
                            ></CardTwo>
                            </Link>
                          );
                        })}
                      </Grid>
                    </Box>
                  </div>

                  {/* <div className="flex mt-9">
                  {category.map((item) => {
                    console.log("item", item);
                    return <CardTwo prop={item}></CardTwo>;
                  })}
                </div>

                <div className="flex mt-9">
                  {category.map((item) => {
                    console.log("item", item);
                    return <CardTwo prop={item}></CardTwo>;
                  })}
                </div> */}

                  {/* <div className="flex mt-11">
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
                </div> */}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* footer sec start here */}
      {/* <div className="sec-bottom">
        <Container
          maxWidth="false"
          sx={{ maxWidth: "1920px" }}
          className="filter-sec-wrapper"
        >
          <FooterSection></FooterSection>
        </Container>
      </div> */}
    </>
  );
};

export default ProductPageSec;
