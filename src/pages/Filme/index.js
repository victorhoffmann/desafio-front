import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { filme_id , video_filme_id} from '../../components/service/api'
import image from '../../components/assets/images/teste.png'
import './style.css'

const Filme = () => {
    const { id } = useParams()

    const [filme, setData] = useState([]);
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setData(await filme_id(id));
            setTrailer(await video_filme_id(id))
        };

        getData();
    }, []);

  return (
    <main>
        {console.log(filme)}
        <div className="indexFilme">
            <div className="infosFilme">
                <div className="fotoFilme">
                    <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                </div>
                <div className="textFilme">
                    <h2>{filme.title}</h2>
                    <div className="genr-nota">
                        <p>Genero</p>
                        <p><i className="fas fa-star"></i><span> {filme.vote_average}</span></p>
                    </div>
                    <div className="sinopse">
                        <p>Sinopse</p>
                        <p>{filme.overview}</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="trailerFilme">
                <div className="maxWidthContainer">
                    <h3>Trailer</h3>
                    <div className="linhaHorizontal"></div>
                    <div className="trailerVideo">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
    </main>
  )
}

export default Filme