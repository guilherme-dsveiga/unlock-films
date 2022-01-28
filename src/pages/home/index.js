import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import Header from "../../components/header";
import ImageTextContainer from "../../components/image-text-container";
import Clients from "../../components/clients";
import Footer from "../../components/footer";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
    background: "black",
  },
  headerVideoWrapper: {
    position: "relative",
    display: "grid",
  },
  backdropVideo: {
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.75) 100%)",
    width: "100%",
    height: "100%",
    position: "relative",
    cursor: "pointer",
  },
  backdropVideoVideo: {
    zIndex: "-1",
    width: " 100%!important",
    height: "100%!important",
    marginBottom: "-3px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-1px",
    },
  },
  homeBanner: {
    width: " 100%",
    height: "50%",
    objectFit: "cover",
  },
  homeBannerImg: {
    width: " 100%",
    height: "100%",
    objectFit: "cover",
  },
  scrollDownButton: {
    backgroundColor: "rgb(198 198 198)",
    color: "black",
    margin: "-175px auto 125px auto",
    [theme.breakpoints.down(1500)]: {
      margin: "-100px auto 50px auto",
    },
    zIndex: "999",
    "&:hover": {
      backgroundColor: "rgb(130 130 130)",
    },
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  textSection: {
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingBlock: theme.spacing(5),
    },
  },
  typography: {
    marginBlock: theme.spacing(4),
    textAlign: "center",
    fontSize: "1.75rem",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      marginBlock: theme.spacing(3),
    },
    relative: {
      position: "relative",
    },
    absoluteHook: {
      position: "absolute",
      top: "-124px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const [blackHeader, setBlackHeader] = useState(false);
  const [volume, setVolume] = useState("0");

  const myRef = useRef(null);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 150) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleScroll = () => {
    myRef.current.scrollIntoView();
  };

  const handleVolume = () => {
    if (volume === "0.2") {
      setVolume("0");
    } else {
      setVolume("0.2");
    }
  };

  let aboutText = `Como o nome diz, nossa proposta é desbloquear novos horizontes para o cliente, oferecendo conteúdos criativos e vídeos diferenciados para ajudar você e sua marca a se destacar no mercado.

        Produzimos filmes institucionais, fashion films, vídeos para redes sociais e Youtube, clipes musicais, aftermovies de eventos, entre outras produções.
        
        Cada Job tem sua pré-produção e pós-produção, onde envolve planejamento, roteiro, direção, captação, edição e finalização, transformando em algo exclusivo.
        
        E aí, tá esperando o que pra desbloquear o filme pra sua marca?`;

  return (
    <div className={classes.app}>
      <div className={classes.headerVideoWrapper}>
        <Header black={blackHeader} />
        <div className={classes.backdropVideo} onClick={handleVolume}>
          <ReactPlayer
            className={classes.backdropVideoVideo}
            pip="false"
            loop="true"
            url="./assets/unlock-background-video.mp4"
            playing="true"
            volume={volume}
            config={{
              file: { attributes: { disablepictureinpicture: "true" } },
            }}
          ></ReactPlayer>
        </div>
        <IconButton
          className={classes.scrollDownButton}
          onClick={handleScroll}
          component="span"
        >
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
      </div>
      <div className={classes.homeBanner}>
        <img
          className={classes.homeBannerImg}
          src="./assets/home-banner.jpg"
          alt="Film maker mostrando um video em uma camera para uma pessoa"
        ></img>
      </div>
      <div className={classes.relative}>
        <div className={classes.absoluteHook} ref={myRef}></div>
        <ImageTextContainer
          image="./assets/placeholder.jpg"
          title="Sobre nós"
          text={aboutText}
          buttonText="Ver mais"
          buttonIcon={<AddIcon />}
        />
      </div>
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
