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
           </section>  
        </main>
     )

}
export default SeccionPrincipal;