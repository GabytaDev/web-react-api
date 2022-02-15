import "../styles/_SeccionPrincipal.scss";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Busqueda from "./Busqueda";
import Box from '@mui/material/Box';

const SeccionPrincipal = () => {
   const [personajes, setPersonajes] = useState([]);
   const [valorInput, setValorInput] = useState("");
   const [busqueda, setBusqueda] = useState("")

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
         .then((res) => res.json())
         .then((data) => setPersonajes(data.results));

   },[busqueda]);

   const handleChange = (e) => {
      setValorInput(e.target.value)
   }
   const handleClick = ()=>{
      setBusqueda(valorInput)
   }

   return (
      <main>
         <section>
            <Box sx={{display: 'flex',justifyContent:"center",
            m: 1,
            p: 1}}>
            <Busqueda
               actualizarInput={handleChange}
               clickBoton = {handleClick}
            />
            </Box>
         </section>
         <section className="contenedor-tarjetas">

            {personajes.map((personaje) => (
               <div key={personaje.id} className="tarjeta-personaje">
                  <Typography variant="h5">{personaje.name}</Typography>
                  <div className="img-tarjeta">
                     <img src={personaje.image} alt="image characters"></img>
                  </div>
                  <Typography variant="body1">Specie: {personaje.species}</Typography>
                  <Typography variant="body1">Gender: {personaje.gender}</Typography>
               </div>
            ))}
         </section>
      </main>
   )

}
export default SeccionPrincipal;