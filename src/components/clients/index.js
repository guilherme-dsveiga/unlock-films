import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Australian from '../../assets/australian.png';
import Bacardi from '../../assets/bacardi.png';
import Bublet from '../../assets/bublet.png';
import Igana from '../../assets/igana.png';
import Layback from '../../assets/layback.png';
import Pivot from '../../assets/pivot.png';
import PizzaCo from '../../assets/pizzaco.png';
import Qualeh from '../../assets/qualeh.png';
import SDB from '../../assets/sdb.png';
import Six from '../../assets/six.png';
import Surftrunk from '../../assets/surftrunk.png';
import Tole from '../../assets/tole.png';
import Twin from '../../assets/twin.png';
import Via from '../../assets/via.png';



const useStyles = makeStyles((theme) => ({
        clientsWrapper: {

        },
        ourClients: {
                textAlign: 'center',
                paddingBlock: theme.spacing(8),
                [theme.breakpoints.down(900)]: {
                        fontSize: '24px!important',
                        paddingBlock: theme.spacing(5),
                },
                [theme.breakpoints.down(500)]: {
                        fontSize: '20!important',
                        paddingBlock: theme.spacing(3),
                }
        },
        clientsContainer: {
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: theme.spacing(3),

        },
        gridImageContainer: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '150px',
                height: '100%'
        },
        gridImage: {
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover': {
                        transform: 'scale(1)'
                }
        },
        gridImageBlack: {
                width: '275px',
                height: '275px',
                padding: '1rem',
                alignSelf: 'center',
                backgroundColor: 'black',
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover': {
                        transform: 'scale(1)'
                },
                objectFit: 'contain'
        },
        gridContainer: {
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: theme.spacing(5),
                [theme.breakpoints.down(500)]: {
                        display: 'flex',
                        flexDirection: 'column'
                }
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

const Clients = () => {
        const classes = useStyles();
        const [showItem, setShowItem] = useState(false);

        const showMoreItems = () => {
                setShowItem((prev) => !prev);
        }

        return (
                <div className={classes.clientsWrapper}>
                        <Container className={classes.clientsContainer}>
                                <Typography variant='h4' className={classes.ourClients}>NOSSOS CLIENTES</Typography>
                                <Grid className={classes.gridContainer} container spacing={3}>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImageBlack} src={Australian} alt="Logo de cliente"></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImageBlack} src={Bacardi} alt="Logo de cliente"></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImageBlack} src={Bublet} alt="Logo de cliente"></img>
                                        </Grid>

                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImageBlack} src={Igana} alt="Logo de cliente"></img>
                                        </Grid>
                                        {showItem ? <>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Layback} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Pivot} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={PizzaCo} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Qualeh} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={SDB} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Six} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Surftrunk} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Tole} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Twin} alt="Logo de cliente"></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Via} alt="Logo de cliente"></img>
                                                </Grid>
                                        </>
                                                :
                                                <>
                                                </>
                                        }

                                </Grid>
                                <Button
                                        variant="contained"
                                        className={classes.button}
                                        startIcon={showItem ? <RemoveIcon /> : <AddIcon />}
                                        onClick={showMoreItems}
                                >
                                        {showItem ? 'Ver Menos' : 'Ver Mais'}
                                </Button>
                        </Container>
                </div>
        );
}

export default Clients;