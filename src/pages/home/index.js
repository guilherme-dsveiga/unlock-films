import React, { useState, useEffect, useRef } from 'react';
import './home.css'
import Header from '../../components/header';
import Clients from '../../components/clients';
import Footer from '../../components/footer';
import Video from '../../assets/unlock-background-video.mp4';
import homeBanner from '../../assets/home-banner.jpg';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
        app: {
                display: 'flex',
                flexDirection: 'column',
        },
        headerVideoWrapper: {
                position: 'relative',
                display: 'grid'
        },
        backdropVideo: {
                background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.75) 100%)',
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: 'pointer'
        },
        backdropVideoVideo: {
                zIndex: '-1',
                width: ' 100%!important',
                height: '100%!important',
                marginTop: '-4px'
        },
        homeBanner: {
                width: ' 100%',
                height: '50%',
                objectFit: 'cover',
                marginTop: '-4px'
        },
        homeBannerImg: {
                width: ' 100%',
                height: '100%',
                objectFit: 'cover',
        },
        scrollDownButton: {
                backgroundColor: 'rgb(198 198 198)',
                color: 'black',
                margin: '-175px auto 125px auto',
                [theme.breakpoints.down(1500)]: {
                        margin: '-100px auto 50px auto',
                },
                zIndex: '999',
                '&:hover': {
                        backgroundColor: 'rgb(130 130 130)',
                },
                [theme.breakpoints.down(900)]: {
                        display: 'none'
                },
        },
}));

export default () => {
        const classes = useStyles();

        const [postInfo, setPostInfo] = useState();
        const [blackHeader, setBlackHeader] = useState(false);
        const [volume, setVolume] = useState('0');

        const myRef = useRef(null)

        useEffect(() => {
                const scrollListener = () => {
                        if (window.scrollY > 150) {
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
                                const instagramToken = await fetch('https://ig.instant-tokens.com/users/3b35b858-12c7-47d0-b1ff-3c3d9467809d/instagram/17841421110663076/token?userSecret=ifanstoaihr16010givp6v').then((res) => res.json());
                                const url = "https://graph.instagram.com/me/media?access_token=" + instagramToken.Token.toString() + "&fields=media_url,media_type,permalink,thumbnail_url"
                                return url;
                        }
                        const url = await getToken()
                        axios.get(url).then(function (response) {
                                setPostInfo(response.data.data);
                                console.log(response.data.data)
                        })
                }

                getPostsInfo();
        }, []);

        const handleScroll = () => {
                myRef.current.scrollIntoView();
        }

        const handleVolume = () => {
                if (volume == '0.2') {
                        setVolume('0');
                } else {
                        setVolume('0.2');
                }

        }

        return (
                <div className={classes.app} >
                        <div className={classes.headerVideoWrapper}>
                                <Header black={blackHeader} />
                                <div className={classes.backdropVideo} onClick={handleVolume}>
                                        <ReactPlayer className={classes.backdropVideoVideo} loop='true' url={Video} playing="true" volume={volume}>
                                        </ReactPlayer>
                                </div>
                                <IconButton className={classes.scrollDownButton} onClick={handleScroll} component="span">
                                        <ExpandMoreIcon></ExpandMoreIcon>
                                </IconButton>
                        </div>
                        <div className={classes.homeBanner}>
                                <img className={classes.homeBannerImg} src={homeBanner}></img>
                        </div>
                        <div ref={myRef}></div>
                        <Clients />
                        <Footer postData={postInfo} />
                </div>
        );
}