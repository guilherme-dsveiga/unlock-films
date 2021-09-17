import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme) => ({
}))

export default ({ url }) => {
        const classes = useStyles();

        return (
                <ReactPlayer url="https://vimeo.com/3155182" controls='true'></ReactPlayer>
        );
}