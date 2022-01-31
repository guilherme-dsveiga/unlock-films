import React, { useState } from "react";
import useScrollListener from "../../hooks/useScrollListener";
import { makeStyles } from "@material-ui/core/styles";
import { Theaters } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import Header from "../../components/header";
import MovieRow from "../../components/movie-row";
import Footer from "../../components/footer";
import Banner from "../../components/banner";

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBlock: theme.spacing(5),
    paddingInline: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "black",
  },
  sectionTitle: {
    paddingBlock: theme.spacing(2),
    color: "white",
    marginBottom: "-10rem",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "-10rem",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginBottom: "-0",
    },
  },
}));

const Films = () => {
  const classes = useStyles();

  const [blackHeader, setBlackHeader] = useState(false);

  useScrollListener(setBlackHeader);

  return (
    <div className={classes.filmPage}>
      <div className={classes.headerBgWrapper}>
        <Header black={blackHeader} startBlack={false} />
        <Banner
          bannerImg="./assets/film-background.jpg"
          icon={<Theaters fontSize="inherit" />}
          label="confira nossos filmes!"
          darkbg={false}
          marginTop={false}
        />
      </div>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Campanhas
        </Typography>
        <MovieRow op="campanhas" />
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Fashion Film
        </Typography>
        <MovieRow op="fashion" />
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Institucional
        </Typography>
        <MovieRow op="institucional" />
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Esportes
        </Typography>
        <MovieRow op="esportes" />
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Aftermovie
        </Typography>
        <MovieRow op="aftermovie" />
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Clipe
        </Typography>
        <MovieRow op="clipe" />
      </section>
      <section className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h3">
          Food
        </Typography>
        <MovieRow op="food" />
      </section>
      <Footer />
    </div>
  );
};

export default Films;
