import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import JobsDigital from '../../assets/logo-jobs.png';
import InstaGrid from '../instagrid'

const useStyles = makeStyles((theme) => ({
        footerContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                color: 'white',
                paddingBlock: theme.spacing(3),
        },
        instaGrid: {
                maxWidth: '630px',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
        },
        contactContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme.spacing(3),
        },
        contactButton: {
                textTransform: 'none',
                fontSize: 'medium',
                paddingInline: theme.spacing(2),
                transition: 'all 0.3s ease',
                '&:hover': {
                        color: '#949494'
                },
        },
        containerMain: {
                display: 'flex',
                flexDirection: 'column',
        },
        innerContactLower: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
        },
        innerContactUpper: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
        },
        jobsContainer: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingBlock: theme.spacing(1)
        },
        bottomContainer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme.spacing(3)
        },
        footerTwo: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        accent: {
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'white'
        },
        accentSpan: {
                borderBottom: '3px solid white',
                transition: 'all 0.3s ease',
                '&:hover': {
                        color: '#949494',
                        borderBottom: '3px solid #949494',
                },
        },
        jobsImage: {
                maxHeight: '20px',
                paddingLeft: '3px'
        }
}))

export default ({ postData }) => {
        const classes = useStyles();

        return (
                        <div className={classes.footerContainer}>
                                <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" width="100%">
                                        <div className={classes.contactContainer}>
                                                <Typography variant="h5">Contato</Typography>
                                                <div className={classes.outterContact}>
                                                        <div className={classes.innerContactUpper}>
                                                                <Button
                                                                        color="inherit"
                                                                        className={classes.contactButton}
                                                                        startIcon={<MailIcon />}
                                                                >
                                                                        contato@unlockfilms.com
                                                                </Button>
                                                                <Button
                                                                        color="inherit"
                                                                        className={classes.contactButton}
                                                                        startIcon={<InstagramIcon />}
                                                                >
                                                                        @unlockfilms
                                                                </Button>
                                                        </div>
                                                        <div className={classes.innerContactLower}>
                                                                <Button
                                                                        color="inherit"
                                                                        className={classes.contactButton}
                                                                        startIcon={<WhatsAppIcon />}
                                                                >
                                                                        (00) 0000-0000
                                                                </Button>
                                                                <Button
                                                                        color="inherit"
                                                                        className={classes.contactButton}
                                                                        startIcon={<WhatsAppIcon />}
                                                                >
                                                                        (00) 0000-0000
                                                                </Button>
                                                        </div>
                                                </div>

                                        </div>
                                        <div className={classes.instaGrid}>
                                                <InstaGrid postData={postData} />
                                        </div>
                                </Box>
                                <footer className={classes.bottomContainer}>
                                        <div className={classes.jobsContainer}>
                                                <Typography>© 2021 - Unlock Films. Desenvolvido por</Typography>
                                                <a href='https://jobsdigital.com.br'><img className={classes.jobsImage} src={JobsDigital}></img></a>
                                        </div>
                                        <Box className={classes.footerTwo}><p>Este site é protegido pelo <a className={classes.accent} href="https://policies.google.com/privacy"><span className={classes.accentSpan} >reCAPTCHA</span></a> e a Política de Privacidade e os <a className={classes.accent} href="https://policies.google.com/terms"><span className={classes.accentSpan}>Termos de Serviços</span></a> do Google se aplicam.</p></Box>
                                </footer>
                        </div>
        );
}
