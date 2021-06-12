import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Search from '../Search'
import './style.css'
const Header = () => {

    const [mostrar, setMostrar] = useState(false)

    return (
        <>
            <header>
                <div className="maxWidthContainer">
                    <nav>
                        <div className="logo">
                            <h1>Suno <span className='h1Color'>Movies</span></h1>
                        </div>
                        <ul className="links">
                            <li><a href="/">INÍCIO</a></li>
                            <li><a href="#catalogo" className='ativada'>CATÁLOGO</a></li>
                            <li><button onClick={()=> setMostrar(!mostrar)}><i className="fas fa-search"></i></button></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {mostrar && (
                <OutsideClickHandler onOutsideClick={() => {
                    setMostrar(false)
                }}>
                    <Search/>
                </OutsideClickHandler> )}
        </>
    )
}

export default Header