import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import EmailIcon from '@material-ui/icons/Email';
import ContactImage from '../../assets/bg-contact.jpg';
import ContactForm from '../../components/contact-form'
const axios = require('axios');

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
        contactWrapper: {

        }
}))

export default () => {
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
                <>
                        <div className={classes.headerBgWrapper}>
                                <Header black={blackHeader} />
                                <Banner bannerImg={ContactImage} icon={<EmailIcon fontSize='inherit' />} label='entre em contato' darkbg={true} />
                        </div>
                        <ContactForm />
                        <Footer />
                </>
        )
}