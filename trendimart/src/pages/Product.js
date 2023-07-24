import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/slices/productSlice";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import FilterBox from "../components/atomComponents/FilterBox";
import DropdownMenu from "../components/atomComponents/DropdownMenu";
import TuneIcon from "@mui/icons-material/Tune";
import CardTwo from "../components/CardTwo";


const ProductPageSec = () => {
  // const [showFilterBox, setShowFilterBox] = useState(false);
  const { data, loading, error } = useSelector((state) => state.products);
  const [filterproducts, setfilterproducts] = useState();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isChecked, setchecked] = useState(false);
  const [arr, setArr] = useState([]);
 
  const [categorydata, setcategorydata] = useState([...data]);

  console.log("categorydata", categorydata);

  const { slug } = useParams();

  console.log("slug", slug);

  let category =
    slug === "all" ? data : data.filter((el) => el.category === slug);

  // setcategorydata(
  //   slug === "all" ? data : data.filter((el) => el.category === slug)
  // );

  useEffect(() => {
    setcategorydata(category);
  }, []);

  const [showFilterBox, setShowFilterBox] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const handleClick = () => {
    setShowFilterBox(!showFilterBox);
  };

  let filterProducts;
  const handleFilterCategory = (event, products) => {
    let filterbrand = event.target.value;
    console.log("target", event.target.value);
    console.log("target checked", event.target.checked);

    if (event.target.checked) {
      filterProducts = products.filter((item) => item.brand === filterbrand);
      setfilterproducts(filterProducts);
    }

    setcategorydata(filterProducts);
    console.log("categorydata", categorydata);
  };

  return (
    <>
      {/* content section start here */}
      <div className="page-content-wrapper  justify-center mt-14">
        <div className="main-content flex">
          <Container
            maxWidth="false"
            sx={{ maxWidth: "1920px" }}
            className="filter-sec-wrapper"
          >
            <div className="flex wrapper">
              <div
                className={`filter-content ${showFilterBox ? "active" : ""}`}
              >
                {showFilterBox && (
                  <FilterBox
                    handleFilterCategory={handleFilterCategory}
                  ></FilterBox>
                )}
              </div>

              <div className="width-100 filtered-product-wrapper">
                <div className="content-wrapper text">
                  <div className="filter-subheading display-end">
                    <div className="filter-container">
                      <div
                        className={`icon-wrapper pointer align-items ${
                          showFilterBox ? "active" : ""
                        }`}
                        onClick={handleClick}
                      >
                        <span className="font-weight-700">Filters</span>
                        <TuneIcon className="icon-tune" fontSize="30px" />
                      </div>
                      {showFilterBox && <div className="filter-box"></div>}
                    </div>

                    <div className="right-contentbaseline">
                      <DropdownMenu className="drop-menu"></DropdownMenu>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex mt-9">
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                      >
                        {categorydata?.map((item) => {
                          return (
                            <CardTwo
                              prop={item}
                              filterOn={showFilterBox}
                              key={item.id}
                            ></CardTwo>
                          );
                        })}
                      </Grid>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ProductPageSec;
