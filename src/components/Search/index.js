import { useState } from 'react'
import { filmes_search } from '../../service/api'
import RenderResults from '../RenderResults'
import './style.css'
const Search = () => {

    const [termPesquisa, setTermPesquisa] = useState('')
    const [pesquisa, setPesquisa] = useState([])

    const getData = async (e) => {
        e.preventDefault();
        setPesquisa(await filmes_search(termPesquisa));
    };

    return (
        <>  
            <aside>
                <div className="maxWidthContainer">
                    <div className="pesquisa">
                        <form onSubmit={getData}>
                            <input type="text" placeholder='Nome do filme...' onChange={(e) => { setTermPesquisa(e.target.value) }} />
                            <div className="linhaSearch"></div>
                            <div className="resultFilmes">
                                {pesquisa.length > 0
                                    ? <RenderResults filmes={pesquisa} />
                                    : null}
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Search