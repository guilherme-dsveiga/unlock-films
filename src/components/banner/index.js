import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        bgImageWrapperDark: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: '999',
                [theme.breakpoints.down('sm')]: {
                        marginTop: '124px'
                }
        },
        bgImageWrapper: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
        },
        bgImage: {
                width: '100%',
                position: 'relative',
                zIndex: '-1'
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
}))

const Banner = ({ bannerImg, icon, label, darkbg, marginTop, alt }) => {
        const classes = useStyles();

        return (
                <div className={darkbg ? classes.bgImageWrapperDark : classes.bgImageWrapper}>
                        <img className={classes.bgImage} src={bannerImg} alt={alt}></img>
                        <div className={classes.filmIconWrapper}>
                                <div className={classes.iconSize}>
                                        {icon}
                                </div>
                                <label>{label}</label>
                        </div>
                </div>
        )
}

export default Banner;