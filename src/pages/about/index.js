import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import InfoIcon from '@material-ui/icons/Info';
import bgImage from '../../assets/home-banner.jpg';
import brothersBanner from '../../assets/brothers-banner.jpg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
        homeBanner: {
                width: ' 100%',
                height: '50%',
                objectFit: 'cover',

        },
        homeBannerImg: {
                width: ' 100%',
                height: '100%',
                objectFit: 'cover',
        },
        textSection: {
                paddingInline: theme.spacing(3),
                paddingBlock: theme.spacing(10),
                [theme.breakpoints.down('sm')]: {
                        paddingBlock: theme.spacing(5),
                }
        },
        typography: {
                marginBlock: theme.spacing(4),
                textAlign: 'center',
                fontSize: '1.75rem',
                color: 'black',
                [theme.breakpoints.down('sm')]: {
                        marginBlock: theme.spacing(3),
                }
        },
        descriptionSection: {
                marginTop: '-4px',
                display: 'flex',
                flexDirection: 'column'
        },
        single: {
                display: 'flex',
                flexDirection: 'row',
                [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column',
                }
        },
        singleReverse: {
                display: 'flex',
                flexDirection: 'row',
                [theme.breakpoints.down('sm')]: {
                        flexDirection: 'column-reverse',
                }
        },
        textBlock: {
                paddingInline: theme.spacing(3),
                [theme.breakpoints.down('sm')]: {
                        paddingBlock: theme.spacing(3),
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
        },
        picture: {
                width: '50%',
                height: '100%',
                [theme.breakpoints.down('sm')]: {
                        width: '100%',
                }
        },
        textBlockTypography: {
                textAlign: 'center',
                paddingBottom: theme.spacing(5)
        },
        instagramButton: {
                fontSize: '1.5rem',
                textTransform: 'none',
                color: 'white!important',
                backgroundColor: 'black',
                '&:hover': {
                        backgroundColor: '#444'
                }
        },
        instagramIconFont: {
                fontSize: '2rem!important'
        },
        linkItem: {
                textDecoration: 'none',
                color: 'white!important',
        },
        aboutTextContainer:{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBlock: theme.spacing(3)
        },
        aboutText: {
                width: '75%',
                margin: '0 auto'
        }
}))

const About = () => {
        const classes = useStyles();

        const [blackHeader, setBlackHeader] = useState(false);

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
                <div>
                        <div className={classes.headerBgWrapper}>
                                <Header black={blackHeader} />
                                <Banner bannerImg={bgImage} icon={<InfoIcon fontSize='inherit' />} label='sobre nós' darkbg={true} />
                        </div>
                        <div className={classes.homeBanner}>
                                <img className={classes.homeBannerImg} src={brothersBanner} alt="Foto dos criadores da Unlock Films"></img>
                        </div>
                        <div className={classes.aboutTextContainer}>
                                <Typography variant='h5' className={classes.aboutText}>Como o nome diz, nossa proposta é desbloquear novos horizontes para o cliente, oferecendo conteúdos criativos e vídeos diferenciados para ajudar você e sua marca a se destacar no mercado.<br /><br />
                                        Produzimos filmes institucionais, fashion films, vídeos para redes sociais e Youtube, clipes musicais, aftermovies de eventos, entre outras produções.<br /><br />
                                        Cada Job tem sua pré-produção e pós-produção, onde envolve planejamento, roteiro, direção, captação, edição e finalização, transformando em algo exclusivo.<br /><br />
                                        E aí, tá esperando o que pra desbloquear o filme pra sua marca?</Typography>
                        </div>
                        <Footer />
                </div>
        )
}

export default About;