import React from "react";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import WomenCard from "../components/WomenCard";
import FooterSection from "../components/FooterSection";

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

      <div className="wishlist-footer sec-bottom">
      <Container maxWidth="false" sx={{ maxWidth: "1920px" }}>
         
      <FooterSection></FooterSection>
        </Container>

      </div>
    </>
  );
};

export default FooterWish ;
