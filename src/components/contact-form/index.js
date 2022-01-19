import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com'

const useStyles = makeStyles((theme) => ({
        contactWrapper: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'black'
        },
        form:{
                width: '100%',
                padding: '5rem',
                color: 'white',
                backgroundColor: 'black',
                maxWidth: '1225px',
                [theme.breakpoints.down('xs')]:{
                        padding: '2rem'
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
        buttonWrapper:{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
        },
        button: {
                color: 'black',
                background: 'white',
                padding: '3px 15px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1rem',
                fontWeight: '500',
                cursor: 'pointer',
                marginTop: '10px',

        },
        input:{
                padding: '6px',
                borderRadius: '5px',
                fontSize: '16px'
        }
}))

const ContactForm = () => {
        const classes = useStyles();
        const form = useRef();

        const sendEmail = (e) => {
               
                e.preventDefault();

                emailjs.sendForm('service_egna4wi', 'template_musrc2p', e.target, 'user_TDdVKLiAMpBuUR3H1m0RI')
                        .then((result) => {
                                alert('Email enviado com sucesso');
                        }, (error) => {
                                console.log('Um erro foi encontrado ao enviar o email, tente novamente');
                        });
                e.target.reset();
        };

        return (
                <div className={classes.contactWrapper}>
                        <form className={classes.form} ref={form} onSubmit={sendEmail}>
                                <h2 className={classes.titleContact}>deixe aqui sua mensagem!</h2>
                                <div className={classes.inputBox}>
                                        <label>Nome:</label>
                                        <input className={classes.input} type="text" name="nome"></input>
                                </div>
                                <div className={classes.inputBox}>
                                        <label>E-mail:</label>
                                        <input className={classes.input} type="text" name="email"></input>
                                </div>
                                <div className={classes.inputBox}>
                                        <label>Menssagem:</label>
                                        <textarea className={classes.input} type="text" name="mensagem" cols="30" rows="8"></textarea>
                                </div>
                                <div className={classes.buttonWrapper}>
                                        <input type="submit" value="Enviar Mensagem"className={classes.button}></input>
                                </div>
                        </form>
                </div>
        )
}

export default ContactForm;