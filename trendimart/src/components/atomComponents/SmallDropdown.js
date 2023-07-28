import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ heading }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 12 }} className="dropdown">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" variant="filled">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>{heading}</em>
          </MenuItem>
          <MenuItem value={1}>S</MenuItem>
          <MenuItem value={2}>M</MenuItem>
          <MenuItem value={3}>L</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}
