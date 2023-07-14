import React from "react";
import womenfashion from "../styles/components/assets/images/womenfashion.svg";
import { Grid } from "@mui/material";
import CategryMen from "../styles/components/assets/images/CategryMen.svg";
import WomenCategry from "../styles/components/assets/images/WomenCategry.svg";

import WomenFruit from "../styles/components/assets/images/WomenFruit.svg";
import LowerWomen from "../styles/components/assets/images/LowerWomen.svg";
import ShirtWomen from "../styles/components/assets/images/ShirtWomen.svg";

const CategoriesSection = () => {
  return (
    <Grid container columnSpacing={2} className="categories-wrapper">
      {/* first col start here */}
      <Grid item xs={4} className="height-100 categories-main-img">
        <img src={womenfashion} alt="women-trouser" />
      </Grid>

      {/* sec col start here */}

      <Grid item xs={4} className="height-100 pl-6">
        <Grid container spacing={2} className="height-100">
          <Grid item xs={12} className="height-50">
            <img src={CategryMen} alt="women-trouser" />
          </Grid>

          <Grid item xs={12} className="height-50">
            <img src={WomenCategry} alt="women-trouser" />
          </Grid>
        </Grid>
      </Grid>

      {/* 3rd col start here */}

      <Grid item xs={4} className="height-100">
        <Grid container rowSpacing={2} className="height-100">
          <Grid item xs={12} className="height-50">
            <img src={WomenFruit} alt="women-trouser" />
          </Grid>

          <Grid item xs={12} className="height-50">
            <Grid container xs={12} className="height-100">
              <Grid item xs={6} className="height-100 categry-sec-img">
                <img src={LowerWomen} alt="women-trouser" />
              </Grid>

              <Grid item xs={6} className="height-100 categry-sec-women-img">
                <img src={ShirtWomen} alt="women-trouser" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoriesSection;
