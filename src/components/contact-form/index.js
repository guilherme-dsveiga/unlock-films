import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailkey from '../../emailkey';
import emailjs from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
        contactWrapper: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
        },
        form:{
                width: '100%',
                padding: '5rem',
                color: 'white',
                backgroundColor: 'black',
                [theme.breakpoints.up('md')]:{
                        margin: '2rem',
                        maxWidth: '1125px',
                        borderRadius: '20px'
                }
        },
        inputBox:{
                display: 'flex',
                flexDirection: 'column',
                marginBlock: '10px',
                '&>label':{
                        marginBottom: '5px'
                },
        },
        titleContact:{
                fontSize: '2rem',
                textAlign: 'center'
        },
        button: {
                color: 'black',
                background: 'white',
                padding: '3px 15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                fontWeight: '500'
        }
}))

export default () => {
        const classes = useStyles();
        const form = useRef();

        const sendEmail = (e) => {
               
                e.preventDefault();

                emailjs.sendForm('service_egna4wi', 'template_musrc2p', form.current, 'user_TDdVKLiAMpBuUR3H1m0RI')
                        .then((result) => {
                                alert('foi');
                        }, (error) => {
                                console.log('n foi');
                        });
                e.target.reset();
        };

        return (
                <div className={classes.contactWrapper}>
                        <form className={classes.form} ref={form} onSubmit={sendEmail}>
                                <h2 className={classes.titleContact}>Contato</h2>
                                <div className={classes.inputBox}>
                                        <label>Nome:</label>
                                        <input type="text" name="nome"></input>
                                </div>
                                <div className={classes.inputBox}>
                                        <label>E-mail:</label>
                                        <input type="text" name="email"></input>
                                </div>
                                <div className={classes.inputBox}>
                                        <label>Menssagem: :</label>
                                        <textarea type="text" name="mensagem" cols="30" rows="8"></textarea>
                                </div>
                                <div className={classes.buttonWrapper}>
                                        <button className={classes.button}>Enviar</button>
                                </div>
                        </form>
                </div>
        )
}