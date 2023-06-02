import Button from "@mui/material/Button";
import "./App.scss";
import * as React from "react";
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
import logo from "./styles/components/assets/logo.png";
// import SearchIcon from "@mui/icons-material/Search";
import image from "./styles/components/assets/icons/image.svg";
import InputBase from "@mui/material/InputBase";
// import styled from "@emotion/styled";
import { styled, alpha } from "@mui/material/styles";
import search from "./styles/components/assets/search.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cart from "./styles/components/assets/icons/cart.svg";
import Banner from "./components";
import { Carousel } from "react-responsive-carousel";
import bannerw from "./styles/components/assets/icons/bannerw.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ImageCard from "./components/ImageCard";
import Deals from "./components/Deals";

const pages = ["Men", "Women", "Kids", "Shop", "Contact us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function App() {
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
              <img src={logo} alt="logo" className="logo-icon" />
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
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }} className="right-navbar">
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Search here"
                  />
                  <button type="submit" className="searchButton">
                    <img src={search} alt="serach-logo" />
                  </button>
                </div>
              </div>
              <div className="icon-wrapper">
                <FavoriteBorderIcon />
                <img src={cart} alt="cart-logo" />
              </div>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={image} />
                  <div class="content">
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
        <div className="notification-info">
          <p>
            Invite Friends and get 50% off on your next purchase{" "}
            <a href="#">
              <span>Invite Now</span>
            </a>
          </p>

          <ClearOutlinedIcon></ClearOutlinedIcon>
        </div>
      </AppBar>
      {/* banner section start here */}
      <section className="banner-wrapper">
        {/* <Banner></Banner>  */}
        <Carousel
          autoPlay="true"
          interval={2000}
          infiniteLoop="true"
          showThumbs={false}
        >
          <div>
            <img src={bannerw} alt="image1" />
          </div>
          <div>
            <img src={bannerw} alt="image2" />
          </div>
          <div>
            <img src={bannerw} alt="image3" />
          </div>
        </Carousel>
      </section>
      {/* slider sec start here */}
      <section className="slider-sec">
        <ImageCard></ImageCard>
      </section>

      {/* deals of the day */}

      <Deals></Deals>
    </>
  );
}
export default App;
