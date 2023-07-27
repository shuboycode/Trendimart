import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props, handleSorting) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function DropdownMenu({ handleSorting }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="menu-heading"
        disableElevation
        onClick={handleClick}
        // onClick={() => {
        //   handleClick();
        //   handleClose();
        // }}

        endIcon={<KeyboardArrowDownIcon />}
      >
        Sort By
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClick={(e) => handleSorting(e)}
      >
        {/* <MenuItem onClick={(e) => handleSorting(e)} disableRipple>
          Popularity
        </MenuItem> */}
        <MenuItem
          onClick={(e) => {
            handleSorting(e);
            handleClose();
          }}
          value={"Price - Low to High"}
          disableRipple
        >
          Price - Low to High
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            handleSorting(e);
            handleClose();
          }}
          disableRipple
        >
          Price - High to Low
        </MenuItem>
        {/* <MenuItem onClick={handleClose} disableRipple>
          Newest
        </MenuItem> */}
      </StyledMenu>
    </div>
  );
}
