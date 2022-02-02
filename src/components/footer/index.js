import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import InstaGrid from "../instagrid";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    paddingBlock: theme.spacing(3),
  },
  instaGrid: {
    maxWidth: "630px",
    height: "auto",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.down(500)]: {
      fontSize: "0.75rem",
      padding: theme.spacing(0),
    },
  },
  contactButton: {
    textTransform: "none",
    fontSize: "medium",
    paddingInline: theme.spacing(2),
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#949494",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "0.75rem",
      paddingInline: theme.spacing(1),
    },
  },
  containerMain: {
    display: "flex",
    flexDirection: "column",
  },
  innerContactLower: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContactUpper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jobsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBlock: theme.spacing(1),
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.down(500)]: {
      padding: theme.spacing(1),
    },
  },
  footerTwo: {
    textAlign: "center",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    lineHeight: "160%",
    [theme.breakpoints.down(500)]: {
      fontSize: "0.75rem",
    },
  },
  accent: {
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  },
  accentSpan: {
    borderBottom: "2px solid white",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#949494",
      borderBottom: "3px solid #949494",
    },
  },
  jobsImage: {
    maxHeight: "20px",
    paddingLeft: "3px",
  },
  boxResponsive: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse!important",
    },
  },
  unlockFooter: {
    [theme.breakpoints.down(500)]: {
      fontSize: "0.75rem",
    },
  },
  linkItem: {
    textDecoration: "none",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState();

  useEffect(() => {
    const getPostsInfo = async () => {
      const getToken = async () => {
        const instagramToken = await fetch(
          "https://ig.instant-tokens.com/users/3b35b858-12c7-47d0-b1ff-3c3d9467809d/instagram/17841421110663076/token?userSecret=ifanstoaihr16010givp6v"
        ).then((res) => res.json());
        const url =
          "https://graph.instagram.com/me/media?access_token=" +
          instagramToken.Token.toString() +
          "&fields=media_url,media_type,permalink,thumbnail_url";
        return url;
      };
      const url = await getToken();
      axios.get(url).then(function (response) {
        setPostData(response.data.data);
      });
    };

    getPostsInfo();
  }, []);

  return (
    <div className={classes.footerContainer}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
        className={classes.boxResponsive}
      >
        <div className={classes.contactContainer}>
          <Typography variant="h5">Contato</Typography>
          <div className={classes.outterContact}>
            <div className={classes.innerContactUpper}>
              <Link className={classes.linkItem} to="/contact">
                <Button
                  color="inherit"
                  className={classes.contactButton}
                  startIcon={<MailIcon />}
                >
                  contato@unlockfilms.com
                </Button>
              </Link>
              <Link
                className={classes.linkItem}
                to={{ pathname: "https://www.instagram.com/unlockfilms/" }}
                target="_blank"
              >
                <Button
                  color="inherit"
                  className={classes.contactButton}
                  startIcon={<InstagramIcon />}
                >
                  @unlockfilms
                </Button>
              </Link>
            </div>
            <div className={classes.innerContactLower}>
              <Link
                className={classes.linkItem}
                to={{ pathname: "https://www.instagram.com/unlockfilms/" }}
                target="_blank"
              >
                <Button
                  color="inherit"
                  className={classes.contactButton}
                  startIcon={<WhatsAppIcon />}
                >
                  (13) 99676-2454
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.instaGrid}>
          <InstaGrid postData={postData} />
        </div>
      </Box>
      <footer className={classes.bottomContainer}>
        <div className={classes.jobsContainer}>
          <Typography className={classes.unlockFooter}>
            © 2021 - Unlock Films. Desenvolvido por
          </Typography>
          <a href="https://jobsdigital.com.br">
            <img
              className={classes.jobsImage}
              src="./assets/logo-jobs.png"
              alt="Logo da Jobs Digital"
            ></img>
          </a>
        </div>
        <Box className={classes.footerTwo}>
          <p>
            Este site é protegido pelo{" "}
            <a
              className={classes.accent}
              href="https://policies.google.com/privacy"
            >
              <span className={classes.accentSpan}>reCAPTCHA</span>
            </a>{" "}
            e a Política de Privacidade e os{" "}
            <a
              className={classes.accent}
              href="https://policies.google.com/terms"
            >
              <span className={classes.accentSpan}>Termos de Serviços</span>
            </a>{" "}
            do Google se aplicam.
          </p>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
