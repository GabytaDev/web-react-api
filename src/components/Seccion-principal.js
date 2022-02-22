import "../styles/_CardContent.scss";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Busqueda from "./Busqueda";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia } from "@mui/material";

const SeccionPrincipal = () => {
   const [personajes, setPersonajes] = useState([]);
   const [valorInput, setValorInput] = useState("");
   const [busqueda, setBusqueda] = useState("")

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
         .then((res) => res.json())
         .then((data) => setPersonajes(data.results));

   }, [busqueda]);

   const handleChange = (e) => {
      setValorInput(e.target.value)
   }
   const handleClick = () => {
      setBusqueda(valorInput)
   }

   return (
      <main>
         <section>
            <Box sx={{
               display: 'flex', justifyContent: "center",
               m: 1,
               p: 1
            }}>
               <Busqueda
                  actualizarInput={handleChange}
                  clickBoton={handleClick}
               />
            </Box>
         </section>
         <section className="contenedor-tarjetas">

            {personajes.map((personaje) => (
               <div key={personaje.id} >
                  <CardActionArea>
                     <Card sx={{m:1, p:1}}>
                        <Typography variant="h5">{personaje.name}</Typography>
                        <CardMedia>
                           <div className="img-tarjeta">
                              <img src={personaje.image} alt="imagen-personaje"></img>
                           </div>
                        </CardMedia>
                       
                     </Card>
                  </CardActionArea>
               </div>
            ))}
         </section>
      </main>
   )

}
export default SeccionPrincipal;