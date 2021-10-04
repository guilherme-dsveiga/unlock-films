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

export default ({ campaign }) => {
        const classes = useStyles();

        let campaignArr = ['https://vimeo.com/454396458', 'https://vimeo.com/471488743', 'https://vimeo.com/471488743', 'https://vimeo.com/488636959', 'https://vimeo.com/370124174', 'https://vimeo.com/575047679', 'https://vimeo.com/570327281']; // 7
        let fashionArr = ['https://vimeo.com/560265577', 'https://vimeo.com/592264422', 'https://vimeo.com/448910380', 'https://vimeo.com/448210630', 'https://vimeo.com/443212185', 'https://vimeo.com/443212185', 'https://vimeo.com/377638120']; // 7
        let insitucionalArr = ['https://vimeo.com/575045363', 'https://vimeo.com/425193414', 'https://vimeo.com/524984948', 'https://vimeo.com/524981900']; //3
        let esportesArr = ['https://vimeo.com/386781650', 'https://vimeo.com/453809306', 'https://vimeo.com/513887100', 'https://vimeo.com/503630089', 'https://vimeo.com/524985449', 'https://vimeo.com/525082078']; // 6
        let aftermovieArr = ['https://vimeo.com/413586123', 'https://vimeo.com/370091171', 'https://vimeo.com/370495076', 'https://vimeo.com/378435969', 'https://vimeo.com/376446495']; //5
        let clipeArr = ['https://vimeo.com/435183080', 'https://vimeo.com/452738244']; //2
        let foodArr = ['https://vimeo.com/560453164', 'https://vimeo.com/575039323', 'https://vimeo.com/513887510', 'https://vimeo.com/519636729']; //4

        let slides = [];

        switch (campaign) {
                case 'campanhas':
                        slides = [
                                <Movie url={campaignArr[0]}></Movie>,
                                <Movie url={campaignArr[1]}></Movie>,
                                <Movie url={campaignArr[2]}></Movie>,
                                <Movie url={campaignArr[3]}></Movie>,
                                <Movie url={campaignArr[4]}></Movie>,
                                <Movie url={campaignArr[5]}></Movie>,
                                <Movie url={campaignArr[6]}></Movie>,
                        ]
                        break;
                case 'fashion':
                        slides = [
                                <Movie url={fashionArr[0]}></Movie>,
                                <Movie url={fashionArr[1]}></Movie>,
                                <Movie url={fashionArr[2]}></Movie>,
                                <Movie url={fashionArr[3]}></Movie>,
                                <Movie url={fashionArr[4]}></Movie>,
                                <Movie url={fashionArr[5]}></Movie>,
                                <Movie url={fashionArr[6]}></Movie>,
                        ];
                        break;
                case 'institucional':
                        slides = [
                                <Movie url={insitucionalArr[0]}></Movie>,
                                <Movie url={insitucionalArr[1]}></Movie>,
                                <Movie url={insitucionalArr[2]}></Movie>,
                        ];
                        break;
                case 'esportes':
                        slides = [
                                <Movie url={esportesArr[0]}></Movie>,
                                <Movie url={esportesArr[1]}></Movie>,
                                <Movie url={esportesArr[2]}></Movie>,
                                <Movie url={esportesArr[3]}></Movie>,
                                <Movie url={esportesArr[4]}></Movie>,
                                <Movie url={esportesArr[5]}></Movie>,
                        ];
                        break;
                case 'aftermovie':
                        slides = [
                                <Movie url={aftermovieArr[0]}></Movie>,
                                <Movie url={aftermovieArr[1]}></Movie>,
                                <Movie url={aftermovieArr[2]}></Movie>,
                                <Movie url={aftermovieArr[3]}></Movie>,
                                <Movie url={aftermovieArr[4]}></Movie>,
                        ];
                        break;
                case 'clipe':
                        slides = [
                                <Movie url={clipeArr[0]}></Movie>,
                                <Movie url={clipeArr[1]}></Movie>,
                        ];
                        break;
                case 'food':
                        slides = [
                                <Movie url={foodArr[0]}></Movie>,
                                <Movie url={foodArr[1]}></Movie>,
                                <Movie url={foodArr[2]}></Movie>,
                                <Movie url={foodArr[3]}></Movie>,
                        ];
                        break;
        }


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