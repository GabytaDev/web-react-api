import "../styles/_CardContent.scss"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


const Characters = ()=>{
 const [characters, setCharacters] = useState([])
 
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((res)=> res.json())
        .then((data)=> setCharacters(data.results))
    }, [])

    return (
        <div >
            <Typography variant="h4" sx={{m:1, p:1}}>Characters</Typography>
            <section className="contenedor-tarjetas">
             {characters.map((character)=>(
                <CardActionArea key={character.id} className="tarjeta">
                 <Card sx={{m:1, p:1}}>
                    <Link to={`/characters/${character.id}`} className="style-link">
                        <div>
                        <Typography variant="h5">{character.name}</Typography>
                            
                            <img src={character.image} className="img-tarjeta" alt="imagen-personaje"/>
                        </div>
                    </Link> 
                </Card>
               </CardActionArea>
            ))}
            </section>
        </div>
    )
}
export default Characters;