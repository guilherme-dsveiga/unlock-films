import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import './films.css';

const useStyles = makeStyles((theme) => ({
        videoContainer: {
                objectFit: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
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
                        <ReactPlayer className='round-border' pip='false' volume="0.2" controls='true' url={url}></ReactPlayer>
                </div>


        );
}