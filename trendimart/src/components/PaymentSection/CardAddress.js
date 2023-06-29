import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Jacket,
  Rupees,
  Frame,
  Rup,
} from "../../styles/components/assets/images";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SmallDropdown from "../atomComponents/SmallDropdown";
import CloseIcon from "@mui/icons-material/Close";

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
    </Box>
  );

  return (
    <>

    <div className="detailed">
      <div className="flex form-label">
        <FormControlLabel
          label="1/2 ITEMS SELECTED"
          className="form-heading"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        <div className="subheading  align-items">
          <span className="line align-items">
            <p className="pointer">REMOVE</p>
          </span>

          <span className="heading pointer">MOVE TO WISHLIST</span>
        </div>
      </div>

      <div className="content-payment justify-between">
        <div className="flex">
          <div className="content-img">
            {children}
            <img src={Jacket} alt="summer-collection" className="left-image" />
          </div>

          <div className="data ml-3">
            <h4 className="brand-title">Brand Name</h4>
            <h4 className="description mt-2">Men Woven Design Basics Sneakers</h4>
            <h4 className="info mt-2">Sold By : REDTAPE LIMITED</h4>

            <div className="flex dropdown pt-2">
              <SmallDropdown heading="Size"></SmallDropdown>
              <SmallDropdown heading="Qty"></SmallDropdown>
            </div>

            <div className="number-wrapper flex pt-2">
              <div className="number">
                <img
                  src={Rupees}
                  alt="summer-collection"
                  className="left-image"
                />
                <span>1,379</span>
              </div>

              <div className="number">
                <img src={Rup} alt="summer-collection" className="left-image" />
                <span className="text">6,899</span>
              </div>

              <span className="benifit">80% OFF</span>
            </div>

            <div className="frame-wrapper align-items">
              <img src={Frame} alt="summer-collection" className="left-image" />
              <span>14days</span>
              <span>return available</span>
            </div>
          </div>
        </div>

        <div className="icon pointer">
          <CloseIcon></CloseIcon>
        </div>
      </div>
      </div>
    </>
  );
}

// export default function IndeterminateCheckbox() {
//   const [checked, setChecked] = React.useState([true, false]);

//   const handleChange1 = (event) => {
//     setChecked([event.target.checked, event.target.checked]);
//   };

//   const handleChange2 = (event) => {
//     setChecked([event.target.checked, checked[1]]);
//   };

//   const handleChange3 = (event) => {
//     setChecked([checked[0], event.target.checked]);
//   };

//   const children = (
//     <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
//       <FormControlLabel
//         control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
//       />
//     </Box>
//   );

//   return (
//     <>
//       <div className="flex">
//         <FormControlLabel
//           label="1/2 ITEMS SELECTED"
//           control={
//             <Checkbox
//               checked={checked[0] && checked[1]}
//               indeterminate={checked[0] !== checked[1]}
//               onChange={handleChange1}
//             />
//           }
//         />
//         <div className="subheading align-items">
//           <span>REMOVE</span>
//           <span>MOVE TO WISHLIST</span>
//         </div>
//       </div>

//       <div className="content-payment">
//         <div>
//         {children}
//         <img src={Jacket} alt="summer-collection" className="left-image" />
//         </div>
//        <div className="data">
//         <span>Brand Name</span>
//         <span>Sold By : Sellers Name</span>
//        </div>

//       </div>
//     </>
//   );
// }
