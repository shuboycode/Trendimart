import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";

import image from "../styles/components/assets/images/image.svg";
import search from "../styles/components/assets/icons/search.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cart from "../styles/components/assets/icons/cart.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import LogoHead from "../styles/components/assets/images/LogoHead.jpg";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Header = ({ InviteBrand = false }) => {
  const pages = ["Men", "Women", "Kids", "Shop", "Contact us"];
  const navLinks = [
    {
      title: "Men",
      path: "/categories/men",
    },
    {
      title: "Women",
      path: "/categories/women",
    },
    {
      title: "Kids",
      path: "/categories/kids",
    },
    {
      title: "All Products",
      path: "/categories/all",
    },
    {
      title: "Contact Us",
      path: "/contactus",
    },
  ];

  const wishlistRoute = "/MyWishlist";
  const PaymentRoute = "/Payment";
  const [CartItem, setCartItem] = useState(0);
  const CartItemCount = useSelector((state) => state.counter);

  useEffect(() => {
    setCartItem(CartItemCount);
  }, [CartItemCount]);

  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="relative"
        sx={{ backgroundColor: "#ffffff" }}
        className="app-bar-wrapper"
      >
        <Container
          maxWidth="false"
          sx={{ maxWidth: "1920px", border: "1px solid" }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={LogoHead} alt="logo" className="logo-icon" />
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              className="nav-content"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className="button-content"
            >
              {navLinks.map((navLinks, index) => (
                <Link to={navLinks.path}>
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    {navLinks.title}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} className="right-navbar">
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="search-term"
                    placeholder="Search here"
                  />
                  <button type="submit" className="search-button">
                    <img src={search} alt="serach-logo" />
                  </button>
                </div>
              </div>
              <div className="icon-wrapper">
                <Link to={wishlistRoute}>
                  <FavoriteBorderIcon />
                </Link>
                if()
                <Badge badgeContent={CartItem} color="primary" className="ml-4">
                  <Link to={PaymentRoute}>
                    <ShoppingCartOutlinedIcon />
                  </Link>
                </Badge>
              </div>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={image} />
                  <div className="content">
                    <span>Anne Doe</span>
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>

        {InviteBrand && (
          <div className={"InviteBrand && notification-info"}>
            <p>
              Invite Friends and get 50% off on your next purchase{" "}
              <a href="#">
                <span>Invite Now</span>
              </a>
            </p>

            <ClearOutlinedIcon className="pointer"></ClearOutlinedIcon>
          </div>
        )}
      </AppBar>
    </>
  );
};

export default Header;
