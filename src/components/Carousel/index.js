import React, { useState, useEffect } from 'react';
import { carousel_home, dados_generos } from '../../service/api';
import './style.css'
import error from '../../assets/images/error.png'

const Carousel = () => {

  const [filmes_carousel, setFilmesCarousel] = useState([]);
  const [showFilmes, setShowFilmes] = useState (0)
  const [ generos, setGeneros ] = useState ([])


    useEffect(() => {
        const getFilmesCarousel = async () => {
            setFilmesCarousel(await carousel_home());
            setGeneros(await dados_generos());
        };

        getFilmesCarousel();
    }, []);

    const RenderGenerosHome = (generosFilme,dados = generos) => {
      let namesGen = ''
      generosFilme.map((genero, i) => (
          dados.map((dado, i) => (
              dado.id === genero ? namesGen += `${dado.name}, ` : null))))
      return namesGen.slice(0,-2)
    }

    return (
        <>
        {filmes_carousel.length > 1 ?
        ( <div className="carouselHome">
            <div className="left"
              onClick={() => { 
                showFilmes > 0 && setShowFilmes(showFilmes - 1)
              }}>
              <i className="fas fa-arrow-left"></i>
            </div>

            <div className="center">
               <article className="carousel__card">
                  <a href={`/filme/${filmes_carousel[showFilmes].id}`}><img src={
                    `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes].foto}` === "http://image.tmdb.org/t/p/original/null"
                    ? `${error}`
                    : `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes].foto}`} alt="" /></a>
                  <div className="carousel__infosCard">
                      <h5><span>{filmes_carousel[showFilmes].title}</span></h5>
                      <p><span>{RenderGenerosHome(filmes_carousel[showFilmes].genero)}</span></p>
                      <p><span><i className="fas fa-star"></i></span> {filmes_carousel[showFilmes].nota}</p>
                  </div>
              </article>
            
              <article className="carousel__card">
                  <a href={`/filme/${filmes_carousel[showFilmes+1].id}`}><img src={
                    `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes+1].foto}` === "http://image.tmdb.org/t/p/original/null"
                    ? `${error}`
                    : `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes+1].foto}`} alt="" /></a>
                  <div className="carousel__infosCard">
                      <h5><span>{filmes_carousel[showFilmes+1].title}</span></h5>
                      <p><span>{RenderGenerosHome(filmes_carousel[showFilmes+1].genero)}</span></p>
                      <p><span><i className="fas fa-star"></i></span> {filmes_carousel[showFilmes+1].nota}</p>
                  </div>
              </article>

              <article className="carousel__card">
                  <a href={`/filme/${filmes_carousel[showFilmes+2].id}`}><img src={
                    `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes+2].foto}` === "http://image.tmdb.org/t/p/original/null"
                    ? `${error}`
                    : `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes+2].foto}`} alt="" /></a>
                  <div className="carousel__infosCard">
                      <h5>{filmes_carousel[showFilmes+2].title}</h5>
                      <p><span>{RenderGenerosHome(filmes_carousel[showFilmes+2].genero)}</span></p>
                      <p><span><i className="fas fa-star"></i></span> {filmes_carousel[showFilmes+2].nota}</p>
                  </div>
              </article>

              <article className="carousel__card">
                  <a href={`/filme/${filmes_carousel[showFilmes+3].id}`}><img src={
                    `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes+3].foto}` === "http://image.tmdb.org/t/p/original/null"
                    ? `${error}`
                    : `http://image.tmdb.org/t/p/original/${filmes_carousel[showFilmes+3].foto}`} alt="" /></a>
                  <div className="carousel__infosCard">
                      <h5>{filmes_carousel[showFilmes+3].title}</h5>
                      <p><span>{RenderGenerosHome(filmes_carousel[showFilmes+3].genero)}</span></p>
                      <p><span><i className="fas fa-star"></i></span> {filmes_carousel[showFilmes+3].nota}</p>
                  </div>
              </article>
            </div>

              <div className="right"
                onClick={() => { 
                  showFilmes < filmes_carousel.length - 4 && setShowFilmes(showFilmes + 1)
                }}>
                <i className="fas fa-arrow-right"></i>
              </div>              
          </div>)
          : null}
      </>
    )
}

export default Carousel