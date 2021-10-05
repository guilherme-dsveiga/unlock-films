import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        bgImageWrapperDark: {
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: '999'
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

export default ({ bannerImg, icon, label, darkbg, marginTop }) => {
        const classes = useStyles();

        return (
                <div className={darkbg ? classes.bgImageWrapperDark : classes.bgImageWrapper} style={{
                        marginTop: marginTop ? '124px' : '0',
                }}>
                        <img className={classes.bgImage} src={bannerImg}></img>
                        <div className={classes.filmIconWrapper}>
                                <div className={classes.iconSize}>
                                        {icon}
                                </div>
                                <label>{label}</label>
                        </div>
                </div>
        )
}