import './style.css'
const Header = () => {
    return (
        <header>
            <div className="maxWidthContainer">
                <nav>
                    <div className="logo">
                        <h1>Suno <span className='h1Color'>Movies</span></h1>
                    </div>
                    <ul className="links">
                        <li><a href="/">INÍCIO</a></li>
                        <li><a href="#catalogo" className='ativada'>CATÁLOGO</a></li>
                        <li><a href=""><i className="fas fa-search"></i></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header