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
        a: {
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
                                                <a className={classes.a}>
                                                        {postData[0].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[0].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[0].media_url}></img>
                                                        }
                                                </a>
                                                <a className={classes.a}>
                                                        {postData[1].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[1].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[1].media_url}></img>
                                                        }
                                                </a>
                                                <a className={classes.a}>
                                                        {postData[2].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[2].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[2].media_url}></img>
                                                        }</a>
                                        </div>
                                        <div className={classes.row}>
                                                <a className={classes.a}>
                                                        {postData[3].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[3].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[3].media_url}></img>
                                                        }
                                                </a>
                                                <a className={classes.a}>
                                                        {postData[4].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[4].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[4].media_url}></img>
                                                        }
                                                </a>
                                                <a className={classes.a}>
                                                        {postData[5].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[5].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[5].media_url}></img>
                                                        }
                                                </a>
                                        </div>
                                        <div className={classes.row}>
                                                <a className={classes.a}>
                                                        {postData[6].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[6].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[6].media_url}></img>
                                                        }
                                                </a>
                                                <a className={classes.a}>
                                                        {postData[7].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[7].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[7].media_url}></img>
                                                        }
                                                </a>
                                                <a className={classes.a}>
                                                        {postData[8].media_type == 'VIDEO' ?
                                                                <video className={classes.img}>
                                                                        <source src={postData[8].media_url}></source>
                                                                </video>
                                                                :
                                                                <img className={classes.img} src={postData[8].media_url}></img>
                                                        }
                                                </a>
                                        </div>
                                </div>

                        }

                </div >


        );

}
