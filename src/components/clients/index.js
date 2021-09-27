import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Rihappy from '../../assets/gruporihappy.png';
import Viaskate from '../../assets/viaskate-black.jpeg';
import Dabdog from '../../assets/dabdog.png';
import Jcls from '../../assets/jcls.jpeg';
import Bomfim from '../../assets/bomfim.png';
import ToGo from '../../assets/togo-congelados.png';
import Embakeep from '../../assets/embakeep.png';
import Subb from '../../assets/subb.png';
import Six from '../../assets/six.png';
import VBoat from '../../assets/vboat.png';
import Prodia from '../../assets/prodia.png';
import Soulshaker from '../../assets/soul.png';
import Tazz from '../../assets/tazz.png';
import Healthlife from '../../assets/healthlife.png';
import Preo from '../../assets/preo.png';
import Aseel from '../../assets/aseel.png';
import Shesko from '../../assets/shesko.png';
import YgorYtb from '../../assets/ygorYtb.png';
import Twin from '../../assets/twin.png';
import Bysis from '../../assets/bysis.png';
import Boo from '../../assets/boo.png';


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
                '&:hover':{
                        transform: 'scale(1)'
                }
        },
        gridImageBlack: {
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                backgroundColor: 'black',
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover':{
                        transform: 'scale(1)'
                }
        },
        gridImageBlackPreo:{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                backgroundColor: 'black',
                paddingBlock: theme.spacing(1),
                paddingInline: theme.spacing(2),
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover':{
                        transform: 'scale(1)'
                }
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

export default () => {
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
                                                <img className={classes.gridImage} src={Rihappy}></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImage} src={Viaskate}></img>
                                        </Grid>
                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImage} src={Dabdog}></img>
                                        </Grid>

                                        <Grid className={classes.gridImageContainer} item xs={3}>
                                                <img className={classes.gridImage} src={Bomfim}></img>
                                        </Grid>
                                        {showItem ? <>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={ToGo}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Embakeep}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Aseel}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Jcls}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Six}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Healthlife}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={VBoat}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Prodia}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Soulshaker}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Tazz}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlackPreo} src={Preo}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Subb}></img>
                                                </Grid>

                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={Shesko}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImageBlack} src={YgorYtb}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Twin}></img>
                                                </Grid>
                                                <Grid className={classes.gridImageContainer} item xs={3}>
                                                        <img className={classes.gridImage} src={Boo}></img>
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