import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Movie from "../movie";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./movie-row.css";

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    width: "100%",
  },
  maxSize: {
    width: "100%",
    height: "100%",
  },
}));

const MovieRow = ({ op }) => {
  const classes = useStyles();

  const movies = {
    campaign: [
      "https://vimeo.com/454396458",
      "https://vimeo.com/471488743",
      "https://vimeo.com/524996121",
      "https://vimeo.com/488636959",
      "https://vimeo.com/370124174",
      "https://vimeo.com/575047679",
      "https://vimeo.com/570327281",
    ],
    fashion: [
      "https://vimeo.com/560265577",
      "https://vimeo.com/592264422",
      "https://vimeo.com/448910380",
      "https://vimeo.com/448210630",
      "https://vimeo.com/443212185",
      "https://vimeo.com/377638120",
    ],
    institucional: [
      "https://vimeo.com/575045363",
      "https://vimeo.com/425193414",
      "https://vimeo.com/524984948",
      "https://vimeo.com/524981900",
    ],
    sports: [
      "https://vimeo.com/386781650",
      "https://vimeo.com/453809306",
      "https://vimeo.com/513887100",
      "https://vimeo.com/503630089",
      "https://vimeo.com/524985449",
      "https://vimeo.com/525082078",
    ],
    after: [
      "https://vimeo.com/413586123",
      "https://vimeo.com/370091171",
      "https://vimeo.com/370495076",
      "https://vimeo.com/378435969",
      "https://vimeo.com/376446495",
    ],
    clips: ["https://vimeo.com/435183080", "https://vimeo.com/452738244"],
    food: [
      "https://vimeo.com/560453164",
      "https://vimeo.com/575039323",
      "https://vimeo.com/513887510",
      "https://vimeo.com/519636729",
    ],
  };

  let slides = [];

  switch (op) {
    case "campanhas":
      slides = (
        <AwesomeSlider>
          {movies.campaign.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );
      break;
    case "fashion":
      slides = (
        <AwesomeSlider>
          {movies.fashion.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );
      break;
    case "institucional":
      slides = (
        <AwesomeSlider>
          {movies.institucional.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );
      break;
    case "esportes":
      slides = (
        <AwesomeSlider>
          {movies.sports.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );
      break;
    case "aftermovie":
      slides = (
        <AwesomeSlider>
          {movies.after.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );
      break;
    case "clipe":
      slides = (
        <AwesomeSlider>
          {movies.clips.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );
      break;
    case "food":
      slides = (
        <AwesomeSlider>
          {movies.food.map((item, key) => (
            <div key={key} className={classes.maxSize}>
              <Movie url={item} />
            </div>
          ))}
        </AwesomeSlider>
      );

      break;
    default:
      break;
  }

  return <div className={classes.carouselWrapper}>{slides}</div>;
};

export default MovieRow;
