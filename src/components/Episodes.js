import "../styles/_CardContent.scss";
import CardActionArea from "@mui/material/CardActionArea";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Episodes = ()=>{
    const [episodes, setEpisodes] = useState([])
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/episode`)
        .then((res)=> res.json())
        .then((data)=> setEpisodes(data.results))
    }, [])
    return (
        <div>
            <Typography variant="h4" sx={{m:1, p:1}}> Episodes</Typography>
            <section className="contenedor-tarjetas">
             {episodes.map((episode)=>(
                <CardActionArea key={episode.id} className="tarjeta" >
                 <Card sx={{m:1, p:1}}>
                    <Link to={`/episodes/${episode.id}`} className="style-link">
                        <div>
                        <Typography variant="h5">{episode.name}</Typography>
                            
                        </div>
                    </Link> 
                </Card>
               </CardActionArea>
            ))}
            </section>
        </div>
    )
}
export default Episodes;