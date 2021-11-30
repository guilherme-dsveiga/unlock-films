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
                paddingBlock: theme.spacing(2),
                paddingInline: theme.spacing(2),
                textAlign: 'center'
        },
        sectionTitle: {
                paddingBlock: theme.spacing(2)
        }
}))

export default () => {
        const classes = useStyles();

        const [blackHeader, setBlackHeader] = useState(true);

        return (
                <div className={classes.filmPage}>
                        <div className={classes.headerBgWrapper}>
                                <Header  black={blackHeader} />
                                <Banner className={classes.banner} bannerImg={bgImage} icon={<Theaters fontSize='inherit' />} label='confira nossos filmes!' darkbg={false} marginTop={true} />
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
                        <Footer />
                </div>
        )
}