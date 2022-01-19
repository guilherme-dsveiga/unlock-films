import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Movie from '../movie';
import { Carousel } from '3d-react-carousal';
import './movie-row.css'

const useStyles = makeStyles((theme) => ({
        carouselWrapper: {
                width: '100%'
        }
}))

const MovieRow = ({ campaign }) => {
        const classes = useStyles();

        const movies = {
                campaign: ['https://vimeo.com/454396458', 'https://vimeo.com/471488743', 'https://vimeo.com/524996121', 'https://vimeo.com/488636959', 'https://vimeo.com/370124174', 'https://vimeo.com/575047679', 'https://vimeo.com/570327281',],
                fashion: ['https://vimeo.com/560265577', 'https://vimeo.com/592264422', 'https://vimeo.com/448910380', 'https://vimeo.com/448210630', 'https://vimeo.com/443212185', 'https://vimeo.com/377638120'],
                institucional: ['https://vimeo.com/575045363', 'https://vimeo.com/425193414', 'https://vimeo.com/524984948', 'https://vimeo.com/524981900'],
                sports: ['https://vimeo.com/386781650', 'https://vimeo.com/453809306', 'https://vimeo.com/513887100', 'https://vimeo.com/503630089', 'https://vimeo.com/524985449', 'https://vimeo.com/525082078'],
                after: ['https://vimeo.com/413586123', 'https://vimeo.com/370091171', 'https://vimeo.com/370495076', 'https://vimeo.com/378435969', 'https://vimeo.com/376446495'],
                clips: ['https://vimeo.com/435183080', 'https://vimeo.com/452738244'],
                food: ['https://vimeo.com/560453164', 'https://vimeo.com/575039323', 'https://vimeo.com/513887510', 'https://vimeo.com/519636729']
        }

        let slides = [];

        switch (campaign) {
                case 'campanhas':
                        slides = [
                                movies.campaign.map((item, key) => (
                                        <Movie url={item} key={key} />
                                ))
                        ]
                        break;
                case 'fashion':
                        slides = [
                                movies.fashion.map((item, key) => (
                                        <Movie url={item} key={key} />
                                ))
                        ];
                        break;
                case 'institucional':
                        slides = [
                                movies.institucional.map((item, key) => (
                                        <Movie url={item} key={key}/>
                                     ))
                        ];
                        break;
                case 'esportes':
                        slides = [
                                movies.sports.map((item, key) => (
                                        <Movie url={item} key={key}/>
                                     ))
                        ];
                        break;
                case 'aftermovie':
                        slides = [
                                movies.after.map((item, key) => (
                                        <Movie url={item} key={key}/>
                                     ))
                        ];
                        break;
                case 'clipe':
                        slides = [
                                movies.clips.map((item, key) => (
                                        <Movie url={item} key={key}/>
                                     ))
                        ];
                        break;
                case 'food':
                        slides = [
                                movies.food.map((item, key) => (
                                        <Movie url={item} key={key}/>
                                     ))
                        ];
                        break;
                default: break;
        }


        return (
                <div className={classes.carouselWrapper}>
                        <Carousel className={classes.carousel} slides={slides}>
                        </Carousel>
                </div>
        );
}

export default MovieRow;