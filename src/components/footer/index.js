import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
        footerContainer: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
        },
        instaGrid: {

        },
        contactContainer: {

        }
}))

export default () => {
        const classes = useStyles();

        return (
                <div className={classes.footerContainer}>
                        <div className={classes.instaGrid}>
                        </div>
                        <div className={classes.contactContainer}>
                        </div>
                </div>
        );
}
