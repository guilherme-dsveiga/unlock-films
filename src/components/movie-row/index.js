import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Movie from '../movie';
import Video from '../../assets/unlock-background-video.mp4';
import { Carousel } from '3d-react-carousal';
import './movie-row.css'


const useStyles = makeStyles((theme) => ({

}))

export default () => {
        const classes = useStyles();
        const filmArr = ['https://www.youtube.com/embed/9W44NWYwa1g', 'https://www.youtube.com/embed/isZPA9ZScy8', 'https://www.youtube.com/embed/UGtqLEh91EU', 'https://www.youtube.com/embed/8F46qx6HKWY']


        const breakPoints = [
                { width: 1, itemsToShow: 1 },
                { width: 550, itemsToShow: 1, itemsToScroll: 1 },
                { width: 768, itemsToShow: 1 },
                { width: 1200, itemsToShow: 1 }
        ];

        let slides = [

                <Movie url={Video}></Movie>,
                <Movie url={Video}></Movie>,
                <Movie url={Video}></Movie>,

        ];


        return (
                <div className={classes.carouselWrapper}>
                        <Carousel className={classes.carousel} slides={slides}>
                        </Carousel>
                </div>
        );
}

/* <Carousel className={classes.carousel} breakPoints={breakPoints}>
                                {filmArr.map((url, key) => (
                                        <div key={key}>
                                                <Movie url={Video}></Movie>
                                        </div>
                                ))}
                        </Carousel> */