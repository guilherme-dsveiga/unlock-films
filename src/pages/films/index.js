import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import bgImage from '../../assets/film-background.jpg';
import { Theaters } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import MovieRow from '../../components/movie-row'

const useStyles = makeStyles((theme) => ({
        bgImageWrapper: {
                objectFit: 'cover',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                position: 'relative'
        },
        bgImage: {
                width: '100%',
                height: '100%',
        },
        filmIcon: {
                position: 'absolute',
                bottom: '35%',
                left: '38%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.45rem',
                color: 'white',
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        iconSize: {
                fontSize: '4rem',
                display: 'flex'
        },
        section: {
                paddingTop: theme.spacing(3),
                paddingInline: theme.spacing(2),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
        },
        sectionTitle:{
                paddingBlock: theme.spacing(2)
        }
}))

export default () => {
        const classes = useStyles();
        return (
                <div className={classes.filmPage}>
                        <div className={classes.headerBgWrapper}>
                                <Header />
                                <div className={classes.bgImageWrapper}>
                                        <img className={classes.bgImage} src={bgImage}></img>
                                        <div className={classes.filmIcon}>
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
                </div>
        )
}