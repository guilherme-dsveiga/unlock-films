import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  instaGrid: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "600px",
    height: "auto",
    width: "450px",
    paddingBlock: "15px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    borderRadius: "15px",
    [theme.breakpoints.down(500)]: {
      maxHeight: "400px",
      height: "auto",
      width: "100%",
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    height: "33%",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    transform: "scale(0.95)",
    transition: "all 0.2s ease",
    borderRadius: "5px",
    objectFit: "cover",
    boxShadow: "10px 10px 21px -6px rgba(0,0,0,0.75)",
    "&:hover": {
      transform: "scale(1)",
    },
  },
  a: {
    cursor: "pointer",
    maxWidth: "150px",
    maxHeight: "154px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "85px",
      maxHeight: "89px",
    },
  },
}));

const Instagrid = ({ postData }) => {
  const classes = useStyles();

  return (
    <div className={classes.instaGrid}>
      {postData && (
        <div className={classes.instaGrid}>
          <div className={classes.row}>
            <a href={postData[0].permalink} className={classes.a}>
              {postData[0].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[0].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[0].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
            <a href={postData[1].permalink} className={classes.a}>
              {postData[1].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[1].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[1].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
            <a href={postData[2].permalink} className={classes.a}>
              {postData[2].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[2].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[2].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
          </div>
          <div className={classes.row}>
            <a href={postData[3].permalink} className={classes.a}>
              {postData[3].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[3].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[3].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
            <a href={postData[4].permalink} className={classes.a}>
              {postData[4].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[4].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[4].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
            <a href={postData[5].permalink} className={classes.a}>
              {postData[5].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[5].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[5].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
          </div>
          <div className={classes.row}>
            <a href={postData[6].permalink} className={classes.a}>
              {postData[6].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[6].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[6].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
            <a href={postData[7].permalink} className={classes.a}>
              {postData[7].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[7].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[7].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
            <a href={postData[8].permalink} className={classes.a}>
              {postData[8].media_type === "VIDEO" ? (
                <img
                  className={classes.img}
                  src={postData[8].thumbnail_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              ) : (
                <img
                  className={classes.img}
                  src={postData[8].media_url}
                  alt="Imagem retirada do Instagram"
                ></img>
              )}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Instagrid;
