import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Movie from '../movie';

const useStyles = makeStyles((theme) => ({
        movieRow: {
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'hidden'
        }
}))

export default () => {
        const classes = useStyles();
        const filmArr = ['https://www.youtube.com/embed/LL-gyhZVvx0', 'https://www.youtube.com/embed/uZET6hpfV-4', 'https://www.youtube.com/embed/a5uQMwRMHcs', 'https://www.youtube.com/embed/9W44NWYwa1g']

        const [scrollX, setScrollX] = useState(0);

        const handleLeftArrow = () => {
                let x = scrollX + Math.round(window.innerWidth / 2);
                if (x > 0) {
                        x = 0;
                }
                setScrollX(x);
        }

        const handleRightArrow = () => {
                let x = scrollX - Math.round(window.innerWidth / 2);
                let listW = 4 * 420;
                if ((window.innerWidth - listW) > x) {
                        x = (window.innerWidth - listW) - 60;
                }

                setScrollX(x)
        }

        return (
                <div className={classes.movieRow}>
                        <div className={classes.moveLeft} onClick={handleLeftArrow}>
                                <NavigateBeforeIcon style={{ fontSize: 50 }} />
                        </div>
                        <div className={classes.moveRight}  onClick={handleRightArrow}>
                                <NavigateNextIcon style={{ fontSize: 50 }} />
                        </div>
                        {filmArr.map((url, key) => (
                                <div key={key}>
                                        <Movie url={url}></Movie>
                                </div>
                        ))}
                </div>
        );
}