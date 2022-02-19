import "../styles/_CardContent.scss"
import CardActionArea from "@mui/material/CardActionArea";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Characters = ()=>{
 const [characters, setCharacters] = useState([])
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character`)
        .then((res)=> res.json())
        .then((data)=> setCharacters(data.results))
    }, [])

    return (
        <div >
            <h2>Characters</h2>
            <section className="contenedor-tarjetas">
             {characters.map((character)=>(
                <CardActionArea className="tarjeta">
                 <Card sx={{m:1, p:1}}>
                    <Link to={`/characters/${character.id}`}>
                        <div>
                        <Typography variant="h5">{character.name}</Typography>
                            
                            <img src={character.image} className="img-tarjeta"/>
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