import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel'
import { carousel_home } from '../../service/api';
import './style.css'

const Home = () => {

    const [filmes_carousel, setFilmesCarousel] = useState([]);

    useEffect(() => {
        const getFilmesCarousel = async () => {
            setFilmesCarousel(await carousel_home);
        };

        getFilmesCarousel();
    }, []);

    return (
        <main>
            <div className="indexFilme">
                <div className="carouselTitle">
                    <h1>&bull; <span><bold>Lançamentos</bold> da semana</span></h1>
                </div>
                <div className="maxWidthContainer">
                    <div className="carouselHome">
                        <Carousel filmes={filmes_carousel}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home