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

const FilterBox = ({
  handleFilterByPriceProp,
  handleFilterCategory,
  categoryAllProducts,
  categoryAllColor,
  handleColorCategory,
  handleChange,
  maxValue,
  handleClear,
}) => {
  // const { data, loading, error } = useSelector((state) => state.products);
  const [resultSet, setResultSet] = useState(categoryAllProducts);
  const [expanded, setExpanded] = React.useState("panel1");

  useEffect(() => {
    setResultSet(categoryAllProducts);
  }, [categoryAllProducts]);

  const brands = Array.from(resultSet, (item) => item.brand);
  const uniqueBrands = [...new Set(brands)];

  // code for color

  const colors = Array.from(resultSet, (item) => item.color);
  const uniqueColors = [...new Set(colors)];

  const handleChangeAccordian = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="dropdown-wrapper">
        <div className="heading-text">
          <h3 className="heading font-weight-700">Filters</h3>
          <Button
            variant="text"
            onClick={handleClear}
            className="button-text text-blue"
          >
            Clear all
          </Button>
        </div>

        <div className="price-wrapper">
          <div className="sub-heading mt-4 mb-7">Price</div>

          <PlainSlider
            handleFilterByPriceProp={handleFilterByPriceProp}
          ></PlainSlider>
        </div>

        {/* first accordian  */}
        <div className="simple-accordion">
          <hr sx="width:50%;text-align:left;" className="mt-6" />

          <div>
            {/* <Accordion  className="accordion-style"> */}
            <Accordion
              className="accordion-style"
              expanded={expanded === "panel1"}
              onChange={handleChangeAccordian("panel1")}
            >
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
                      onChange={(e) => handleFilterCategory(e)}
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
                {uniqueColors.map((color, index) => (
                  <FormGroup key={index}>
                    <FormControlLabel
                      control={<Checkbox />}
                      onChange={(e) => handleColorCategory(e)}
                      label={color}
                      value={color}
                    />
                  </FormGroup>
                ))}

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
