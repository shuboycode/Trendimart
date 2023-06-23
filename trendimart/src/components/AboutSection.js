import React from "react";
import Button from "@mui/material/Button";
import { aboutus } from "../styles/components/assets/images";
import Grid from "@mui/material/Grid";

const AboutSection = () => {
  return (
    <Grid container spacing={7}>
      <Grid item xs={6}>
        <h2 className="info">About Us</h2>
        <h3 className="brand-name font-weight-700 mt-7">Business Name </h3>
        <p className="info-content mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
          cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
          tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis
          eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
          Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
          sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
          ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed.
          Sapien et montes, duis tempor euismod augue cras eu eget. Risus
          suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
          molestie proin dictum gravida. Porttitor maecenas
        </p>
        <span className="detail font-weight-700 mt-6">Contact Information</span>
        <span className="contact-no mt-4">+91 1256378409</span>
        <span className="personal-mail mt-3">Someting@random.com</span>
        <Button variant="outlined" className="mt-7 outlined-button">Directions</Button>
      </Grid>
      <Grid item xs={6}>
        <div className="info-img">
          <img src={aboutus} alt="summer-collection" className=" " />
        </div>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
