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
  const { data, loading, error } = useSelector((state) => state.products);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilterBox, setShowFilterBox] = useState(true);
  const [categoryAllProducts, setcategoryAllProducts] = useState([]);

  const { slug } = useParams();
  const dispatch = useDispatch();

  // let categoryAllProducts =
  //   slug === "all" ? data : data.filter((el) => el.category === slug);

  useEffect(() => {
    setcategoryAllProducts(
      slug === "all" ? data : data.filter((el) => el.category === slug)
    );
    setSelectedBrands([]);
  }, [slug]);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    const filteredProducts = categoryAllProducts.filter((product) =>
      selectedBrands.includes(product.brand)
    );
    setFilteredProducts(filteredProducts);
  }, [selectedBrands]);

  const handleClick = () => {
    setShowFilterBox(!showFilterBox);
  };

  const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.value;
    if (event.target.checked) {
      setSelectedBrands((prevSelectedBrands) => [
        ...prevSelectedBrands,
        brandName,
      ]);
    } else {
      setSelectedBrands((prevSelectedBrands) =>
        prevSelectedBrands.filter((brand) => brand !== brandName)
      );
    }
  };

  const handleFilterByPrice = (min, max) => {
    const filteredProducts = categoryAllProducts.filter((product) =>
     product.price >= (min/100) && product.price <= (max/100)
    );
    setFilteredProducts(filteredProducts);
  

    console.log("price filter is working",min, max, filteredProducts);
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
                    handleFilterCategory={handleBrandCheckboxChange}
                    categoryAllProducts={categoryAllProducts}
                    handleFilterByPriceProp={handleFilterByPrice}
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
                        {selectedBrands.length === 0
                          ? categoryAllProducts.map((item) => {
                              return (
                                <CardTwo
                                  prop={item}
                                  filterOn={showFilterBox}
                                  key={item.id}
                                ></CardTwo>
                              );
                            })
                          : filteredProducts.map((item) => {
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
