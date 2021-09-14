import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Rihappy from '../../assets/gruporihappy.png';
import Viaskate from '../../assets/viaskate-black.jpeg';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
        clientsWrapper: {

        },
        ourClients: {
                textAlign: 'center',
                paddingBlock: theme.spacing(8),
        },
        clientsContainer: {
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: theme.spacing(3)
        },
        gridImageContainer: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
        },
        gridImage: {
                width: '100%',
                height: 'auto',
                alignSelf: 'center'
        },
        gridImageResize: {
                width: '150px',
                height: 'auto',
        },
        gridContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: theme.spacing(5)
        },
        button: {
                margin: '0 auto',
                backgroundColor: '#0d0d0d',
                color: 'white',
                '&:hover': {
                        backgroundColor: '#5F5F5F',
                },
        },

}));

export default () => {
        const classes = useStyles();

        return (
                <div className={classes.clientsWrapper}>
                        <Container className={classes.clientsContainer}>
                                <Typography variant="h4" className={classes.ourClients}>NOSSOS CLIENTES</Typography>
                                <Grid className={classes.gridContainer} container spacing={3}>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImage} src={Rihappy}></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImageResize} src={Viaskate}></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImage} src={Rihappy}></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImageResize} src={Viaskate}></img>
                                        </Grid>
                                </Grid>
                                <Button
                                        variant="contained"
                                        className={classes.button}
                                        startIcon={<AddIcon />}
                                >
                                        Ver mais
                                </Button>
                        </Container>
                </div>
        );
}