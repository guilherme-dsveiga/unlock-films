import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  clientsWrapper: {},
  ourClients: {
    textAlign: "center",
    paddingBlock: theme.spacing(8),
    [theme.breakpoints.down(900)]: {
      fontSize: "24px!important",
      paddingBlock: theme.spacing(5),
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "20!important",
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
    width: "150px",
    height: "100%",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    transform: "scale(0.95)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1)",
    },
  },
  gridImageBlack: {
    width: "275px",
    height: "275px",
    padding: "1rem",
    alignSelf: "center",
    backgroundColor: "black",
    transform: "scale(0.95)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1)",
    },
    objectFit: "contain",
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down(500)]: {
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
        <Typography variant="h4" className={classes.ourClients}>
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
          {showItem ? (
            <>
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
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={showItem ? <RemoveIcon /> : <AddIcon />}
          onClick={showMoreItems}
        >
          {showItem ? "Ver Menos" : "Ver Mais"}
        </Button>
      </Container>
    </div>
  );
};

export default Clients;
