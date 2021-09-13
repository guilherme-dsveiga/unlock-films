import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Clients from './components/clients';
import Footer from './components/footer';
import video from './assets/unlock-background-video.mp4';
import homeBanner from './assets/home-banner.jpg';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios');
const oauth = require('axios-oauth-client');

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
}));



function App() {
  const classes = useStyles();
  const body = {
    client_id: "911248353137466",
    client_secret: "75613555681505ff11ac8aa630043b88",
    grant_type: "authorization_code",
    redirect_uri: "https://unlock-films.vercel.app/",
    code: ""
  };

  useEffect(() => {
    const getAuthorizationCode = oauth.client(axios.create(), {
      url: 'https://api.instagram.com/oauth/access_token',
      grant_type: 'authorization_code',
      client_id: '911248353137466',
      client_secret: '75613555681505ff11ac8aa630043b88',
      redirect_uri: 'https://unlock-films.vercel.app/',
      code: 'AQAkU7geqh6pn2Z1BgJ2HzPQ7LfNTNE_Q_jDkMkpIsFBDBqYu1dVyZSVdw19d5JPhfYmr6O0MQJaggzccSuL045hC6C08b_Lbt4JlVVlEqyGvnI3jHPmwGSCUG0UZu1FlMcNPBLenWWVpogEr1pASsssBGZTOiXt3OJ1loGecmfk2w7-niXFo85I_o-CjUMoNItEZpBEujOf1wyB7MdMPVI1MRDDzXgCO0eONaquTJg3Jg',
      scope: 'baz',
    });

    const auth = await getAuthorizationCode();
    console.log(auth)
  }, []);

  return (
    <div className={classes.app} >
      <div className={classes.headerVideoWrapper}>
        <Header />
        <div className={classes.backdropVideo}>
        </div>
        <video className={classes.backdropVideoVideo} autoPlay loop muted disablePictureInPicture>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div className={classes.bannerGradient}></div>
      <div className={classes.homeBanner}>
      </div>
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
