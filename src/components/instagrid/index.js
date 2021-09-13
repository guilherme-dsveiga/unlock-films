import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        instaGrid: {
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '600px',
                height: '600px',
                justifyContent: 'center',
                alignItems: 'center'
        },
        row: {
                display: 'flex',
                flexDirection: 'row',
                width: 'auto',
                height: '33%',
        },
        img: {
                width: '100%',
                height: '100%',
                transform: 'scale(0.95)',
                transition: 'all 0.2s ease',
                borderRadius: '5px',
                '&:hover': {
                        transform: 'scale(1)'
                },
        },
        a:{
                cursor: 'pointer'
        }

}));

export default ({ postData }) => {
        const classes = useStyles();

        return (
                <div className={classes.instaGrid}>
                        {postData &&
                                <div className={classes.instaGrid}>
                                        <div className={classes.row}>
                                                <a className={classes.a}><img className={classes.img} src={postData[0].media_url}></img></a>
                                                <a className={classes.a}><img className={classes.img} src={postData[1].media_url}></img></a>
                                                <a className={classes.a}><img className={classes.img} src={postData[3].media_url}></img></a>
                                        </div>
                                        <div className={classes.row}>
                                                <a className={classes.a}><img className={classes.img} src={postData[3].media_url}></img></a>
                                                <a className={classes.a}><img className={classes.img} src={postData[0].media_url}></img></a>
                                                <a className={classes.a}><img className={classes.img} src={postData[1].media_url}></img></a>
                                        </div>
                                        <div className={classes.row}>
                                                <a className={classes.a}><img className={classes.img} src={postData[2].media_url}></img></a>
                                                <a className={classes.a}><img className={classes.img} src={postData[3].media_url}></img></a>
                                                <a className={classes.a}><img className={classes.img} src={postData[0].media_url}></img></a>
                                        </div>
                                </div>
                        }

                </div>


        );

}
