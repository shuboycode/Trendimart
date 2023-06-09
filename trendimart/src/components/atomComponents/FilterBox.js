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

const FilterBox = ( ) => {
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
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                      <span>
                        Tokyo Talkies<span className="text-color">(206)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Roadster<span className="text-color">(26)</span>
                      </span>
                    }
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Here&Now <span className="text-color">(706)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="High Star High Star"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Miss Chase<span className="text-color">(16)</span>
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span>
                        Voxati
                        <span className="text-color">(20)</span>
                      </span>
                    }
                  />
                </FormGroup>
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
