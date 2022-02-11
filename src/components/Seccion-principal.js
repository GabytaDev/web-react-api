import "../styles/_SeccionPrincipal.scss";
import { useState, useEffect} from "react";

const SeccionPrincipal = ()=>{
   const [personajes, setPersonajes] = useState([]);

   useEffect (()=>{
      fetch("https://rickandmortyapi.com/api/character")
      .then((res)=> res.json())
      .then((data)=> setPersonajes(data.results));
      console.log(setPersonajes)
   },[])

     return (
        <main>
           <section className="seccion-busqueda">
            <form className="form">
               <input type="text" placeholder="Search" className="input"></input>
               <select>
                  <option>Characters</option>
                  <option>Episodes</option>
               </select>
            </form>
            <div className="seccion-boton-buscar">
                    <button id="buscar" className="btn-buscar">Search</button>
                </div> 
           </section>  
           <section className="contenedor-tarjetas">
                 {personajes.map((personaje)=>(
                    <div className="tarjeta-personaje">
                       <h4>{personaje.name}</h4>
                       <div className="img-tarjeta">
                          <img src={personaje.image}></img>
                       </div>
                    </div>
                 ))}
              
           </section>
        </main>
     )

}
export default SeccionPrincipal;