import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import bgImage from '../../assets/film-background.jpg';
import { Theaters } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import MovieRow from '../../components/movie-row'
import Footer from '../../components/footer';
import Banner from '../../components/banner'
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
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
                                <Banner bannerImg={bgImage} icon={<Theaters fontSize='inherit'/>} label='confira nossos filmes!' darkbg={false}/>
                        </div>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Campanhas</Typography>
                                <MovieRow campaign='campanhas' />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Fashion Film</Typography>
                                <MovieRow campaign='fashion' />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Institucional</Typography>
                                <MovieRow campaign='institucional' />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Esportes</Typography>
                                <MovieRow campaign='esportes' />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Aftermovie</Typography>
                                <MovieRow campaign='aftermovie' />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Clipe</Typography>
                                <MovieRow campaign='clipe' />
                        </section>
                        <section className={classes.section}>
                                <Typography className={classes.sectionTitle} variant="h3">Food</Typography>
                                <MovieRow campaign='food' />
                        </section>
                        <Footer postData={postInfo} />
                </div>
        )
}