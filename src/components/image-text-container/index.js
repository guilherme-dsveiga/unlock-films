import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sectionRow: {
    display: "flex",
    flexDirection: "row",
    marginBlock: theme.spacing(3),
    marginInline: theme.spacing(3),
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      margin: "0",
    },
  },
  imageContainer: {},
  image: {
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  typographyTitle: {
    fontSize: "2.3rem",
    fontWeight: "700",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      marginBlock: theme.spacing(1),
    },
  },
  typography: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    textAlign: "justify",
    fontSize: "1.3rem",
    color: "white",
    [theme.breakpoints.down("md")]: {
      marginBlock: theme.spacing(2),
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0d0d0d",
    color: "white",
    "&:hover": {
      backgroundColor: "#5F5F5F",
    },
  },
  linkItem: {
    textDecoration: "none",
  },
}));

const ImageTextContainer = ({ image, title, text, buttonText, buttonIcon }) => {
  const classes = useStyles();

  return (
    <section className={classes.sectionRow}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt={title}></img>
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.typographyTitle}>{title}</Typography>
        <Typography className={classes.typography}>{text}</Typography>
        <div className={classes.buttonContainer}>
          <Link className={classes.linkItem} to="/about">
            <Button
              variant="contained"
              className={classes.button}
              startIcon={buttonIcon}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImageTextContainer;
