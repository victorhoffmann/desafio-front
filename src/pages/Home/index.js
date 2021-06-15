import Carousel from '../../components/Carousel'
import CatalogoTabela from '../../components/CatalogoTabela'
import './style.css'

const Home = () => {
    return (
        <main>
            <div className="indexFilme">
                <div className="carouselTitle">
                    <h1>&bull; <span><bold>Lançamentos</bold> da semana</span></h1>
                </div>
                <div className="maxWidthContainer">
                    <Carousel/>  
                </div>
                <div id='catalogo'>
                    <div className="catalogoTitle">
                        <div className="maxWidthContainer">
                            <h1>&bull; <span><bold>CATÁLOGO</bold> COMPLETO</span></h1>
                        </div>
                    </div>
                    <div className="maxWidthContainer">
                        <CatalogoTabela />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home