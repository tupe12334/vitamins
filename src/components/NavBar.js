import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
const urlFolder = "/vitamins"

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [PageTitle, setPageTitle] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const pages = ["Main", "About","User"];
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setPageTitle(pages[index]);
    setAnchorEl(null);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon onClick={handleClickListItem} />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {pages.map((pages, index) => (
              <MenuItem
                key={pages}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                <Link to={pages === "Main" ? `${urlFolder}/` : `${urlFolder}/${pages}`}>{pages}</Link>
              </MenuItem>
            ))}
          </Menu>
        </IconButton>
        <Typography id="PageTitle" variant="h6">
          {PageTitle}
        </Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          //onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
