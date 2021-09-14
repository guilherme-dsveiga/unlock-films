import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Clients from './components/clients';
import Footer from './components/footer';
import video from './assets/unlock-background-video.mp4';
import homeBanner from './assets/home-banner.jpg';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { buildUrl } from 'react-instafeed';
const axios = require('axios');



const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerVideoWrapper: {
    position: 'relative',
  },
  backdropVideo: {
    background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.75) 100%)',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    objectFit: 'cover',
    position: 'relative',
    zIndex: '2',
  },
  backdropVideoVideo: {
    position: 'absolute',
    top: '0',
    zIndex: '-1',
    width: ' 100%',
    height: '100vh',
    minHeight: '600px',
    objectFit: 'cover',
  },
  homeBanner: {
    position: 'absolute',
    top: '100vh ',
    zIndex: '-1',
    width: ' 100%',
    height: '55vh',
    minHeight: '600px',
    objectFit: 'cover',
    backgroundImage: `url(${homeBanner})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(255, 255, 255)'
  },
  bannerGradient: {
    background: 'rgba(255,255,255,0.05)',
    width: '100 %',
    height: '55vh',
    minHeight: '600px',
    objectFit: 'cover',
    position: 'relative',
    zIndex: '2',
  },
  scrollDownButton: {
    position: 'absolute',
    backgroundColor: 'rgb(198 198 198)',
    color: 'black',
    margin: '0 auto',
    zIndex: '999',
    bottom: '50px',
    left: '48%',
    '&:hover': {
      backgroundColor: 'rgb(130 130 130)',
    },
  },
}));



function App() {
  const classes = useStyles();

  const [postInfo, setPostInfo] = useState();
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 850) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  useEffect(() => {
    const getPostsInfo = async () => {
      const getToken = async () => {
        const instagramToken = await fetch('https://ig.instant-tokens.com/users/3b35b858-12c7-47d0-b1ff-3c3d9467809d/instagram/17841404417068492/token?userSecret=7mdvv0opy7fir3b7nv14nf').then((res) => res.json());
        const url = "https://graph.instagram.com/me/media?access_token=" + instagramToken.Token.toString() + "&fields=media_url,media_type,permalink"
        return url;
      }
      const url = await getToken()
      axios.get(url).then(function (response) {
        setPostInfo(response.data.data);
        console.log(postInfo)
      })
    }

    getPostsInfo();
  },  []);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className={classes.app} >
      <div className={classes.headerVideoWrapper}>
        <Header black={blackHeader}/>
        <div className={classes.backdropVideo}>
        </div>
        <video className={classes.backdropVideoVideo} autoPlay loop muted disablePictureInPicture>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <IconButton className={classes.scrollDownButton} onClick={handleScroll} component="span">
        <ExpandMoreIcon></ExpandMoreIcon>
      </IconButton>
      <div className={classes.bannerGradient}></div>
      <div className={classes.homeBanner}>
      </div>
      <Clients />
      <Footer postData={postInfo} />
    </div>
  );
}

export default App;
