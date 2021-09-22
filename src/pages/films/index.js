import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import bgImage from '../../assets/film-background.jpg';
import { Theaters } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import MovieRow from '../../components/movie-row'
import Footer from '../../components/footer';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
        bgImageWrapper: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
        },
        bgImage: {
                width: '100%',
                position: 'relative'
        },
        filmIconWrapper: {
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                fontSize: '2.45rem',
                color: 'white',
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                [theme.breakpoints.down('md')]: {
                        fontSize: '2rem',
                },
                [theme.breakpoints.down('sm')]: {
                        fontSize: '1.5rem',
                },

        },
        iconSize: {
                fontSize: '4rem',
                display: 'flex'
        },
        section: {
                paddingTop: theme.spacing(3),
                paddingInline: theme.spacing(2),
                textAlign: 'center'
        },
        sectionTitle: {
                paddingBlock: theme.spacing(2)
        }
}))

export default () => {
        const classes = useStyles();

        const [blackHeader, setBlackHeader] = useState(false);
        const [postInfo, setPostInfo] = useState();

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

        return (
                <div className={classes.filmPage}>
                        <div className={classes.headerBgWrapper}>
                                <Header black={blackHeader} />
                                <div className={classes.bgImageWrapper}>
                                        <img className={classes.bgImage} src={bgImage}></img>
                                        <div className={classes.filmIconWrapper}>
                                                <div className={classes.iconSize}>
                                                        <Theaters fontSize='inherit' />
                                                </div>
                                                <label>confira nossos filmes!</label>
                                        </div>
                                </div>
                        </div>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Fashion Film</Typography>
                                <MovieRow />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Institucional</Typography>
                                <MovieRow />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Aftermovie</Typography>
                                <MovieRow />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Campanhas</Typography>
                                <MovieRow />
                        </section>
                        <Footer postData={postInfo} />
                </div>
        )
}