import LadishSummer from "../styles/components/assets/images/LadishSummer.svg";
import Button from "@mui/material/Button";
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import BlogIcon from "../styles/components/assets/icons/BlogIcon.svg";
import WomenWollen from "../styles/components/assets/images/WomenWollen.svg";

const CustomCard = ({ imageSrc, title, content }) => {
  return (
    <>
      {/* // first card */}
      <div className="feature-sec-wrapper flex">
        <Card className="blog-card flex">
          <div>
            <img
              src={LadishSummer}
              alt="women-danim"
              className="blog-card-img"
            />
          </div>

          <CardContent className="cardcontent-wrapper">
            <span className="content-type">Blog</span>
            <div className="content-idea">
              <span className="content-idea">
                Discover new way to decorate your home .
              </span>
            </div>
            <p className="content-description line-clamp-4">
              Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
              ...
            </p>
            <hr style={{ width: "10%" }} className="display" />
            <div className="card-wrapper flex">
              <div className="writer-name">By Souha . H</div>
              <div className="card-icon">
                <img src={BlogIcon} alt="women-dress" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* //   second card */}
        <Card className="blog-card flex">
          <CardMedia
            component="img"
            image={WomenWollen}
            alt="summer-collection"
            className="blog-card-img"
          />
          <CardContent className="cardcontent-wrapper">
            <span className="content-type">Blog</span>
            <div className="content-idea">
              <span className="content-idea">
                Discover new way to decorate your home .
              </span>
            </div>
            <p className="content-description line-clamp-4">
              Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
              ...
            </p>
            <hr style={{ width: "10%" }} className="display" />
            <div className="card-wrapper flex">
              <div className="writer-name">By Souha . H</div>
              <div className="card-icon">
                <img src={BlogIcon} alt="women-dress" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* // third card */}
        <Card className="blog-card flex">
          <CardMedia
            component="img"
            image={LadishSummer}
            alt="summer-collection"
            className="blog-card-img"
          />
          <CardContent className="cardcontent-wrapper">
            <span className="content-type">Blog</span>
            <div className="content-idea">
              <span className="content-idea">
                Discover new way to decorate your home .
              </span>
            </div>
            <p className="content-description line-clamp-4">
              Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
              ...
            </p>
            <hr style={{ width: "10%" }} className="display" />
            <div className="card-wrapper flex">
              <div className="writer-name">By Souha . H</div>
              <div className="card-icon">
                <img src={BlogIcon} alt="women-dress" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="blog-card-button justify-center">
        <Button variant="outlined" className="blog-card-button">
          View all
        </Button>
      </div>
    </>
  );
};

export default CustomCard;
