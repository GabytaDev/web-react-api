import "../styles/_Navbar.scss"

const NavBar = ()=>{
    return(
        <div className="contenedor-nav">
            <h3>Buscador</h3>
            <div className="contenedor-links">
                <button>Personajes</button>
                <button>Episodios</button>
                <button>Estado</button>
            </div>
        </div>
    )
}

export default NavBar;