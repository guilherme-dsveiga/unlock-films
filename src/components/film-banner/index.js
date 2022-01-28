import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  title: {
    fontFamily: "Mont Bold!important",
  },
  button: {
    padding: "10px 25px",
    fontSize: "1.1rem",
    background: "transparent",
    borderRadius: "15px",
    border: "solid 2px white",
    cursor: "pointer",
    "&:hover": {
      background: "black",
    },
  },
  link: {
    color: "white!important",
    textDecoration: "none",
  },
}));

const FilmBanner = () => {
  const classes = useStyles();

  return (
    <div className="background">
      <div className={classes.flex}>
        <Typography variant="h2" className={classes.title}>
          FILMES
        </Typography>
        <button className={classes.button}>
          <Link className={classes.link} to="/film">
            Acesse nossas produções!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FilmBanner;
