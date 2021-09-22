import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import thumbnail from '../../assets/thumbnail.png';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import './films.css';

const useStyles = makeStyles((theme) => ({
        videoContainer: {
                objectFit: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transform: 'scale(0.9)',
                maxWidth: '630px',
                maxHeight: '360px',
                transition: 'all 0.5s ease',
        },
        thumbnailImg: {
                width: '100%',
        },
        playButton: {
                position: 'absolute',
                bottom: '38%',
                left: '45%'
        },
        videoContainerLarge: {
                objectFit: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transform: 'scale(1)',
                maxWidth: '630px',
                maxHeight: '360px',
                transition: 'all 0.5s ease',
        },
        
}))

export default ({ url }) => {
        const classes = useStyles();
        const [expandVideo, setExpandVideo] = useState(false)

        const handlePlay = () => {
                setExpandVideo((prev) => !prev)
        }


        return (
                <div className={expandVideo ? classes.videoContainerLarge : classes.videoContainer} onClick={handlePlay} style={{
                        
                }}>
                        <ReactPlayer className='round-border' pip='false' volume="0.2" controls='true' url={url} width="630" height="360"></ReactPlayer>
                </div>


        );
}