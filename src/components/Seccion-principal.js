import "../styles/_SeccionPrincipal.scss";

const SeccionPrincipal = ()=>{
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
        </main>
     )

}
export default SeccionPrincipal;