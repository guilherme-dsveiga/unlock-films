import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import VimeoIcon from '../../assets/vimeo.svg';
import YoutubeIcon from '../../assets/youtube.svg';
import InstagramIcon from '../../assets/instagram.svg';
import UnlockLogo from '../../assets/unlock-logo.png';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';

const useStyles = makeStyles((theme) => ({
        appbar: {
                color: 'white',
                boxShadow: 'none',
        },
        toolbar: {
                justifyContent: 'space-evenly',
                [theme.breakpoints.down('sm')]: {
                        justifyContent: 'space-between'
                }
        },
        button: {
                textTransform: 'none',
                color: 'white',
                borderRadius: '0px',
                backgroundColor: 'transparent',
                marginInline: theme.spacing(3),
                fontSize: '16px',
                borderBottom: 'none',
                transition: 'all .3s ease',
                '&:hover': {
                        borderBottom: 'solid 3px white'
                },
        },
        logoRoot: {
                textAlign: 'center',
                height: '100px',
                width: 'auto'
        },
        logoIcon: {
                height: '100%',
        },
        imageIcon: {
                height: '100%'
        },
        iconRoot: {
                textAlign: 'center'
        },
        showDiv: {
                display: 'block',
                [theme.breakpoints.down('sm')]: {
                        display: 'none'
                }
        },
        showMenu: {
                display: 'none',
                [theme.breakpoints.down('sm')]: {
                        display: 'inline-flex'
                }
        },
        linkItem: {
                textDecoration: 'none'
        }
}));
export default ({ black, isSmall }) => {
        const classes = useStyles();

        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
                setAnchorEl(null);
        };

        return (
                <AppBar position="fixed" className={black ? 'bg-black' : classes.appbar} color="transparent">
                        <Toolbar className={classes.toolbar}>
                                <Link className={classes.linkItem} to="/">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                                <Icon classes={{ root: classes.logoRoot }}>
                                                        <img className={classes.logoIcon} src={UnlockLogo} />
                                                </Icon>
                                        </IconButton>
                                </Link>
                                <div className={classes.showDiv}>
                                        <Link className={classes.linkItem} to="/"><Button className={classes.button}>Home</Button></Link>
                                        <Link className={classes.linkItem} to="/film"><Button className={classes.button}>Filmes</Button></Link>
                                        <Link className={classes.linkItem} to="/"><Button className={classes.button}>Sobre nós</Button></Link>
                                        <Link className={classes.linkItem} to="/"><Button className={classes.button}>Contato</Button></Link>
                                        <Link className={classes.linkItem} to={{ pathname: "https://www.instagram.com/unlockfilms/" }} target="_blank">
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                        <Icon classes={{ root: classes.iconRoot }}>
                                                                <img className={classes.imageIcon} src={InstagramIcon} />
                                                        </Icon>
                                                </IconButton>
                                        </Link>
                                        <Link className={classes.linkItem} to="/">
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                        <Icon classes={{ root: classes.iconRoot }}>
                                                                <img className={classes.imageIcon} src={YoutubeIcon} />
                                                        </Icon>
                                                </IconButton>
                                        </Link >
                                        <Link className={classes.linkItem} to={{ pathname: "https://vimeo.com/unlockfilms" }}>
                                                <IconButton color="primary" aria-label="upload picture" component="span">
                                                        <Icon classes={{ root: classes.iconRoot }}>
                                                                <img className={classes.imageIcon} src={VimeoIcon} />
                                                        </Icon>
                                                </IconButton>
                                        </Link>
                                </div >
                                <IconButton className={classes.showMenu} edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                                        <MenuIcon />
                                </IconButton>
                                <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                >
                                        <MenuItem onClick={handleClose}>Home</MenuItem>
                                        <MenuItem onClick={handleClose}>Filmes</MenuItem>
                                        <MenuItem onClick={handleClose}>Sobre nós</MenuItem>
                                        <MenuItem onClick={handleClose}>Contato</MenuItem>
                                </Menu>
                        </Toolbar >
                </AppBar >
        );
}

/*
<IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                                        <MenuIcon />
                                </IconButton>
                                <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
*/