import './style.css'
import error from '../../assets/images/error.png'
const RenderResults = ({filmes}) => {
    return (
        <>
            {filmes.slice(0,12).map((filme, index) => (
              <article className="card" key={index}>
                <a href={`/filme/${filme.id}`}><img src={
                  `http://image.tmdb.org/t/p/original/${filme.poster_path}` === "http://image.tmdb.org/t/p/original/null"
                  ? `${error}`
                  : `http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" /></a>
                <div className="infosCard">
                    <h5>{filme.title}</h5>
                    <p>Genero</p>
                    <p><i className="fas fa-star"></i><span> {filme.vote_average}</span></p>
                </div>
              </article>
            ))}
        </>
    )
}

export default RenderResults