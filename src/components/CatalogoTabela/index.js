import React, { useEffect, useState } from 'react'
import { dados_generos, filmes_genero, top_filmes} from '../../service/api'
import error from '../../assets/images/error.png'
import './style.css'

const CatalogoTabela = () => {

    const generoSelecionado = 28
    const [ generos, setGeneros ] = useState ([])
    const [filmesPorGenero, setFilmesPorGenero] = useState([])
    const [filmesPorPageList, setFilmesPorPageList] = useState(3)
    const [filmesPorPageGrid, setFilmesPorPageGrid] = useState(6)
    const [view, setView] = useState('list')

    useEffect(() => {
        const getDadosTabela = async () => {
            setGeneros(await dados_generos());
            setFilmesPorGenero(await filmes_genero(`${generoSelecionado}`))
        };

        getDadosTabela();
    }, []);

    const HandleFilmes = async (generoSelecionado) => {
        setFilmesPorGenero(await filmes_genero(`${generoSelecionado}`))
    }

    const HandleTopFilmes = async () => {
        setFilmesPorGenero(await top_filmes())

    }

    const RenderGenerosHome = (generosFilme,dados = generos) => {
        let namesGen = ''
        generosFilme.map((genero, i) => (
            dados.map((dado, i) => (
                dado.id === genero ? namesGen += `${dado.name}, ` : null))))
        return namesGen.slice(0,-2)
      }


    return (
        <div className="tabelaDeFilmes">
            <div className="tabelaOptions">
                <div className="tabelaParams">
                    <label for="searchParam">
                        <select name="searchParam" id="searchParam" onChange={(e) => {HandleFilmes(e.target.value)}}>
                            <option value="" disabled selected>por gênero</option>
                            {generos.map((genero, index) => (
                                <option key={index} value={`${genero.id}`}>{`${genero.name}`}</option>
                            ))}
                        </select>
                        <button id='topFilmes' onClick={HandleTopFilmes}>mais populares</button>
                    </label>
                </div>
                <label for="changeView">
                    <select name="changeView" id="changeView" onChange={(e) => {setView(e.target.value)}}>
                        <option value="list">em lista</option>
                        <option value="grid">em grid</option>
                    </select>
                </label>
            </div>
            {view === 'list' 
                ?
                <div className="tabelaResultadosList">
                    {filmesPorGenero.slice(0,filmesPorPageList).map((filme, index) => (
                    <article className="card__catalogo" key={index}>
                        <a href={`/filme/${filme.id}`}><img src={
                        `http://image.tmdb.org/t/p/original/${filme.foto}` === "http://image.tmdb.org/t/p/original/null"
                        ? `${error}`
                        : `http://image.tmdb.org/t/p/original/${filme.foto}`} alt="" /></a>
                        <div className="infosCard__catalogo">
                            <h5>{filme.title}</h5>
                            <p>{RenderGenerosHome(filme.genero)}</p>
                            <p className='infosCard__catalogo__nota'><i className="fas fa-star"></i><span> {filme.nota}</span></p>
                            <p>{filme.descricao}</p>
                        </div>
                    </article>))}
                    <div className="carregarMais">
                        <button onClick={() => { 
                            (filmesPorPageList < filmesPorGenero.length - 1 && setFilmesPorPageList(filmesPorPageList + 3))
                        }}>carregar mais</button>
                </div>
                </div>
                

                : 
                <>
                    <div className="tabelaResultadosGrid">
                        {filmesPorGenero.slice(0,filmesPorPageGrid).map((filme, index) => (
                        <article className="card__catalogo__grid" key={index}>
                            <a href={`/filme/${filme.id}`}><img src={
                            `http://image.tmdb.org/t/p/original/${filme.foto}` === "http://image.tmdb.org/t/p/original/null"
                            ? `${error}`
                            : `http://image.tmdb.org/t/p/original/${filme.foto}`} alt="" /></a>
                            <div className="infosCard__catalogo">
                                <h5>{filme.title}</h5>
                                <p>{RenderGenerosHome(filme.genero)}</p>
                                <p className='infosCard__catalogo__nota'><i className="fas fa-star"></i><span> {filme.nota}</span></p>
                                <p>{filme.descricao}</p>
                            </div>
                        </article>))}
                    </div>
                    <div className="carregarMais">
                        <button onClick={() => { 
                            (filmesPorPageGrid < filmesPorGenero.length - 1 && setFilmesPorPageGrid(filmesPorPageGrid + 2))
                            }}>carregar mais</button>
                    </div>
                </>}
            </div>
    )
}

export default CatalogoTabela