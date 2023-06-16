import React from "react";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import WomenCard from "../components/WomenCard";

const FooterWish = () => {
  return (
    <>
      {/* header sec start here */}

      <Header></Header>

      <Container maxWidth="false" sx={{ maxWidth: "1920px" }} className="wishlist-wrapper">
        {/* content-section start here */}

        <h2 className="heading">My <span className="heading text">Wishlist</span></h2> 
        
        <div className=" WishList-content flex">
          <WomenCard> </WomenCard>
        </div>

        <div className="WishList-content card flex">
          <WomenCard> </WomenCard>
        </div>
      </Container>

      <div className="wishlist-footer">
      <Container maxWidth="false" sx={{ maxWidth: "1920px" }}>
         

        </Container>

      </div>
    </>
  );
};

export default FooterWish ;
