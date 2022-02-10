import "../styles/_Navbar.scss"

const NavBar = ()=>{
    return(
        <div className="contenedor-nav">
            <h3>Buscador</h3>
            <div>
                <ul className="contenedor-links-nav">
                    <div className="link" id="link-characters"><li><a href="#characters">Characters</a></li></div>
                    <div className="link" id="link-episodes"><li><a href="#episodes">Details</a></li></div>   
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar;