import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  ourClients: {
    textAlign: "center",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(0),
    color: "white",
    fontFamily: "Mont Bold!important",
    [theme.breakpoints.down(900)]: {
      fontSize: "2rem",
      paddingBlock: theme.spacing(5),
    },
    [theme.breakpoints.down(500)]: {
      paddingBlock: theme.spacing(3),
    },
  },
  clientsContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: theme.spacing(3),
  },
  gridImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridImageBlack: {
    width: "225px",
    height: "225px",
    padding: "1rem",
    alignSelf: "center",
    backgroundColor: "black",
    transform: "scale(0.9)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1)",
    },
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  button: {
    margin: "0 auto",
    backgroundColor: "#0d0d0d",
    color: "white",
    "&:hover": {
      backgroundColor: "#5F5F5F",
    },
  },
}));

const Clients = () => {
  const classes = useStyles();
  const [showItem, setShowItem] = useState(false);

  const showMoreItems = () => {
    setShowItem((prev) => !prev);
  };

  return (
    <div className={classes.clientsWrapper}>
      <Container className={classes.clientsContainer}>
        <Typography variant="h2" className={classes.ourClients}>
          NOSSOS CLIENTES
        </Typography>
        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/australian.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/bacardi.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/igana.png"
              alt="Logo de cliente"
            ></img>
          </Grid>

          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/layback.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/pivot.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/surftrunk.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/twin.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
          <Grid className={classes.gridImageContainer} item xs={3}>
            <img
              className={classes.gridImageBlack}
              src="./assets/via.png"
              alt="Logo de cliente"
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Clients;
