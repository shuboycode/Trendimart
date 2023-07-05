import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/slices/productSlice";
import { Container } from "@mui/material";

import Header from "../components/Header";
import FilterBox from "../components/atomComponents/FilterBox";
import DropdownMenu from "../components/atomComponents/DropdownMenu";
import TuneIcon from "@mui/icons-material/Tune";
import CardTwo from "../components/CardTwo";
import FooterSection from "../components/FooterSection";

const ProductPageSec = () => {
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

  return (
    <>
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
                {/* <div className="flex mt-9">
                  {category.map((item) => {
                    console.log("item", item);
                    return <CardTwo prop={item}></CardTwo>;
                  })}
                </div> */}

               {/*  <div className="flex mt-9">
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
                </div>

                <div className="flex mt-9">
                  {category.map((item) => {
                    console.log("item", item);
                    return <CardTwo prop={item}></CardTwo>;
                  })}
                </div> */}

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
