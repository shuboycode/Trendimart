import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `$0{value}°C`;
}

export default function RangeSlider({ handleFilterByPriceProp }) {
  const [value, setValue] = React.useState([700, 2000]);
  const minValue = value[0];

  const maxValue = value[1];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleFilterByPriceProp(minValue, maxValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={2000}
        min={700}
        // onChange={(e) =>  handleFilterByPriceProp(e)}
        className="plain-slider"
      />

      <div className="flex justify-between mt-7 value-wrapper">
        <div>
          <h2>Min</h2>
          <div className="mt-2 number"> Rs .{minValue}</div>
        </div>
        <div>
          <h2>Max</h2>
          <div className="mt-2 number"> Rs .{maxValue}</div>
        </div>
      </div>
    </Box>
  );
}
