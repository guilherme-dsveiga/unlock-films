import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sectionRow: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(5),
    gap: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      margin: "0",
    },
    "&>*": {
      flexBasis: "100%",
    },
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  typographyTitle: {
    fontSize: "2.3rem",
    fontWeight: "700",
    color: "white",
    [theme.breakpoints.down(900)]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBlock: theme.spacing(1),
    },
    fontFamily: "Mont Bold!important",
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
    [theme.breakpoints.down("sm")]: {
      paddingInline: "1.3rem",
      fontSize: "16px",
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

const ImageTextContainer = ({
  image,
  title,
  text,
  buttonText,
  buttonIcon,
  button,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.sectionRow}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={image} alt={title}></img>
      </div>
      <div className={classes.textContainer}>
        <Typography className={classes.typographyTitle}>{title}</Typography>
        <Typography className={classes.typography}>{text}</Typography>
        {button ? (
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
        ) : null}
      </div>
    </section>
  );
};

export default ImageTextContainer;
