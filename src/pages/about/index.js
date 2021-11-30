import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import InfoIcon from '@material-ui/icons/Info';
import InstagramIcon from '@material-ui/icons/Instagram';
import bgImage from '../../assets/home-banner.jpg';
import brothersBanner from '../../assets/brothers-banner.jpg';
import Lucas from '../../assets/lucas.jpg'
import Matheus from '../../assets/matheus.jpg'
import { Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
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
                <div>
                        <div className={classes.headerBgWrapper}>
                                <Header black={blackHeader} />
                                <Banner bannerImg={bgImage} icon={<InfoIcon fontSize='inherit' />} label='sobre nós' darkbg={true} />
                        </div>
                        <div className={classes.homeBanner}>
                                <img className={classes.homeBannerImg} src={brothersBanner}></img>
                        </div>
                        <section className={classes.descriptionSection}>
                                <div className={classes.singleReverse}>
                                        <div className={classes.textBlock}>
                                                <Typography className={classes.textBlockTypography} variant='h3'>Lucas Yuji</Typography>
                                                <Typography className={classes.textBlockTypography} variant="h5">Shabby chic etsy cray listicle flexitarian taiyaki. Pop-up flannel occupy, tumeric slow-carb meh kombucha. Edison bulb meditation sustainable, meggings hexagon godard forage farm-to-table activated charcoal vape polaroid. Whatever ennui live-edge, hella franzen small batch wayfarers narwhal kombucha man bun 90's lo-fi. Hashtag raclette pickled knausgaard shaman bushwick lo-fi vaporware offal intelligentsia cardigan.</Typography>
                                                <Typography className={classes.textBlockTypography} variant="h5">Portland bitters gluten-free vinyl. Celiac succulents shoreditch prism. Neutra readymade hoodie raw denim echo park post-ironic air plant chillwave cray typewriter fashion axe adaptogen. Disrupt microdosing try-hard thundercats church-key subway tile narwhal chicharrones. Tattooed knausgaard before they sold out, skateboard selfies ennui beard la croix truffaut live-edge banjo squid tumeric yuccie. Deep v post-ironic brooklyn flexitarian freegan, gochujang health goth tacos la croix keytar air plant echo park kinfolk hexagon wayfarers.</Typography>
                                                <Button className={classes.instagramButton}  variant="contained" startIcon={<InstagramIcon className={classes.instagramIconFont} fontSize='inherit' />}><Link className={classes.linkItem} to={{ pathname: "https://www.instagram.com/_lucasyuji/" }}  target="_blank">@_lucasyuji</Link></Button>
                                        </div>
                                        <img className={classes.picture} src={Lucas}></img>
                                </div>
                                <div className={classes.single}>
                                        <img className={classes.picture} src={Matheus}></img>
                                        <div className={classes.textBlock}>
                                                <Typography className={classes.textBlockTypography} variant='h3'>Matheus Kenji</Typography>
                                                <Typography className={classes.textBlockTypography} variant="h5">Shabby chic etsy cray listicle flexitarian taiyaki. Pop-up flannel occupy, tumeric slow-carb meh kombucha. Edison bulb meditation sustainable, meggings hexagon godard forage farm-to-table activated charcoal vape polaroid. Whatever ennui live-edge, hella franzen small batch wayfarers narwhal kombucha man bun 90's lo-fi. Hashtag raclette pickled knausgaard shaman bushwick lo-fi vaporware offal intelligentsia cardigan.</Typography>
                                                <Typography className={classes.textBlockTypography} variant="h5">Portland bitters gluten-free vinyl. Celiac succulents shoreditch prism. Neutra readymade hoodie raw denim echo park post-ironic air plant chillwave cray typewriter fashion axe adaptogen. Disrupt microdosing try-hard thundercats church-key subway tile narwhal chicharrones. Tattooed knausgaard before they sold out, skateboard selfies ennui beard la croix truffaut live-edge banjo squid tumeric yuccie. Deep v post-ironic brooklyn flexitarian freegan, gochujang health goth tacos la croix keytar air plant echo park kinfolk hexagon wayfarers.</Typography>
                                                <Button className={classes.instagramButton}  variant="contained" startIcon={<InstagramIcon className={classes.instagramIconFont} fontSize='inherit' />}><Link className={classes.linkItem} to={{ pathname: "https://www.instagram.com/kenji.films/" }}  target="_blank">@kenji.films</Link></Button>
                                        </div>
                                </div>
                        </section>
                        <Footer />
                </div>
        )
}