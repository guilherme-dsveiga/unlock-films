import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  appbar: {
    color: "white",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "black!important",
    },
  },
  toolbar: {
    justifyContent: "space-between",
    paddingInline: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      paddingInline: "0",
    },
  },
  button: {
    textTransform: "none",
    color: "white",
    borderRadius: "0px",
    backgroundColor: "transparent",
    marginInline: theme.spacing(3),
    fontSize: "16px",
    borderBottom: "none",
    transition: "all .3s ease",
    "&:hover": {
      borderBottom: "solid 3px white",
    },
  },
  logoRoot: {
    textAlign: "center",
    height: "100px",
    width: "auto",
  },
  logoIcon: {
    height: "100%",
  },
  imageIcon: {
    width: "100%",
  },
  iconRoot: {
    textAlign: "center",
    height: "1.1em",
  },
  showDiv: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  showMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
  },
  linkItem: {
    textDecoration: "none",
  },
}));
const Header = ({ black, isSmall }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      className={black ? "bg-black" : classes.appbar}
      color="transparent"
    >
      <Toolbar className={classes.toolbar}>
        <Link className={classes.linkItem} to="/">
          <IconButton
            color="primary"
            aria-label="Icone do logo"
            component="span"
          >
            <Icon classes={{ root: classes.logoRoot }}>
              <img
                className={classes.logoIcon}
                src="./assets/unlock-logo.png"
                alt="Icone da Unlock Films"
              />
            </Icon>
          </IconButton>
        </Link>
        <div className={classes.showDiv}>
          <Link className={classes.linkItem} to="/">
            <Button className={classes.button}>Home</Button>
          </Link>
          <Link className={classes.linkItem} to="/film">
            <Button className={classes.button}>Filmes</Button>
          </Link>
          <Link className={classes.linkItem} to="/about">
            <Button className={classes.button}>Sobre nós</Button>
          </Link>
          <Link className={classes.linkItem} to="/contact">
            <Button className={classes.button}>Contato</Button>
          </Link>
          <Link
            className={classes.linkItem}
            to={{ pathname: "https://www.instagram.com/unlockfilms/" }}
            target="_blank"
          >
            <IconButton
              color="primary"
              aria-label="instagram icon"
              component="span"
            >
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  className={classes.imageIcon}
                  src="./assets/instagram.svg"
                  alt="Icone do Instagram"
                />
              </Icon>
            </IconButton>
          </Link>
          <Link
            className={classes.linkItem}
            to={{
              pathname:
                "https://www.youtube.com/channel/UCB8S7Wz0Y5ouw4D5fWCRzTw",
            }}
            target="_blank"
          >
            <IconButton
              color="primary"
              aria-label="youtube icon"
              component="span"
            >
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  className={classes.imageIcon}
                  src="./assets/youtube.svg"
                  alt="Icone do Youtube"
                />
              </Icon>
            </IconButton>
          </Link>
          <Link
            className={classes.linkItem}
            to={{ pathname: "https://vimeo.com/unlockfilms" }}
            target="_blank"
          >
            <IconButton
              color="primary"
              aria-label="vimeo icon"
              component="span"
            >
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  className={classes.imageIcon}
                  src="./assets/vimeo.svg"
                  alt="Icone da Vimeo"
                />
              </Icon>
            </IconButton>
          </Link>
        </div>
        <IconButton
          className={classes.showMenu}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link className={classes.linkItem} to="/">
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className={classes.linkItem} to="/film">
              Filmes
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className={classes.linkItem} to="/">
              Contato
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
