import React from "react";
import { Button } from "@mui/material";
import PlainSlider from "./PlainSlider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector } from "react-redux";
import { useState } from "react";
import productSlice from "../../store/slices/productSlice";
import { useEffect } from "react";

const FilterBox = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const [resultSet, setResultSet] = useState(new Set(data));

  const brands = Array.from(resultSet, (item) => item.brand);
  console.log("element", brands);
  const uniqueBrands = [...new Set(brands)];
  console.log("uniqueBrands", uniqueBrands);
  
  const [isZaraChecked, setZaraChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setZaraChecked(event.target.checked);
    console.log("target", event.target.value);
  };

  const filteredItems = isZaraChecked
    ? uniqueBrands.filter((item) => item.brand === "Zara")
    : uniqueBrands;
  console.log("filteredItems", filteredItems);

  return (
    <>
      <div className="dropdown-wrapper">
        <div className="heading-text">
          <h3 className="heading font-weight-700">Filters</h3>
          <Button variant="text" className="button-text text-blue">
            Clear all
          </Button>
        </div>

        <div className="price-wrapper">
          <div className="sub-heading mt-4 mb-7">Price</div>

          <PlainSlider></PlainSlider>
        </div>

        {/* first accordian  */}
        <div className="simple-accordion">
          <hr sx="width:50%;text-align:left;" className="mt-6" />

          <div>
            <Accordion className="accordion-style">
              <AccordionSummary
                className="accordian-icon"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="heading">Brand</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {uniqueBrands.map((brand, index) => (
                  <FormGroup key={index}>
                    <FormControlLabel
                      control={<Checkbox />}
                      onChange={handleCheckboxChange}
                      label={brand}
                      value={brand}
                    />
                  </FormGroup>
                ))}

                <Button variant="text">+ 40 more</Button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* sec accordian */}
        <div className="simple-accordion">
          <hr sx="width:50%;text-align:left;" />
          <div>
            <Accordion className="accordion-style">
              <AccordionSummary
                className="accordian-icon"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="heading">Color</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <span>
                        Blue <span className="text-color">(206)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Blue <span className="text-color">(206)</span>
                      </span>
                    }
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Blue <span className="text-color">(206)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Blue <span className="text-color">(206)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Blue <span className="text-color">(206)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Blue <span className="text-color">(206)</span>
                      </span>
                    }
                  />
                </FormGroup>
                <Button variant="text">+ 40 more</Button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* third accordian */}
        <div className="simple-accordion">
          <hr sx="width:50%;text-align:left;" />

          <div>
            <Accordion className="accordion-style">
              <AccordionSummary
                className="accordian-icon"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="heading">Discount Range</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <span>
                        10% and above <span className="text-color">(26)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        20% and above <span className="text-color">(62)</span>
                      </span>
                    }
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        30% and above <span className="text-color">(20)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        40% and above <span className="text-color">(106)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        50% and above <span className="text-color">(32)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        60% and above <span className="text-color">(46)</span>
                      </span>
                    }
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <hr sx="width:50%;text-align:left;" />
    </>
  );
};

export default FilterBox;
